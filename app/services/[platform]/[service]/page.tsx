"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CheckCircle,
  Wallet,
  Shield,
  Zap,
  Clock,
  ArrowRight,
  Star,
  Heart,
  Users,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { PhoneMockup } from "@/components/ui/Placeholder";
import { getServicePageData } from "@/data/servicePages";
import { services, platformInfo, ServiceType } from "@/data/services";
import { packages } from "@/data/packages";
import { useBalance } from "@/context/BalanceContext";
import { useAuth } from "@/context/AuthContext";
import { formatCurrency, convertToGBP, convertFromGBP, getCurrencySymbol } from "@/config/currency";
import {
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";

const platformIcons: Record<
  string,
  React.ComponentType<{ className?: string; size?: number }>
> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
};

const platformGradients: Record<string, string> = {
  instagram: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  tiktok: "from-[#00f2ea] to-[#ff0050]",
  youtube: "from-[#FF0000] to-[#CC0000]",
};

const serviceTypeIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  likes: Heart,
  followers: Users,
  views: Eye,
};

const PRICE_PER_UNIT_GBP = 0.01;
const CUSTOM_MIN_GBP = 10;

export default function ServicePage() {
  const params = useParams();
  const platform = params.platform as string;
  const service = params.service as string;
  const pageData = getServicePageData(platform, service);
  const { displayCurrency, balance, purchaseService } = useBalance();
  const { isLoggedIn } = useAuth();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [purchaseResult, setPurchaseResult] = useState<string | null>(null);
  const [purchaseMessage, setPurchaseMessage] = useState("");
  const [buyingId, setBuyingId] = useState<string | null>(null);
  const [targetUrl, setTargetUrl] = useState("");

  const [customAmount, setCustomAmount] = useState<string>("");
  const [customError, setCustomError] = useState("");
  const [buyingCustom, setBuyingCustom] = useState(false);

  if (!pageData) {
    return (
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Service Not Found
            </h1>
            <p className="mt-4 text-gray-500">
              The service you are looking for does not exist.
            </p>
            <Link href="/#services" className="mt-6 inline-block">
              <Button>Browse All Services</Button>
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const PlatformIcon = platformIcons[pageData.platform];
  const ServiceIcon = serviceTypeIcons[pageData.service] || Heart;
  const gradient = platformGradients[pageData.platform];
  const info = platformInfo[pageData.platform];

  const serviceSlugToType: Record<string, ServiceType> = {
    likes: "likes",
    followers: "followers",
    subscribers: "followers",
    views: "views",
  };
  const serviceType = serviceSlugToType[service] || "likes";
  const serviceData = services.find(
    (s) => s.platform === pageData.platform && s.type === serviceType
  );
  const servicePackages = packages.filter(
    (p) => p.platform === pageData.platform && p.type === serviceType
  );

  const targetUrlLabel: Record<string, string> = {
    instagram: "Instagram profile or post URL",
    tiktok: "TikTok profile or video URL",
    youtube: "YouTube channel or video URL",
  };

  const parsedAmount = parseFloat(customAmount);
  const hasAmount = !isNaN(parsedAmount) && parsedAmount > 0;
  const customAmountGBP = hasAmount ? convertToGBP(parsedAmount, displayCurrency) : 0;
  const isValidCustomAmount = hasAmount && customAmountGBP >= CUSTOM_MIN_GBP;
  const customUnits = isValidCustomAmount ? Math.floor(customAmountGBP / PRICE_PER_UNIT_GBP) : 0;

  const handleBuyPackage = async (pkg: (typeof packages)[0]) => {
    if (!isLoggedIn) {
      setPurchaseResult("auth");
      setPurchaseMessage("");
      return;
    }
    if (!targetUrl.trim()) {
      setPurchaseResult("target");
      setPurchaseMessage("Please enter a target URL or handle.");
      return;
    }
    setBuyingId(pkg.id);
    setPurchaseResult(null);
    setPurchaseMessage("");
    const result = await purchaseService({
      platform: platform,
      service: service,
      package: pkg.name,
      quantity: pkg.quantity,
      price: pkg.price,
      targetUrl: targetUrl.trim(),
    });
    setBuyingId(null);
    setPurchaseResult(result.status);
    setPurchaseMessage(result.message);
    if (result.status === "success") {
      setTargetUrl("");
      setTimeout(() => setPurchaseResult(null), 3000);
    }
  };

  const handleBuyCustom = async () => {
    setCustomError("");
    if (!customAmount.trim()) {
      setCustomError("Please enter an amount.");
      return;
    }
    if (!hasAmount) {
      setCustomError("Please enter a valid amount.");
      return;
    }
    if (customAmountGBP < CUSTOM_MIN_GBP) {
      const minDisplay = convertFromGBP(CUSTOM_MIN_GBP, displayCurrency);
      setCustomError(
        `Minimum custom package amount is ${getCurrencySymbol(displayCurrency)}${minDisplay.toFixed(2)} (£${CUSTOM_MIN_GBP.toFixed(2)} GBP)`
      );
      return;
    }
    if (!isLoggedIn) {
      setPurchaseResult("auth");
      setPurchaseMessage("");
      return;
    }
    if (!targetUrl.trim()) {
      setPurchaseResult("target");
      setPurchaseMessage("Please enter a target URL or handle.");
      return;
    }
    if (customAmountGBP > balance) {
      setPurchaseResult("insufficient");
      setPurchaseMessage("Insufficient balance. Please top up first.");
      return;
    }
    setBuyingCustom(true);
    setPurchaseResult(null);
    setPurchaseMessage("");
    const result = await purchaseService({
      platform: platform,
      service: service,
      package: "Custom package",
      quantity: customUnits,
      price: customAmountGBP,
      targetUrl: targetUrl.trim(),
    });
    setBuyingCustom(false);
    setPurchaseResult(result.status);
    setPurchaseMessage(result.message);
    if (result.status === "success") {
      setTargetUrl("");
      setCustomAmount("");
      setTimeout(() => setPurchaseResult(null), 3000);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-12 lg:py-16">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.04]`}
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} p-2.5 shadow-lg`}
                >
                  <PlatformIcon className="h-5 w-5 text-white" />
                </div>
                <Badge variant="info">{info.name}</Badge>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                {pageData.title}
              </h1>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                {pageData.subtitle}
              </p>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-lg">
                {pageData.description}
              </p>

              {serviceData && (
                <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                  <span>
                    From{" "}
                    <strong className="text-gray-900">
                      {formatCurrency(
                        serviceData.minOrder * serviceData.pricePerUnit,
                        displayCurrency
                      )}
                    </strong>
                  </span>
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  <span>
                    {formatCurrency(
                      serviceData.pricePerUnit,
                      displayCurrency
                    )}{" "}
                    per {serviceData.unit.slice(0, -1)}
                  </span>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#packages">
                  <Button size="lg">
                    <Wallet size={18} />
                    View Packages
                  </Button>
                </a>
                <Link href="/top-up">
                  <Button variant="outline" size="lg">
                    Top Up Balance
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6">
                {[
                  { icon: Shield, text: "Safe & Secure" },
                  { icon: Zap, text: "Fast Delivery" },
                  { icon: Clock, text: "24/7 Support" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <Icon size={14} className="text-violet-600" />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <PhoneMockup>
                <div className="h-[480px] bg-gradient-to-b from-gray-50 to-white p-5">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`h-10 w-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
                    >
                      <PlatformIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="h-3 w-24 rounded bg-gray-200" />
                      <div className="mt-1.5 h-2 w-16 rounded bg-gray-100" />
                    </div>
                  </div>
                  <div
                    className={`h-44 rounded-xl bg-gradient-to-br ${gradient} opacity-20 mb-4`}
                  />
                  <div className="flex items-center gap-4 mb-4">
                    <ServiceIcon size={16} className="text-red-400" />
                    <div className="h-2.5 w-12 rounded bg-gray-200" />
                    <div className="h-2.5 w-8 rounded bg-gray-200" />
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-2.5 w-full rounded bg-gray-200" />
                    <div className="h-2.5 w-4/5 rounded bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-violet-100" />
                        <div className="h-2.5 w-16 rounded bg-gray-200" />
                      </div>
                      <div className="h-2.5 w-10 rounded bg-emerald-100" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-indigo-100" />
                        <div className="h-2.5 w-20 rounded bg-gray-200" />
                      </div>
                      <div className="h-2.5 w-10 rounded bg-amber-100" />
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Why Choose Our {pageData.title} Service?
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-gray-500">
                {pageData.longDescription}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-12 lg:py-16 bg-gray-50/50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Key Benefits
              </h2>
              <p className="mt-3 text-gray-500">
                Everything you get with our {pageData.title.toLowerCase()}{" "}
                service.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageData.benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 mb-4">
                    <CheckCircle size={18} className="text-violet-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="py-12 lg:py-16" id="packages">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Choose Your Package
              </h2>
              <p className="mt-3 text-gray-500">
                Select the package that fits your growth goals and budget.
              </p>
            </div>
          </ScrollReveal>

          {/* Target URL input */}
          <div className="mx-auto max-w-md mb-8">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <label className="text-sm font-medium text-gray-700">
                {targetUrlLabel[platform] || "Target URL or handle"}
              </label>
              <input
                type="text"
                placeholder={`Enter your ${info.name} URL or @handle`}
                value={targetUrl}
                onChange={(e) => {
                  setTargetUrl(e.target.value);
                  if (purchaseResult === "target") {
                    setPurchaseResult(null);
                    setPurchaseMessage("");
                  }
                }}
                className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
              />
              {purchaseResult === "target" && (
                <p className="mt-1.5 text-xs text-red-500">{purchaseMessage}</p>
              )}
            </div>
          </div>

          {purchaseResult === "auth" && (
            <div className="mx-auto max-w-md mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
              <p className="text-sm text-amber-800 font-medium mb-3">
                Please sign in to buy services with your balance.
              </p>
              <div className="flex justify-center gap-3">
                <Link href="/sign-in">
                  <Button size="sm">Sign In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="sm" variant="outline">
                    Create Account
                  </Button>
                </Link>
              </div>
            </div>
          )}
          {purchaseResult === "success" && (
            <div className="mx-auto max-w-md mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm text-emerald-700 font-medium">
              Order placed successfully! Check your dashboard.
            </div>
          )}
          {purchaseResult === "insufficient" && (
            <div className="mx-auto max-w-md mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-center">
              <p className="text-sm text-red-700 font-medium mb-2">
                {purchaseMessage || "Insufficient balance."}
              </p>
              <Link href="/top-up">
                <Button size="sm" variant="outline">
                  Top Up Balance
                </Button>
              </Link>
            </div>
          )}
          {purchaseResult === "error" && (
            <div className="mx-auto max-w-md mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700 font-medium">
              {purchaseMessage || "Something went wrong. Please try again."}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {servicePackages.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] ${
                    pkg.popular
                      ? "border-violet-300 bg-violet-50/50 shadow-lg shadow-violet-100"
                      : "border-gray-200 bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="info">
                        <Star size={10} className="mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <p className="text-sm font-medium text-violet-600">
                    {pkg.name}
                  </p>
                  <div className="mt-3">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatCurrency(pkg.price, displayCurrency)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {pkg.quantity.toLocaleString()} {serviceType}
                  </p>
                  <p className="text-xs text-gray-400">
                    {formatCurrency(pkg.price / pkg.quantity, displayCurrency)}{" "}
                    per unit
                  </p>

                  <ul className="mt-5 space-y-2">
                    {[
                      "Fast delivery",
                      "High retention",
                      "Real-time tracking",
                      "Balance payment",
                    ].map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={14}
                          className="text-violet-600 shrink-0"
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="mt-6"
                    fullWidth
                    size="sm"
                    variant={pkg.popular ? "primary" : "outline"}
                    onClick={() => handleBuyPackage(pkg)}
                    disabled={buyingId === pkg.id}
                  >
                    <Wallet size={14} />
                    {buyingId === pkg.id
                      ? "Processing..."
                      : "Buy with Balance"}
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Custom Package Calculator */}
          <ScrollReveal delay={0.3}>
            <div className="mx-auto mt-12 max-w-lg">
              <div className="relative overflow-hidden rounded-2xl border-2 border-violet-200 bg-gradient-to-br from-violet-50/80 to-indigo-50/80 p-6 shadow-lg">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-violet-200/30 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                      <SlidersHorizontal size={20} className="text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Custom Package</h3>
                      <p className="text-xs text-gray-500">Enter your budget, get instant results</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Amount ({displayCurrency})
                      </label>
                      <div className="relative mt-1.5">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">
                          {getCurrencySymbol(displayCurrency)}
                        </span>
                        <input
                          type="number"
                          min={0}
                          step={0.01}
                          placeholder={`e.g. ${convertFromGBP(25, displayCurrency).toFixed(2)}`}
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setCustomError("");
                          }}
                          className={`w-full rounded-xl border bg-white pl-8 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 ${
                            customError ? "border-red-400" : "border-gray-200"
                          }`}
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-400">
                        Minimum: {getCurrencySymbol(displayCurrency)}{convertFromGBP(CUSTOM_MIN_GBP, displayCurrency).toFixed(2)} {displayCurrency}
                        {displayCurrency !== "GBP" && ` (£${CUSTOM_MIN_GBP.toFixed(2)} GBP)`}
                      </p>
                      {customError && (
                        <p className="mt-1 text-xs text-red-500">{customError}</p>
                      )}
                    </div>

                    {hasAmount && (
                      <div className="rounded-xl border border-violet-100 bg-white p-4 space-y-3">
                        {isValidCustomAmount ? (
                          <>
                            <div className="text-center py-1">
                              <p className="text-xs text-gray-400 mb-1">You will receive</p>
                              <p className="text-3xl font-bold text-gray-900">
                                {customUnits.toLocaleString()}
                                <span className="text-lg font-medium text-violet-600 ml-2">{service}</span>
                              </p>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
                              <span>Price per {service === "subscribers" ? "subscriber" : service.replace(/s$/, "")}</span>
                              <span>{formatCurrency(PRICE_PER_UNIT_GBP, displayCurrency)}</span>
                            </div>
                            {displayCurrency !== "GBP" && (
                              <div className="flex items-center justify-between text-xs text-gray-400">
                                <span>Amount in GBP</span>
                                <span>£{customAmountGBP.toFixed(2)}</span>
                              </div>
                            )}
                            {isLoggedIn && (
                              <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-100">
                                <span className="text-gray-400">Your balance</span>
                                <span className={`font-medium ${customAmountGBP > balance ? "text-red-500" : "text-gray-600"}`}>
                                  {formatCurrency(balance, displayCurrency)}
                                </span>
                              </div>
                            )}
                          </>
                        ) : (
                          <p className="text-center text-sm text-amber-600">
                            Minimum amount is {getCurrencySymbol(displayCurrency)}{convertFromGBP(CUSTOM_MIN_GBP, displayCurrency).toFixed(2)}
                          </p>
                        )}
                      </div>
                    )}

                    <Button
                      fullWidth
                      onClick={handleBuyCustom}
                      disabled={buyingCustom}
                    >
                      <Wallet size={16} />
                      {buyingCustom
                        ? "Processing..."
                        : "Buy Custom Package with Balance"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-12 lg:py-16 bg-gray-50/50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                How It Works
              </h2>
              <p className="mt-3 text-gray-500">
                Four simple steps to get started.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {pageData.howItWorks.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 mb-4">
                    <span className="text-lg font-bold text-violet-600">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-gray-500">
                Common questions about our {pageData.title.toLowerCase()}{" "}
                service.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-3">
            {pageData.faq.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm font-medium text-gray-900 pr-4">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={18} className="text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5">
                          <p className="text-sm leading-relaxed text-gray-500">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-violet-200">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/80 via-indigo-50/60 to-purple-100/80" />
              <div className="relative px-6 py-12 text-center sm:px-12 lg:py-16">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Ready to boost your {info.name}?
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-gray-600">
                  Top up your balance and start growing your {info.name}{" "}
                  presence in minutes.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link href="/top-up">
                    <Button size="lg">
                      <Wallet size={18} />
                      Top Up Balance
                    </Button>
                  </Link>
                  <Link href="/#services">
                    <Button variant="outline" size="lg">
                      Browse All Services
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
