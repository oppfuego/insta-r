import { Platform, ServiceType } from "./services";

export interface Package {
  id: string;
  platform: Platform;
  type: ServiceType;
  name: string;
  quantity: number;
  price: number;
  popular?: boolean;
}

export const packages: Package[] = [
  { id: "ig-likes-500", platform: "instagram", type: "likes", name: "Starter", quantity: 500, price: 9.99 },
  { id: "ig-likes-1000", platform: "instagram", type: "likes", name: "Growth", quantity: 1000, price: 17.99, popular: true },
  { id: "ig-likes-5000", platform: "instagram", type: "likes", name: "Pro", quantity: 5000, price: 69.99 },
  { id: "ig-followers-500", platform: "instagram", type: "followers", name: "Starter", quantity: 500, price: 9.99 },
  { id: "ig-followers-1000", platform: "instagram", type: "followers", name: "Growth", quantity: 1000, price: 19.99, popular: true },
  { id: "ig-followers-5000", platform: "instagram", type: "followers", name: "Pro", quantity: 5000, price: 54.99 },
  { id: "ig-views-1000", platform: "instagram", type: "views", name: "Starter", quantity: 1000, price: 4.99 },
  { id: "ig-views-5000", platform: "instagram", type: "views", name: "Growth", quantity: 5000, price: 19.99, popular: true },
  { id: "ig-views-10000", platform: "instagram", type: "views", name: "Pro", quantity: 10000, price: 34.99 },
  { id: "tt-likes-500", platform: "tiktok", type: "likes", name: "Starter", quantity: 500, price: 7.99 },
  { id: "tt-likes-2000", platform: "tiktok", type: "likes", name: "Growth", quantity: 2000, price: 24.99, popular: true },
  { id: "tt-likes-5000", platform: "tiktok", type: "likes", name: "Pro", quantity: 5000, price: 54.99 },
  { id: "tt-followers-500", platform: "tiktok", type: "followers", name: "Starter", quantity: 500, price: 14.99 },
  { id: "tt-followers-2000", platform: "tiktok", type: "followers", name: "Growth", quantity: 2000, price: 49.99, popular: true },
  { id: "tt-followers-5000", platform: "tiktok", type: "followers", name: "Pro", quantity: 5000, price: 109.99 },
  { id: "tt-views-1000", platform: "tiktok", type: "views", name: "Starter", quantity: 1000, price: 3.99 },
  { id: "tt-views-5000", platform: "tiktok", type: "views", name: "Growth", quantity: 5000, price: 14.99, popular: true },
  { id: "tt-views-25000", platform: "tiktok", type: "views", name: "Pro", quantity: 25000, price: 59.99 },
  { id: "yt-likes-500", platform: "youtube", type: "likes", name: "Starter", quantity: 500, price: 14.99 },
  { id: "yt-likes-1000", platform: "youtube", type: "likes", name: "Growth", quantity: 1000, price: 24.99, popular: true },
  { id: "yt-likes-5000", platform: "youtube", type: "likes", name: "Pro", quantity: 5000, price: 99.99 },
  { id: "yt-followers-100", platform: "youtube", type: "followers", name: "Starter", quantity: 100, price: 7.99 },
  { id: "yt-followers-500", platform: "youtube", type: "followers", name: "Growth", quantity: 500, price: 34.99, popular: true },
  { id: "yt-followers-1000", platform: "youtube", type: "followers", name: "Pro", quantity: 1000, price: 59.99 },
  { id: "yt-views-1000", platform: "youtube", type: "views", name: "Starter", quantity: 1000, price: 5.99 },
  { id: "yt-views-5000", platform: "youtube", type: "views", name: "Growth", quantity: 5000, price: 24.99, popular: true },
  { id: "yt-views-10000", platform: "youtube", type: "views", name: "Pro", quantity: 10000, price: 44.99 },
];
