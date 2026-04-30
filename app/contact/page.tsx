"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MessageSquare } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25">
                <MessageSquare size={24} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Contact Us
              </h1>
              <p className="mt-3 text-gray-500">
                Have a question or need help? We&apos;d love to hear from you.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8"
          >
            {success ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                  <CheckCircle size={28} className="text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Message Sent!
                </h2>
                <p className="mt-2 text-gray-600">
                  Thank you for reaching out. We&apos;ll get back to you as soon
                  as possible.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                    <Input
                      label="Subject"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                    />
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us more..."
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-500">{error}</p>
                    )}

                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      disabled={loading}
                    >
                      <Send size={18} />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50">
                  <Mail size={18} className="text-violet-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-500">
                    {siteConfig.companyEmail}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50">
                  <MessageSquare size={18} className="text-violet-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Support</p>
                  <p className="text-sm text-gray-500">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
