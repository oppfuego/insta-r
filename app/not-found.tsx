"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-lg text-center"
        >
          <div className="text-8xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            404
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Page Not Found</h1>
          <p className="mt-3 text-gray-500">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/">
              <Button>
                <Home size={18} />
                Back to Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">
                <ArrowLeft size={18} />
                Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
