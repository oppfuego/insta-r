import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/src/lib/db/mongoose";
import User, { toSafeUser } from "@/src/lib/db/models/User";
import { env } from "@/src/config/env";
import { sendTopUpEmail } from "@/src/lib/email/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, amountGBP } = body;

    if (!userId || amountGBP === undefined) {
      return NextResponse.json(
        { success: false, error: "userId and amountGBP are required." },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json(
        { success: false, error: "Invalid user ID." },
        { status: 400 }
      );
    }

    const amount = Number(amountGBP);
    if (isNaN(amount) || amount < 10) {
      return NextResponse.json(
        { success: false, error: "Minimum top-up amount is £10.00." },
        { status: 400 }
      );
    }

    if (!env.PAYMENT_TEST_MODE) {
      return NextResponse.json(
        {
          success: false,
          error: "Payment provider is not configured yet. Enable test mode to simulate top-ups.",
        },
        { status: 503 }
      );
    }

    await connectDB();

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found." },
        { status: 404 }
      );
    }

    const txnId = `TXN-${Date.now()}`;
    user.balanceGBP = +(user.balanceGBP + amount).toFixed(2);
    user.transactions.unshift({
      id: txnId,
      type: "topup",
      amountGBP: amount,
      currency: "GBP",
      description: "Wallet top-up",
      status: "completed",
      createdAt: new Date(),
    });

    await user.save();

    try {
      await sendTopUpEmail({ email: user.email, name: user.name }, amount);
    } catch {
      // Email failure should not block top-up
    }

    return NextResponse.json({
      success: true,
      user: toSafeUser(user),
    });
  } catch (error) {
    console.error("Top-up error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
