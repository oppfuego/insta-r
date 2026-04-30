export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  platform: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Fashion Influencer",
    avatar: "SM",
    rating: 5,
    text: "This platform completely transformed my Instagram presence. I went from 2K to 15K followers in just a month, and the engagement feels totally organic. My brand deals have tripled since then!",
    platform: "Instagram",
  },
  {
    id: "t2",
    name: "Jake Rivera",
    role: "Content Creator",
    avatar: "JR",
    rating: 5,
    text: "The TikTok views package is incredible. My videos started hitting the For You page regularly after boosting them. The balance system is super convenient — just top up and go.",
    platform: "TikTok",
  },
  {
    id: "t3",
    name: "Emily Chen",
    role: "Small Business Owner",
    avatar: "EC",
    rating: 4,
    text: "As a bakery owner, I needed social proof fast. The Instagram likes and followers packages gave my business the credibility boost I needed. Orders from social media increased by 200%.",
    platform: "Instagram",
  },
  {
    id: "t4",
    name: "Marcus Thompson",
    role: "YouTube Creator",
    avatar: "MT",
    rating: 5,
    text: "I was struggling to get my YouTube channel off the ground. The subscriber and view packages helped me reach monetization thresholds much faster. The dashboard makes tracking everything easy.",
    platform: "YouTube",
  },
  {
    id: "t5",
    name: "Lisa Park",
    role: "Digital Marketer",
    avatar: "LP",
    rating: 5,
    text: "I manage social media for multiple clients, and this platform is a game-changer. The multi-platform support means I can handle Instagram, TikTok, and YouTube all from one balance. Saves me hours every week.",
    platform: "Multi-platform",
  },
  {
    id: "t6",
    name: "David Kim",
    role: "Music Artist",
    avatar: "DK",
    rating: 4,
    text: "Getting my music videos noticed on YouTube and TikTok was tough until I found this service. The views came in quickly and my organic reach started growing on its own. Highly recommend for artists.",
    platform: "TikTok",
  },
];
