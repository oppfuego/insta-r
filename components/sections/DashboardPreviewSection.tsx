"use client";

import { Wallet, ShoppingBag, TrendingUp, Clock, CheckCircle, Loader, ArrowUpRight, ArrowDownRight } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useBalance } from "@/context/BalanceContext";
import { formatCurrency } from "@/config/currency";

const statusIcon: Record<string, React.ReactNode> = {
  processing: <Loader size={14} className="text-violet-600 animate-spin" />,
  in_progress: <Clock size={14} className="text-amber-600" />,
  completed: <CheckCircle size={14} className="text-emerald-600" />,
  failed: <Loader size={14} className="text-red-600" />,
};

const statusLabel: Record<string, string> = {
  processing: "Processing",
  in_progress: "In Progress",
  completed: "Completed",
  failed: "Failed",
};

const statusColor: Record<string, string> = {
  processing: "text-violet-600",
  in_progress: "text-amber-600",
  completed: "text-emerald-600",
  failed: "text-red-600",
};

export default function DashboardPreviewSection() {
  const { balance, displayCurrency, orders, transactions } = useBalance();

  const recentOrders = orders.slice(0, 3);
  const recentTxns = transactions.slice(0, 4);

  return (
    <section className="relative py-14 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Your{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Track every order, transaction, and your balance in one clean interface.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-100/60 to-indigo-100/60 blur-xl" />

              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50 lg:p-8">
                <div className="grid gap-4 sm:grid-cols-3 mb-8">
                  {[
                    { icon: Wallet, label: "Balance", value: formatCurrency(balance, displayCurrency), color: "text-violet-600", bg: "bg-violet-50" },
                    { icon: ShoppingBag, label: "Total Orders", value: orders.length.toString(), color: "text-indigo-600", bg: "bg-indigo-50" },
                    { icon: TrendingUp, label: "Completed", value: orders.filter((o) => o.status === "completed").length.toString(), color: "text-emerald-600", bg: "bg-emerald-50" },
                  ].map(({ icon: Icon, label, value, color, bg }) => (
                    <div key={label} className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bg}`}>
                          <Icon size={18} className={color} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">{label}</p>
                          <p className="text-xl font-bold text-gray-900">{value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-sm font-semibold text-gray-900">Recent Orders</h3>
                    <div className="flex flex-col gap-3">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200/70 text-xs font-bold text-gray-500">
                              {order.platform.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{order.service}</p>
                              <p className="text-xs text-gray-400">{order.platform} · {order.package}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`flex items-center gap-1 text-xs ${statusColor[order.status]}`}>
                              {statusIcon[order.status]}
                              {statusLabel[order.status]}
                            </div>
                            <p className="mt-0.5 text-xs text-gray-400">{formatCurrency(order.price, displayCurrency)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-sm font-semibold text-gray-900">Recent Transactions</h3>
                    <div className="flex flex-col gap-3">
                      {recentTxns.map((txn) => (
                        <div key={txn.id} className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                              txn.type === "top_up" ? "bg-emerald-50" : "bg-red-50"
                            }`}>
                              {txn.type === "top_up" ? (
                                <ArrowUpRight size={16} className="text-emerald-600" />
                              ) : (
                                <ArrowDownRight size={16} className="text-red-500" />
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{txn.description}</p>
                              <p className="text-xs text-gray-400">{txn.date}</p>
                            </div>
                          </div>
                          <span className={`text-sm font-medium ${txn.amount > 0 ? "text-emerald-600" : "text-red-500"}`}>
                            {txn.amount > 0 ? "+" : ""}{formatCurrency(Math.abs(txn.amount), displayCurrency)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
