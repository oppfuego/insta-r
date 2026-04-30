"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LogIn, Zap } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";

export default function SignInPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        login(data.user);
        router.push("/dashboard");
      } else {
        setError(data.error || "Login failed.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center py-12">
      <Container>
        <div className="mx-auto max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25">
                <Zap size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Sign in to your GrowPulse account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                  />

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    disabled={loading}
                  >
                    <LogIn size={18} />
                    {loading ? "Signing In..." : "Sign In"}
                  </Button>
                </div>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-violet-600 hover:text-violet-500"
              >
                Sign Up
              </Link>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
