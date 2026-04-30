"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wallet,
  CheckCircle,
  AlertTriangle,
  CreditCard,
  Lock,
  Info,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import GuestBlock from "@/components/ui/GuestBlock";
import { useBalance } from "@/context/BalanceContext";
import { useAuth } from "@/context/AuthContext";
import { siteConfig } from "@/config/site";
import { formatCurrency, getCurrencySymbol } from "@/config/currency";

const quickAmounts = [10, 25, 50, 100];

const DIGITAL_CONSENT_FULL =
  `I expressly agree that ${siteConfig.companyName} may begin providing the digital service immediately after my purchase. I acknowledge that once the digital content or service has been delivered or performance has begun, I may lose my right of withdrawal.`;

export default function TopUpPage() {
  const { balance, displayCurrency, addBalance } = useBalance();
  const { isLoggedIn } = useAuth();

  const [amount, setAmount] = useState("25");
  const [submittedAmount, setSubmittedAmount] = useState(0);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [digitalConsent, setDigitalConsent] = useState(false);
  const [showDigitalFull, setShowDigitalFull] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  if (!isLoggedIn) {
    return (
      <GuestBlock
        title="Sign in to top up"
        description="You need to sign in to top up your account balance."
      />
    );
  }

  const parsedAmount = parseFloat(amount);
  const isValidAmount = !isNaN(parsedAmount) && parsedAmount >= 10;
  const symbol = getCurrencySymbol("GBP");
  const displayAmount = isNaN(parsedAmount) ? 0 : parsedAmount;
  const isTestMode = siteConfig.testMode;

  const handlePreset = (value: number) => {
    setAmount(value.toString());
    setError("");
    setFormErrors({});
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
    setError("");
    setFormErrors({});
  };

  const handleTestModeTopUp = async () => {
    if (!isValidAmount) {
      setError("Minimum top-up amount is £10.00.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const ok = await addBalance(parsedAmount);
      if (ok) {
        setSubmittedAmount(parsedAmount);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError("Top-up failed. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckoutSubmit = () => {
    if (!isValidAmount) {
      setError("Minimum top-up amount is £10.00.");
      return;
    }

    const errors: Record<string, string> = {};

    if (!cardNumber.trim()) errors.cardNumber = "Card number is required.";
    if (!expiry.trim()) errors.expiry = "Expiry date is required.";
    if (!cvv.trim()) errors.cvv = "CVV is required.";
    if (!cardName.trim()) errors.cardName = "Cardholder name is required.";
    if (!billingAddress.trim())
      errors.billingAddress = "Billing address is required.";
    if (!termsAccepted) errors.terms = "Please accept the Terms & Conditions.";
    if (!digitalConsent)
      errors.digitalConsent = "Please confirm digital service consent.";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setError("Please complete all payment details.");
      return;
    }

    setError(
      "Payment provider is not configured yet. Enable test mode or connect a payment provider."
    );
  };

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className={isTestMode ? "mx-auto max-w-2xl" : "mx-auto max-w-5xl"}>
          {isTestMode && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-700"
            >
              <AlertTriangle size={16} />
              <span className="text-sm font-medium">
                Test Mode — no real payments are processed. Balance is added
                instantly for testing.
              </span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Top Up Balance
            </h1>
            <p className="mt-2 text-gray-500">
              Add funds to your account to start purchasing services.
            </p>
          </motion.div>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700"
            >
              <CheckCircle size={18} />
              <span className="text-sm font-medium">
                {symbol}
                {submittedAmount.toFixed(2)} GBP has been added to your wallet.
              </span>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              {error}
            </motion.div>
          )}

          <div
            className={
              isTestMode
                ? "mt-8 flex flex-col gap-6"
                : "mt-8 grid gap-8 lg:grid-cols-2"
            }
          >
            {/* Left / Amount selection */}
            <div className="flex flex-col gap-6">
              {/* Balance card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Current Balance</p>
                      <p className="text-3xl font-bold text-gray-900">
                        {formatCurrency(balance, displayCurrency)}
                      </p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25">
                      <Wallet size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Amount selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Select Amount
                  </h2>

                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {quickAmounts.map((q) => (
                      <button
                        key={q}
                        onClick={() => handlePreset(q)}
                        className={`rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                          amount === q.toString()
                            ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                            : "border border-gray-200 bg-white text-gray-700 hover:border-violet-300 hover:bg-violet-50"
                        }`}
                      >
                        {symbol}
                        {q}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4">
                    <label className="text-sm font-medium text-gray-700">
                      Amount (GBP)
                    </label>
                    <div className="relative mt-1.5">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        {symbol}
                      </span>
                      <input
                        type="number"
                        min={10}
                        step="0.01"
                        placeholder={`Enter amount (min ${symbol}10)`}
                        value={amount}
                        onChange={(e) => handleAmountChange(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-8 pr-4 text-gray-900 placeholder-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                      />
                    </div>
                    {!isValidAmount && amount !== "" && (
                      <p className="mt-1.5 text-xs text-red-500">
                        Minimum top-up amount is {symbol}10.00.
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Summary (non-test mode) */}
              {!isTestMode && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Top-Up Summary
                    </h2>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Wallet Balance</span>
                        <span className="font-medium text-gray-900">
                          {formatCurrency(balance, displayCurrency)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Description</span>
                        <span className="text-gray-600">
                          Add funds to your account balance
                        </span>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-base font-semibold text-gray-900">
                            Total
                          </span>
                          <span className="text-xl font-bold text-gray-900">
                            {symbol}
                            {displayAmount.toFixed(2)} GBP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Test mode: action card */}
              {isTestMode && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div>
                      <p className="text-sm text-gray-500">Amount to add</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {symbol}
                        {displayAmount.toFixed(2)}
                      </p>
                    </div>
                    <Button
                      size="lg"
                      onClick={handleTestModeTopUp}
                      disabled={!isValidAmount || loading}
                    >
                      <Wallet size={18} />
                      {loading ? "Processing..." : "Add Balance"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right: Payment form (non-test mode only) */}
            {!isTestMode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <CreditCard size={20} className="text-violet-600" />
                    <h2 className="text-lg font-semibold text-gray-900">
                      Payment Details
                    </h2>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Input
                      label="Card Number"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => {
                        setCardNumber(e.target.value);
                        setFormErrors((prev) => {
                          const { cardNumber: _, ...rest } = prev;
                          return rest;
                        });
                      }}
                      error={formErrors.cardNumber}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Expiry Date"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => {
                          setExpiry(e.target.value);
                          setFormErrors((prev) => {
                            const { expiry: _, ...rest } = prev;
                            return rest;
                          });
                        }}
                        error={formErrors.expiry}
                      />
                      <Input
                        label="CVV"
                        placeholder="123"
                        type="password"
                        maxLength={4}
                        value={cvv}
                        onChange={(e) => {
                          setCvv(e.target.value);
                          setFormErrors((prev) => {
                            const { cvv: _, ...rest } = prev;
                            return rest;
                          });
                        }}
                        error={formErrors.cvv}
                      />
                    </div>

                    <Input
                      label="Cardholder Name"
                      placeholder="John Doe"
                      value={cardName}
                      onChange={(e) => {
                        setCardName(e.target.value);
                        setFormErrors((prev) => {
                          const { cardName: _, ...rest } = prev;
                          return rest;
                        });
                      }}
                      error={formErrors.cardName}
                    />

                    <Input
                      label="Billing Address"
                      placeholder="123 Main Street, London, UK"
                      value={billingAddress}
                      onChange={(e) => {
                        setBillingAddress(e.target.value);
                        setFormErrors((prev) => {
                          const { billingAddress: _, ...rest } = prev;
                          return rest;
                        });
                      }}
                      error={formErrors.billingAddress}
                    />

                    <div className="border-t border-gray-100 pt-4 space-y-3">
                      {/* Terms checkbox */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => {
                              setTermsAccepted(e.target.checked);
                              setFormErrors((prev) => {
                                const { terms: _, ...rest } = prev;
                                return rest;
                              });
                            }}
                            className="mt-1 h-4 w-4 rounded border-gray-300 accent-violet-600"
                          />
                          <span className="text-sm text-gray-600">
                            I agree to the{" "}
                            <Link
                              href="/terms"
                              className="text-violet-600 hover:text-violet-500 underline"
                            >
                              Terms & Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                              href="/privacy"
                              className="text-violet-600 hover:text-violet-500 underline"
                            >
                              Privacy Policy
                            </Link>
                          </span>
                        </label>
                        {formErrors.terms && (
                          <p className="mt-1 ml-7 text-xs text-red-500">
                            {formErrors.terms}
                          </p>
                        )}
                      </div>

                      {/* Digital service checkbox */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={digitalConsent}
                            onChange={(e) => {
                              setDigitalConsent(e.target.checked);
                              setFormErrors((prev) => {
                                const { digitalConsent: _, ...rest } = prev;
                                return rest;
                              });
                            }}
                            className="mt-1 h-4 w-4 rounded border-gray-300 accent-violet-600"
                          />
                          <span className="text-sm text-gray-600">
                            I agree that the digital service may begin
                            immediately after purchase.{" "}
                            <button
                              type="button"
                              onClick={() => setShowDigitalFull(!showDigitalFull)}
                              className="inline-flex items-center gap-0.5 text-violet-600 hover:text-violet-500"
                            >
                              <Info size={12} />
                              <span className="underline text-xs">
                                Read more
                              </span>
                            </button>
                          </span>
                        </label>
                        {showDigitalFull && (
                          <div className="mt-2 ml-7 rounded-lg border border-violet-100 bg-violet-50 p-3">
                            <p className="text-xs leading-relaxed text-gray-600">
                              {DIGITAL_CONSENT_FULL}
                            </p>
                          </div>
                        )}
                        {formErrors.digitalConsent && (
                          <p className="mt-1 ml-7 text-xs text-red-500">
                            {formErrors.digitalConsent}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-gray-400">
                      Minimum top-up amount: {symbol}10.00
                    </p>

                    <Button
                      size="lg"
                      fullWidth
                      onClick={handleCheckoutSubmit}
                      disabled={!isValidAmount}
                    >
                      <Lock size={16} />
                      Pay {symbol}
                      {displayAmount.toFixed(2)}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                      <Lock size={10} />
                      <span>Secure payment processing</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
