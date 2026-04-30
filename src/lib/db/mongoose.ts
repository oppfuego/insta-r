import mongoose from "mongoose";
import { env } from "@/src/config/env";

const MONGODB_URI = env.MONGODB_URI;

interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseCache?: CachedConnection;
};

const cached: CachedConnection = globalWithMongoose.mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!globalWithMongoose.mongooseCache) {
  globalWithMongoose.mongooseCache = cached;
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
