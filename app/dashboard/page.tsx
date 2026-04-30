"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  ShoppingBag,
  TrendingUp,
  Clock,
  CheckCircle,
  Loader,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import GuestBlock from "@/components/ui/GuestBlock";
import { useBalance } from "@/context/BalanceContext";
import { useAuth } from "@/context/AuthContext";
import { formatCurrency } from "@/config/currency";

const statusConfig = {
  processing: {
    icon: Loader,
    color: "text-violet-600",
    bg: "bg-violet-50",
    label: "Processing",
    badge: "info" as const,
  },
  in_progress: {
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-50",
    label: "In Progress",
    badge: "warning" as const,
  },
  completed: {
    icon: CheckCircle,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    label: "Completed",
    badge: "success" as const,
  },
  failed: {
    icon: Loader,
    color: "text-red-600",
    bg: "bg-red-50",
    label: "Failed",
    badge: "info" as const,
  },
};

export default function DashboardPage() {
  const { balance, displayCurrency, orders, transactions } = useBalance();
  const { isLoggedIn, user } = useAuth();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [platformFilter, setPlatformFilter] = useState<string>("all");

  if (!isLoggedIn || !user) {
    return (
      <GuestBlock
        title="Sign in to view your dashboard"
        description="You need to sign in to view your dashboard."
      />
    );
  }

  const filteredOrders = orders.filter((o) => {
    if (statusFilter !== "all" && o.status !== statusFilter) return false;
    if (platformFilter !== "all" && o.platform !== platformFilter) return false;
    return true;
  });

  const platforms = [...new Set(orders.map((o) => o.platform))];
  const initials =
    (user.name?.[0] || "") + (user.surname?.[0] || "");

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Dashboard
              </h1>
              <p className="mt-1 text-gray-500">
                Welcome back, {user.name}.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white">
                {initials.toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {user.name} {user.surname}
                </p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: Wallet,
              label: "Balance",
              value: formatCurrency(balance, displayCurrency),
              color: "text-violet-600",
              bg: "bg-violet-50",
            },
            {
              icon: ShoppingBag,
              label: "Total Orders",
              value: orders.length.toString(),
              color: "text-indigo-600",
              bg: "bg-indigo-50",
            },
            {
              icon: TrendingUp,
              label: "Completed",
              value: orders
                .filter((o) => o.status === "completed")
                .length.toString(),
              color: "text-emerald-600",
              bg: "bg-emerald-50",
            },
            {
              icon: Clock,
              label: "In Progress",
              value: orders
                .filter((o) => o.status === "in_progress")
                .length.toString(),
              color: "text-amber-600",
              bg: "bg-amber-50",
            },
          ].map(({ icon: Icon, label, value, color, bg }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}
                >
                  <Icon size={20} className={color} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-2xl font-bold text-gray-900">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Orders</h2>
              <div className="flex items-center gap-2">
                <Filter size={14} className="text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 appearance-none focus:outline-none focus:border-violet-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="processing">Processing</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <select
                  value={platformFilter}
                  onChange={(e) => setPlatformFilter(e.target.value)}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 appearance-none focus:outline-none focus:border-violet-500"
                >
                  <option value="all">All Platforms</option>
                  {platforms.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    {[
                      "Platform",
                      "Service",
                      "Package",
                      "Price",
                      "Status",
                      "Date",
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-5 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-5 py-12 text-center text-sm text-gray-400"
                      >
                        No orders found matching your filters.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order) => {
                      const config =
                        statusConfig[
                          order.status as keyof typeof statusConfig
                        ] || statusConfig.processing;
                      return (
                        <tr
                          key={order.id}
                          className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                        >
                          <td className="px-5 py-4 text-sm text-gray-900">
                            {order.platform}
                          </td>
                          <td className="px-5 py-4 text-sm text-gray-600">
                            {order.service}
                          </td>
                          <td className="px-5 py-4 text-sm text-gray-600">
                            {order.package} ({order.quantity.toLocaleString()})
                          </td>
                          <td className="px-5 py-4 text-sm font-medium text-gray-900">
                            {formatCurrency(order.price, displayCurrency)}
                          </td>
                          <td className="px-5 py-4">
                            <Badge variant={config.badge}>
                              {config.label}
                            </Badge>
                          </td>
                          <td className="px-5 py-4 text-sm text-gray-400">
                            {order.date}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Transactions
            </h2>
            <div className="flex flex-col gap-2">
              {transactions.length === 0 ? (
                <p className="py-8 text-center text-sm text-gray-400">
                  No transactions yet.
                </p>
              ) : (
                transactions.map((txn) => (
                  <div
                    key={txn.id}
                    className="flex items-center justify-between rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100/70"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          txn.type === "top_up" ? "bg-emerald-50" : "bg-red-50"
                        }`}
                      >
                        {txn.type === "top_up" ? (
                          <ArrowUpRight size={18} className="text-emerald-600" />
                        ) : (
                          <ArrowDownRight size={18} className="text-red-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {txn.description}
                        </p>
                        <p className="text-xs text-gray-400">{txn.date}</p>
                      </div>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        txn.amount > 0 ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {txn.amount > 0 ? "+" : ""}
                      {formatCurrency(
                        Math.abs(txn.amount),
                        displayCurrency
                      )}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
