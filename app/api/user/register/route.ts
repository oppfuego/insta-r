import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/src/lib/db/mongoose";
import User, { toSafeUser } from "@/src/lib/db/models/User";
import { sendWelcomeEmail } from "@/src/lib/email/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, surname, phoneNumber, dateOfBirth, address } =
      body;

    if (
      !email ||
      !password ||
      !name ||
      !surname ||
      !phoneNumber ||
      !dateOfBirth ||
      !address?.street ||
      !address?.city ||
      !address?.country ||
      !address?.postCode
    ) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { success: false, error: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    await connectDB();

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
      email: email.toLowerCase(),
      passwordHash,
      name,
      surname,
      phoneNumber,
      dateOfBirth,
      address,
      balanceGBP: 0,
      transactions: [],
      orders: [],
    });

    try {
      await sendWelcomeEmail({ email: user.email, name: user.name });
    } catch {
      // Email failure should not block registration
    }

    return NextResponse.json(
      { success: true, user: toSafeUser(user) },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
