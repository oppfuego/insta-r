"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { UserPlus, Zap } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";
import { countries } from "@/data/countries";

interface FormState {
  email: string;
  password: string;
  name: string;
  surname: string;
  phone: string;
  dob: string;
  street: string;
  city: string;
  country: string;
  postCode: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    name: "",
    surname: "",
    phone: "",
    dob: "",
    street: "",
    city: "",
    country: "",
    postCode: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const required: (keyof FormState)[] = [
      "email",
      "password",
      "name",
      "surname",
      "phone",
      "dob",
      "street",
      "city",
      "country",
      "postCode",
    ];
    const missing = required.some((f) => !form[f]);
    if (missing) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!agreed) {
      setError("You must agree to the Terms of Service.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          name: form.name,
          surname: form.surname,
          phoneNumber: form.phone,
          dateOfBirth: form.dob,
          address: {
            street: form.street,
            city: form.city,
            country: form.country,
            postCode: form.postCode,
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        login(data.user);
        router.push("/dashboard");
      } else {
        setError(data.error || "Registration failed.");
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
        <div className="mx-auto max-w-lg">
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
                Create your account
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Join GrowPulse and start growing today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="Alex"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                    <Input
                      label="Surname"
                      placeholder="Johnson"
                      value={form.surname}
                      onChange={(e) => update("surname", e.target.value)}
                    />
                  </div>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Create a strong password"
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+44 7123 456789"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  <Input
                    label="Date of Birth"
                    type="date"
                    value={form.dob}
                    onChange={(e) => update("dob", e.target.value)}
                  />

                  <div className="border-t border-gray-100 pt-4">
                    <p className="mb-3 text-sm font-medium text-gray-700">
                      Address
                    </p>
                    <div className="flex flex-col gap-4">
                      <Input
                        label="Street Address"
                        placeholder="123 Main Street"
                        value={form.street}
                        onChange={(e) => update("street", e.target.value)}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          label="City"
                          placeholder="London"
                          value={form.city}
                          onChange={(e) => update("city", e.target.value)}
                        />
                        <Input
                          label="Post Code"
                          placeholder="SW1A 1AA"
                          value={form.postCode}
                          onChange={(e) => update("postCode", e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">
                          Country
                        </label>
                        <select
                          value={form.country}
                          onChange={(e) => update("country", e.target.value)}
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                        >
                          <option value="">Select country</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => {
                        setAgreed(e.target.checked);
                        setError("");
                      }}
                      className="mt-1 h-4 w-4 rounded border-gray-300 accent-violet-600"
                    />
                    <span className="text-sm text-gray-500">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-violet-600 hover:text-violet-500"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-violet-600 hover:text-violet-500"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    disabled={loading}
                  >
                    <UserPlus size={18} />
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                </div>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-violet-600 hover:text-violet-500"
              >
                Sign In
              </Link>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
