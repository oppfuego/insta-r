"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Users, Eye, Wallet } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { services, Platform, platformInfo } from "@/data/services";
import { useBalance } from "@/context/BalanceContext";
import { useAuth } from "@/context/AuthContext";
import { formatCurrency } from "@/config/currency";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const platformTabs: { key: Platform; label: string; icon: React.ComponentType<{ className?: string; size?: number }> }[] = [
  { key: "instagram", label: "Instagram", icon: InstagramIcon },
  { key: "tiktok", label: "TikTok", icon: TikTokIcon },
  { key: "youtube", label: "YouTube", icon: YoutubeIcon },
];

const serviceTypeIcons = {
  likes: Heart,
  followers: Users,
  views: Eye,
};

const targetUrlLabels: Record<Platform, string> = {
  instagram: "Instagram profile or post URL",
  tiktok: "TikTok profile or video URL",
  youtube: "YouTube channel or video URL",
};

function getServiceApiValue(platform: Platform, type: string): string {
  if (platform === "youtube" && type === "followers") return "subscribers";
  return type;
}

export default function ServicesSection() {
  const [activePlatform, setActivePlatform] = useState<Platform>("instagram");
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1000);
  const [targetUrl, setTargetUrl] = useState("");
  const [targetError, setTargetError] = useState("");
  const { balance, displayCurrency, purchaseService } = useBalance();
  const { isLoggedIn } = useAuth();
  const [purchaseResult, setPurchaseResult] = useState<"success" | "insufficient" | "auth" | "error" | null>(null);
  const [purchaseMessage, setPurchaseMessage] = useState("");

  const filtered = services.filter((s) => s.platform === activePlatform);
  const selected = services.find((s) => s.id === selectedService);

  const handleBuy = async () => {
    if (!selected) return;
    if (!isLoggedIn) {
      setPurchaseResult("auth");
      return;
    }
    if (!targetUrl.trim()) {
      setTargetError("Please enter a target URL or handle.");
      return;
    }
    setTargetError("");
    const price = +(quantity * selected.pricePerUnit).toFixed(2);
    const serviceValue = getServiceApiValue(selected.platform, selected.type);
    const result = await purchaseService({
      platform: selected.platform,
      service: serviceValue,
      package: `${quantity.toLocaleString()} ${selected.unit}`,
      quantity,
      price,
      targetUrl: targetUrl.trim(),
    });
    setPurchaseResult(result.status === "success" ? "success" : result.status === "insufficient" ? "insufficient" : "error");
    setPurchaseMessage(result.message);
    if (result.status === "success") {
      setTargetUrl("");
      setTimeout(() => {
        setBuyModalOpen(false);
        setPurchaseResult(null);
        setPurchaseMessage("");
      }, 1500);
    }
  };

  return (
    <section className="relative py-14 lg:py-20" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/50 to-transparent" />

      <Container className="relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Choose your platform and service. High-quality engagement delivered fast.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
            {platformTabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActivePlatform(key)}
                className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                  activePlatform === key
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Icon size={16} className={activePlatform === key ? "text-white" : ""} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {filtered.map((service, i) => {
            const TypeIcon = serviceTypeIcons[service.type];
            return (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50">
                      <TypeIcon size={20} className="text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-xs text-gray-400">
                        from {formatCurrency(service.minOrder * service.pricePerUnit, displayCurrency)}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span>Min: {service.minOrder.toLocaleString()} {service.unit}</span>
                    <span>{formatCurrency(service.pricePerUnit, displayCurrency)}/{service.unit.slice(0, -1)}</span>
                  </div>
                  <Button
                    className="mt-4"
                    fullWidth
                    size="sm"
                    onClick={() => {
                      setSelectedService(service.id);
                      setQuantity(service.minOrder);
                      setPurchaseResult(null);
                      setPurchaseMessage("");
                      setTargetUrl("");
                      setTargetError("");
                      setBuyModalOpen(true);
                    }}
                  >
                    <Wallet size={14} />
                    Buy with Balance
                  </Button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>

      <Modal isOpen={buyModalOpen} onClose={() => { setBuyModalOpen(false); setPurchaseResult(null); setPurchaseMessage(""); }} title="Purchase Service">
        {selected && (
          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <h4 className="font-medium text-gray-900">{selected.title}</h4>
              <p className="mt-1 text-sm text-gray-500">{selected.description}</p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                {targetUrlLabels[selected.platform]}
              </label>
              <input
                type="text"
                placeholder={`Enter your ${platformInfo[selected.platform].name} URL or @handle`}
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

            <div>
              <label className="text-sm font-medium text-gray-700">Quantity ({selected.unit})</label>
              <input
                type="number"
                min={selected.minOrder}
                max={selected.maxOrder}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(selected.minOrder, Math.min(selected.maxOrder, Number(e.target.value))))}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
              />
              <div className="mt-2 flex gap-2">
                {[selected.minOrder, selected.minOrder * 5, selected.minOrder * 10].map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuantity(Math.min(q, selected.maxOrder))}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      quantity === q ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {q.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
              <span className="text-sm text-gray-500">Total Price</span>
              <span className="text-xl font-bold text-gray-900">{formatCurrency(quantity * selected.pricePerUnit, displayCurrency)}</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Your Balance</span>
              <span className={balance >= quantity * selected.pricePerUnit ? "text-emerald-600" : "text-red-500"}>
                {formatCurrency(balance, displayCurrency)}
              </span>
            </div>

            {purchaseResult === "auth" && (
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-center">
                <p className="text-sm text-amber-800 font-medium mb-3">Please sign in to buy services with your balance.</p>
                <div className="flex justify-center gap-3">
                  <Link href="/sign-in"><Button size="sm">Sign In</Button></Link>
                  <Link href="/sign-up"><Button size="sm" variant="outline">Create Account</Button></Link>
                </div>
              </div>
            )}
            {purchaseResult === "success" && (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center text-sm text-emerald-700">
                Order placed successfully!
              </div>
            )}
            {purchaseResult === "insufficient" && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-center text-sm text-red-700">
                {purchaseMessage || "Insufficient balance. Please top up first."}
              </div>
            )}
            {purchaseResult === "error" && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-center text-sm text-red-700">
                {purchaseMessage || "Something went wrong. Please try again."}
              </div>
            )}

            <Button onClick={handleBuy} fullWidth disabled={purchaseResult === "success"}>
              <Wallet size={16} />
              Buy with Balance — {formatCurrency(quantity * selected.pricePerUnit, displayCurrency)}
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}
