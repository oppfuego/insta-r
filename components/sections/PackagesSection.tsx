"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Wallet } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { packages } from "@/data/packages";
import { Platform, platformInfo, ServiceType } from "@/data/services";
import { useBalance } from "@/context/BalanceContext";
import { useAuth } from "@/context/AuthContext";
import { formatCurrency } from "@/config/currency";

const platformTabs: { key: Platform; label: string }[] = [
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
  { key: "youtube", label: "YouTube" },
];

const serviceTypes: { key: ServiceType; label: string }[] = [
  { key: "likes", label: "Likes" },
  { key: "followers", label: "Followers" },
  { key: "views", label: "Views" },
];

const targetUrlLabels: Record<Platform, string> = {
  instagram: "Instagram profile or post URL",
  tiktok: "TikTok profile or video URL",
  youtube: "YouTube channel or video URL",
};

function getServiceApiValue(platform: Platform, type: ServiceType): string {
  if (platform === "youtube" && type === "followers") return "subscribers";
  return type;
}

export default function PackagesSection() {
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [serviceType, setServiceType] = useState<ServiceType>("likes");
  const { displayCurrency, purchaseService } = useBalance();
  const { isLoggedIn } = useAuth();
  const [purchaseResult, setPurchaseResult] = useState<string | null>(null);
  const [purchaseMessage, setPurchaseMessage] = useState("");
  const [targetUrl, setTargetUrl] = useState("");
  const [targetError, setTargetError] = useState("");

  const filtered = packages.filter((p) => p.platform === platform && p.type === serviceType);

  const handleBuy = async (pkg: typeof packages[0]) => {
    if (!isLoggedIn) {
      setPurchaseResult("auth");
      return;
    }
    if (!targetUrl.trim()) {
      setTargetError("Please enter a target URL or handle.");
      return;
    }
    setTargetError("");
    const serviceValue = getServiceApiValue(pkg.platform, pkg.type);
    const result = await purchaseService({
      platform: pkg.platform,
      service: serviceValue,
      package: pkg.name,
      quantity: pkg.quantity,
      price: pkg.price,
      targetUrl: targetUrl.trim(),
    });
    setPurchaseResult(result.status);
    setPurchaseMessage(result.message);
    if (result.status === "success") {
      setTargetUrl("");
      setTimeout(() => { setPurchaseResult(null); setPurchaseMessage(""); }, 3000);
    }
  };

  return (
    <section className="relative py-14 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/50 to-transparent" />

      <Container className="relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Popular{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Pre-configured packages for quick ordering. Choose your platform, service, and size.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
            {platformTabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setPlatform(key); setPurchaseResult(null); setPurchaseMessage(""); }}
                className={`rounded-lg px-5 py-2 text-sm font-medium transition-all ${
                  platform === key
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1">
            {serviceTypes.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setServiceType(key); setPurchaseResult(null); setPurchaseMessage(""); }}
                className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                  serviceType === key
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Target URL input */}
        <div className="mx-auto max-w-md mt-8">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <label className="text-sm font-medium text-gray-700">
              {targetUrlLabels[platform]}
            </label>
            <input
              type="text"
              placeholder={`Enter your ${platformInfo[platform].name} URL or @handle`}
              value={targetUrl}
              onChange={(e) => { setTargetUrl(e.target.value); setTargetError(""); }}
              className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 ${
                targetError ? "border-red-400" : "border-gray-200"
              }`}
            />
            {targetError && (
              <p className="mt-1 text-xs text-red-500">{targetError}</p>
            )}
          </div>
        </div>

        {purchaseResult === "auth" && (
          <div className="mx-auto max-w-md mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
            <p className="text-sm text-amber-800 font-medium mb-3">Please sign in to buy services with your balance.</p>
            <div className="flex justify-center gap-3">
              <Link href="/sign-in"><Button size="sm">Sign In</Button></Link>
              <Link href="/sign-up"><Button size="sm" variant="outline">Create Account</Button></Link>
            </div>
          </div>
        )}
        {purchaseResult === "success" && (
          <div className="mx-auto max-w-md mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm text-emerald-700 font-medium">
            Order placed successfully!
          </div>
        )}
        {purchaseResult === "insufficient" && (
          <div className="mx-auto max-w-md mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700 font-medium">
            {purchaseMessage || "Insufficient balance. Please top up first."}
          </div>
        )}
        {purchaseResult === "error" && (
          <div className="mx-auto max-w-md mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700 font-medium">
            {purchaseMessage || "Something went wrong. Please try again."}
          </div>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {filtered.map((pkg, i) => (
            <ScrollReveal key={pkg.id} delay={i * 0.1}>
              <div
                className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] ${
                  pkg.popular
                    ? "border-violet-300 bg-violet-50/50 shadow-lg shadow-violet-100"
                    : "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="info">
                      <Star size={10} className="mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                <p className="text-sm font-medium text-violet-600">{pkg.name}</p>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-gray-900">{formatCurrency(pkg.price, displayCurrency)}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {pkg.quantity.toLocaleString()} {serviceType}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {formatCurrency(pkg.price / pkg.quantity, displayCurrency)} per {serviceType.slice(0, -1)}
                </p>

                <Button className="mt-6" fullWidth size="sm" onClick={() => handleBuy(pkg)} variant={pkg.popular ? "primary" : "outline"}>
                  <Wallet size={14} />
                  Buy with Balance
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
