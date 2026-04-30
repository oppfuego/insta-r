import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/src/lib/db/mongoose";
import User, { toSafeUser } from "@/src/lib/db/models/User";

export async function GET(
  _request: Request,
  context: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json(
        { success: false, error: "Invalid user ID." },
        { status: 400 }
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

    return NextResponse.json({ success: true, user: toSafeUser(user) });
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
