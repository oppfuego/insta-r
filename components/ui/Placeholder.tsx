"use client";

import { Monitor, Smartphone, BarChart3, User, Globe, Play } from "lucide-react";

interface PlaceholderProps {
  variant?: "browser" | "phone" | "dashboard" | "profile" | "platform" | "video";
  className?: string;
}

export function BrowserMockup({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50 overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-300" />
          <div className="h-3 w-3 rounded-full bg-amber-300" />
          <div className="h-3 w-3 rounded-full bg-emerald-300" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-6 rounded-lg bg-gray-100 max-w-xs mx-auto" />
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

export function PhoneMockup({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-[280px] rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-900 p-2 shadow-2xl ${className}`}>
      <div className="mx-auto mb-2 h-5 w-20 rounded-full bg-gray-800" />
      <div className="overflow-hidden rounded-[2rem] bg-white">
        {children || (
          <div className="h-[480px] bg-gradient-to-b from-violet-50 to-indigo-50 p-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-400" />
              <div className="flex-1">
                <div className="h-3 w-24 rounded bg-gray-200" />
                <div className="mt-1.5 h-2 w-16 rounded bg-gray-100" />
              </div>
            </div>
            <div className="h-48 rounded-xl bg-gradient-to-br from-violet-200/60 to-indigo-200/60 mb-4" />
            <div className="flex gap-4 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-300" />
              <div className="h-3 w-3 rounded-full bg-gray-200" />
              <div className="h-3 w-3 rounded-full bg-gray-200" />
            </div>
            <div className="space-y-2">
              <div className="h-2.5 w-full rounded bg-gray-200" />
              <div className="h-2.5 w-3/4 rounded bg-gray-100" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <BrowserMockup className={className}>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {["violet", "indigo", "emerald"].map((color) => (
          <div key={color} className="rounded-lg bg-gray-50 p-3">
            <div className={`h-2 w-8 rounded bg-${color}-200 mb-2`} />
            <div className="h-5 w-16 rounded bg-gray-200" />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-violet-100" />
              <div>
                <div className="h-2.5 w-20 rounded bg-gray-200" />
                <div className="mt-1 h-2 w-14 rounded bg-gray-100" />
              </div>
            </div>
            <div className="h-5 w-16 rounded-full bg-emerald-50" />
          </div>
        ))}
      </div>
    </BrowserMockup>
  );
}

export function GradientCard({ gradient = "from-violet-100 to-indigo-100", icon: Icon = Monitor, label = "", className = "" }: {
  gradient?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8 ${className}`}>
      <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/30 blur-xl" />
      <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-white/20 blur-xl" />
      <div className="relative flex flex-col items-center justify-center text-center">
        <Icon size={32} className="text-gray-500/60 mb-3" />
        {label && <p className="text-sm font-medium text-gray-500/80">{label}</p>}
      </div>
    </div>
  );
}

export function StatsCardMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="h-2.5 w-20 rounded bg-gray-200" />
        <div className="h-8 w-8 rounded-lg bg-violet-50 flex items-center justify-center">
          <BarChart3 size={14} className="text-violet-400" />
        </div>
      </div>
      <div className="h-6 w-28 rounded bg-gray-100 mb-3" />
      <div className="flex items-center gap-2">
        <div className="h-4 w-12 rounded-full bg-emerald-50" />
        <div className="h-2 w-16 rounded bg-gray-100" />
      </div>
    </div>
  );
}

export function CreatorProfileMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="flex items-center gap-4 mb-5">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-300 to-indigo-300" />
        <div>
          <div className="h-4 w-28 rounded bg-gray-200 mb-2" />
          <div className="h-2.5 w-20 rounded bg-gray-100" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {["12.4K", "846", "2.1M"].map((val, i) => (
          <div key={i} className="text-center">
            <p className="text-sm font-bold text-gray-800">{val}</p>
            <p className="text-[10px] text-gray-400">{["Posts", "Following", "Followers"][i]}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`aspect-square rounded-lg bg-gradient-to-br ${
            ["from-violet-100 to-indigo-100", "from-pink-100 to-rose-100", "from-amber-100 to-orange-100",
             "from-emerald-100 to-teal-100", "from-blue-100 to-cyan-100", "from-purple-100 to-fuchsia-100"][i]
          }`} />
        ))}
      </div>
    </div>
  );
}

export function PlatformPreviewMockup({ platform, className = "" }: { platform: "instagram" | "tiktok" | "youtube"; className?: string }) {
  const gradients = {
    instagram: "from-[#833AB4]/10 via-[#E4405F]/10 to-[#FCAF45]/10",
    tiktok: "from-[#00f2ea]/10 to-[#ff0050]/10",
    youtube: "from-red-100 to-red-50",
  };
  const icons = { instagram: User, tiktok: Play, youtube: Play };
  const Icon = icons[platform];

  return (
    <div className={`rounded-2xl border border-gray-200 overflow-hidden ${className}`}>
      <div className={`bg-gradient-to-br ${gradients[platform]} p-8`}>
        <div className="flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-lg">
            <Icon size={28} className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="h-3 w-24 rounded bg-gray-200 mx-auto mb-2" />
        <div className="h-2 w-32 rounded bg-gray-100 mx-auto" />
      </div>
    </div>
  );
}

export default function Placeholder({ variant = "browser", className = "" }: PlaceholderProps) {
  switch (variant) {
    case "browser":
      return <BrowserMockup className={className} />;
    case "phone":
      return <PhoneMockup className={className} />;
    case "dashboard":
      return <DashboardMockup className={className} />;
    case "profile":
      return <CreatorProfileMockup className={className} />;
    default:
      return <GradientCard className={className} />;
  }
}
