export type Platform = "instagram" | "tiktok" | "youtube";
export type ServiceType = "likes" | "followers" | "views";

export interface Service {
  id: string;
  platform: Platform;
  type: ServiceType;
  title: string;
  description: string;
  pricePerUnit: number;
  minOrder: number;
  maxOrder: number;
  unit: string;
}

export const services: Service[] = [
  {
    id: "ig-likes",
    platform: "instagram",
    type: "likes",
    title: "Instagram Likes",
    description: "High-quality likes from real accounts to boost your post engagement and visibility.",
    pricePerUnit: 0.02,
    minOrder: 100,
    maxOrder: 50000,
    unit: "likes",
  },
  {
    id: "ig-followers",
    platform: "instagram",
    type: "followers",
    title: "Instagram Followers",
    description: "Grow your audience with genuine followers who engage with your content.",
    pricePerUnit: 0.04,
    minOrder: 100,
    maxOrder: 100000,
    unit: "followers",
  },
  {
    id: "ig-views",
    platform: "instagram",
    type: "views",
    title: "Instagram Views",
    description: "Increase your reel and story views to reach a wider audience organically.",
    pricePerUnit: 0.01,
    minOrder: 500,
    maxOrder: 100000,
    unit: "views",
  },
  {
    id: "tt-likes",
    platform: "tiktok",
    type: "likes",
    title: "TikTok Likes",
    description: "Boost your TikTok content with authentic likes that improve your algorithm ranking.",
    pricePerUnit: 0.015,
    minOrder: 100,
    maxOrder: 50000,
    unit: "likes",
  },
  {
    id: "tt-followers",
    platform: "tiktok",
    type: "followers",
    title: "TikTok Followers",
    description: "Build your TikTok presence with real followers who love your content.",
    pricePerUnit: 0.03,
    minOrder: 100,
    maxOrder: 100000,
    unit: "followers",
  },
  {
    id: "tt-views",
    platform: "tiktok",
    type: "views",
    title: "TikTok Views",
    description: "Get more eyes on your videos with high-retention views that count.",
    pricePerUnit: 0.008,
    minOrder: 500,
    maxOrder: 500000,
    unit: "views",
  },
  {
    id: "yt-likes",
    platform: "youtube",
    type: "likes",
    title: "YouTube Likes",
    description: "Enhance your video credibility with genuine likes from active users.",
    pricePerUnit: 0.03,
    minOrder: 50,
    maxOrder: 20000,
    unit: "likes",
  },
  {
    id: "yt-followers",
    platform: "youtube",
    type: "followers",
    title: "YouTube Subscribers",
    description: "Grow your channel with subscribers who stay and watch your content.",
    pricePerUnit: 0.08,
    minOrder: 50,
    maxOrder: 50000,
    unit: "subscribers",
  },
  {
    id: "yt-views",
    platform: "youtube",
    type: "views",
    title: "YouTube Views",
    description: "Increase your video reach with high-retention views that boost your ranking.",
    pricePerUnit: 0.012,
    minOrder: 500,
    maxOrder: 100000,
    unit: "views",
  },
];

export const platformInfo: Record<Platform, { name: string; color: string; gradient: string; description: string; services: string[] }> = {
  instagram: {
    name: "Instagram",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
    description: "Grow your Instagram presence with likes, followers, and views that boost your reach and engagement.",
    services: ["Likes", "Followers", "Reels Views", "Story Views"],
  },
  tiktok: {
    name: "TikTok",
    color: "#00f2ea",
    gradient: "from-[#00f2ea] to-[#ff0050]",
    description: "Amplify your TikTok content with engagement that helps you trend and reach new audiences.",
    services: ["Likes", "Followers", "Video Views", "Shares"],
  },
  youtube: {
    name: "YouTube",
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#CC0000]",
    description: "Build your YouTube channel with subscribers, views, and likes that grow your community.",
    services: ["Likes", "Subscribers", "Video Views", "Watch Hours"],
  },
};