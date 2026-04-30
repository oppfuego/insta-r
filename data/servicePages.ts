import { Platform, ServiceType } from "./services";

export interface ServicePageData {
  platform: Platform;
  service: ServiceType;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  benefits: { title: string; description: string }[];
  howItWorks: { step: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const servicePages: ServicePageData[] = [
  {
    platform: "instagram",
    service: "likes",
    slug: "likes",
    title: "Instagram Likes",
    subtitle: "Boost your post engagement with high-quality likes from real accounts",
    description: "Get authentic Instagram likes that improve your content visibility, push your posts higher in the algorithm, and attract organic engagement from real users.",
    longDescription: "Instagram's algorithm prioritises posts with high engagement. When your content receives a surge of genuine-looking likes, it signals to the platform that your post is worth promoting. Our Instagram Likes service delivers real-looking engagement from active accounts with profile pictures and post history, ensuring your growth looks natural and sustainable. Whether you are a brand launching a new product, an influencer growing your reach, or a small business building social proof, our likes help you get noticed faster.",
    benefits: [
      { title: "Algorithm Boost", description: "More likes push your content into Explore pages and recommended feeds, multiplying your organic reach." },
      { title: "Social Proof", description: "High like counts signal credibility and encourage new visitors to follow and engage with your profile." },
      { title: "Fast Delivery", description: "Likes begin appearing within minutes of placing your order, with gradual delivery for a natural look." },
      { title: "Real-Looking Accounts", description: "Every like comes from accounts with photos, bios, and activity — no empty or suspicious profiles." },
      { title: "Flexible Quantities", description: "Order as few as 100 or as many as 50,000 likes per post, tailored to your campaign needs." },
      { title: "No Password Required", description: "We only need your post link. Your login credentials are never requested or stored." },
    ],
    howItWorks: [
      { step: "01", title: "Choose Your Package", description: "Select a likes package that fits your campaign. Start small or go big — we scale with you." },
      { step: "02", title: "Enter Your Post Link", description: "Paste the URL of the Instagram post you want to boost. Make sure it is set to public." },
      { step: "03", title: "Confirm & Pay with Balance", description: "Review your order details and confirm. The cost is deducted instantly from your GrowPulse balance." },
      { step: "04", title: "Watch Engagement Grow", description: "Likes begin arriving within minutes. Track delivery progress in real-time on your dashboard." },
    ],
    faq: [
      { question: "Will Instagram likes get my account banned?", answer: "No. We deliver likes from real-looking accounts through safe methods. Thousands of creators use our service daily without issues." },
      { question: "How fast are likes delivered?", answer: "Delivery starts within 1-5 minutes. Smaller orders complete in under an hour; larger orders use gradual drip delivery over 24-48 hours." },
      { question: "Do likes drop over time?", answer: "We guarantee high retention. In rare cases where drops occur, our system automatically refills the difference at no extra cost." },
      { question: "Can I split likes across multiple posts?", answer: "Each order applies to one post. To boost multiple posts, place separate orders — your balance works across unlimited orders." },
    ],
  },
  {
    platform: "instagram",
    service: "followers",
    slug: "followers",
    title: "Instagram Followers",
    subtitle: "Grow your audience with genuine followers who engage with your content",
    description: "Build a credible Instagram presence with real-looking followers that strengthen your profile authority, attract brand deals, and encourage organic growth.",
    longDescription: "Your follower count is the first thing visitors notice on your Instagram profile. A strong number signals authority and trustworthiness, making new visitors far more likely to follow you too. Our Instagram Followers service delivers active-looking accounts that follow your profile gradually, mimicking organic growth patterns. This is ideal for new accounts looking to overcome the initial growth hurdle, established creators wanting to hit milestones, and businesses seeking social proof for partnerships and collaborations.",
    benefits: [
      { title: "Profile Authority", description: "A higher follower count instantly positions you as a credible creator or brand in your niche." },
      { title: "Attract Brand Deals", description: "Brands look at follower count when choosing influencer partnerships. More followers mean more opportunities." },
      { title: "Organic Snowball Effect", description: "New visitors are more likely to follow an account that already has a substantial following." },
      { title: "Gradual Delivery", description: "Followers are added gradually over hours or days to mimic natural growth patterns." },
      { title: "High Retention", description: "Our followers have high stick rates. We provide free top-ups if any drop-off occurs within 30 days." },
      { title: "Safe & Secure", description: "No password needed. We only require your public username to deliver followers." },
    ],
    howItWorks: [
      { step: "01", title: "Pick a Follower Package", description: "Choose from Starter (500), Growth (1,000), or Pro (5,000) — or enter a custom quantity." },
      { step: "02", title: "Enter Your Username", description: "Provide your Instagram handle. Your account must be public for delivery." },
      { step: "03", title: "Pay with Your Balance", description: "Confirm the order and the cost is deducted from your prepaid balance instantly." },
      { step: "04", title: "Track Your Growth", description: "Watch your follower count climb in real-time. Monitor progress on your GrowPulse dashboard." },
    ],
    faq: [
      { question: "Are the followers real people?", answer: "Followers come from real-looking accounts with profile photos, posts, and bios. They resemble genuine Instagram users." },
      { question: "Will my account get flagged?", answer: "No. We use safe delivery methods with gradual pacing to keep your account secure." },
      { question: "How long does delivery take?", answer: "Starter packages complete in 2-6 hours. Growth packages take 12-24 hours. Pro packages deliver over 2-4 days for natural pacing." },
      { question: "What if followers drop?", answer: "We guarantee 30-day retention. If followers drop below 90% of your order, we refill the difference at no charge." },
    ],
  },
  {
    platform: "instagram",
    service: "views",
    slug: "views",
    title: "Instagram Views",
    subtitle: "Increase your reel and story views to reach a wider audience",
    description: "Amplify your Instagram Reels and Stories with high-retention views that boost your content visibility and help you trend on the Explore page.",
    longDescription: "Instagram Reels and Stories are the fastest-growing content formats on the platform. The algorithm heavily favours content with high view counts, pushing it to Explore pages and Suggested Reels feeds. Our Instagram Views service delivers high-retention views that signal to the algorithm that your content is worth promoting. This creates a virtuous cycle: more views lead to more organic reach, which leads to more followers and engagement. Perfect for content creators, businesses running campaigns, and anyone looking to maximise their Instagram impact.",
    benefits: [
      { title: "Explore Page Potential", description: "Higher view counts dramatically increase your chances of landing on the Explore page." },
      { title: "High Retention Rate", description: "Our views have strong watch-time metrics, which the algorithm values more than raw view counts." },
      { title: "Boost Reels & Stories", description: "Works with both Instagram Reels and Stories to maximise your content reach." },
      { title: "Instant Start", description: "Views begin flowing within minutes of order placement for immediate impact." },
      { title: "Affordable Pricing", description: "Starting from just £0.01 per view, it is the most cost-effective way to grow your reach." },
      { title: "Unlimited Orders", description: "Boost as many posts as you want. There are no daily limits on orders." },
    ],
    howItWorks: [
      { step: "01", title: "Select a Views Package", description: "Pick from our preset packages or choose a custom view count." },
      { step: "02", title: "Share Your Content Link", description: "Paste the link to your Reel or Story. Content must be public." },
      { step: "03", title: "Confirm & Deduct Balance", description: "Review and confirm. Views are charged from your prepaid balance." },
      { step: "04", title: "Watch Views Climb", description: "Views start arriving immediately. Full delivery completes within hours." },
    ],
    faq: [
      { question: "Do views work on both Reels and Stories?", answer: "Yes. Our service supports both Instagram Reels and Story views." },
      { question: "Are the views high retention?", answer: "Yes. Our views have genuine watch-time patterns that the algorithm recognises as quality engagement." },
      { question: "How quickly do views appear?", answer: "Views start within 1-3 minutes and most orders complete within 1-4 hours depending on quantity." },
      { question: "Can I order views for old posts?", answer: "Yes, as long as the post is public and still available on Instagram." },
    ],
  },
  {
    platform: "tiktok",
    service: "likes",
    slug: "likes",
    title: "TikTok Likes",
    subtitle: "Boost your TikTok content with authentic likes that improve your ranking",
    description: "Get high-quality TikTok likes that push your videos higher on the For You page and attract genuine viewers to your content.",
    longDescription: "TikTok's For You page algorithm is heavily influenced by early engagement signals. Videos that receive a burst of likes shortly after posting are far more likely to be promoted to wider audiences. Our TikTok Likes service delivers authentic-looking engagement that triggers the algorithm's promotion mechanism. This is the fastest way to increase your video's visibility, attract new followers, and build momentum for your TikTok growth strategy. Used by creators, brands, and marketers to kickstart viral potential on every upload.",
    benefits: [
      { title: "For You Page Boost", description: "More likes signal quality content to TikTok's algorithm, increasing For You page placement." },
      { title: "Viral Potential", description: "A strong initial like count can trigger TikTok's viral distribution mechanism." },
      { title: "Competitive Edge", description: "Stand out in your niche with higher engagement metrics than similar creators." },
      { title: "Quick Results", description: "Likes are delivered within minutes, giving your new content an immediate boost." },
      { title: "Budget-Friendly", description: "TikTok likes start from just £0.015 each — affordable even for daily posting schedules." },
      { title: "Safe Delivery", description: "Gradual delivery ensures your engagement growth looks natural to TikTok's systems." },
    ],
    howItWorks: [
      { step: "01", title: "Choose Your Package", description: "Select a TikTok likes package based on your needs and budget." },
      { step: "02", title: "Share Your Video Link", description: "Copy and paste the URL of the TikTok video you want to boost." },
      { step: "03", title: "Pay with Balance", description: "Confirm your order and the cost is instantly deducted from your balance." },
      { step: "04", title: "See Likes Pour In", description: "Watch your like count rise as delivery begins within minutes." },
    ],
    faq: [
      { question: "Will TikTok remove the likes?", answer: "No. We use safe delivery methods that comply with TikTok's guidelines. Removal rates are extremely low." },
      { question: "Can I order likes for any video?", answer: "Yes, as long as the video is public and not age-restricted." },
      { question: "How many likes should I order?", answer: "For new accounts, 500-2,000 likes per video is effective. Larger accounts benefit from 5,000+ per video." },
      { question: "Do you offer auto-likes for new posts?", answer: "Not yet, but you can quickly place orders from your dashboard whenever you upload new content." },
    ],
  },
  {
    platform: "tiktok",
    service: "followers",
    slug: "followers",
    title: "TikTok Followers",
    subtitle: "Build your TikTok presence with real followers who love your content",
    description: "Grow your TikTok following with active-looking followers that strengthen your profile credibility and unlock creator monetisation features.",
    longDescription: "TikTok rewards creators with large followings through its Creator Fund, brand partnership marketplace, and LIVE gifting features. But growing from zero to your first 1,000 or 10,000 followers organically can take months. Our TikTok Followers service accelerates this journey by delivering genuine-looking followers that make your profile appear established and trustworthy. This social proof encourages organic follows from real viewers who discover your content, creating a compounding growth effect that sustains long after delivery.",
    benefits: [
      { title: "Unlock Monetisation", description: "Hit follower thresholds faster to access TikTok's Creator Fund and LIVE features." },
      { title: "Brand Partnership Ready", description: "Higher follower counts attract brand deals and sponsorship enquiries." },
      { title: "Social Proof", description: "Visitors are more likely to follow accounts that already have a strong following." },
      { title: "Gradual Growth", description: "Followers are delivered gradually over days to replicate organic growth curves." },
      { title: "30-Day Guarantee", description: "We guarantee retention for a full 30 days with free refills if needed." },
      { title: "No Login Required", description: "Just provide your TikTok username — we never ask for passwords." },
    ],
    howItWorks: [
      { step: "01", title: "Select a Package", description: "Choose from Starter (500), Growth (2,000), or Pro (5,000) followers." },
      { step: "02", title: "Enter Your Username", description: "Provide your TikTok handle. Your profile must be set to public." },
      { step: "03", title: "Confirm Purchase", description: "Review your order and confirm. Payment is deducted from your balance." },
      { step: "04", title: "Grow Your Audience", description: "Followers begin arriving within hours. Track progress on your dashboard." },
    ],
    faq: [
      { question: "Do TikTok followers interact with my content?", answer: "Followers are designed to look authentic. While they add to your count and social proof, organic engagement comes from viewers who discover your content through increased visibility." },
      { question: "Is it safe for my account?", answer: "Absolutely. Our delivery methods are designed to be safe and undetectable by TikTok's systems." },
      { question: "How long does full delivery take?", answer: "Starter packages complete in 6-12 hours. Growth packages take 1-2 days. Pro packages deliver over 3-5 days." },
      { question: "Can I order followers multiple times?", answer: "Yes. Many creators place recurring orders monthly to maintain steady growth." },
    ],
  },
  {
    platform: "tiktok",
    service: "views",
    slug: "views",
    title: "TikTok Views",
    subtitle: "Get more eyes on your videos with high-retention views that count",
    description: "Amplify your TikTok reach with views that boost your video's performance metrics and increase your chances of trending on the For You page.",
    longDescription: "On TikTok, views are the primary metric that drives the algorithm. Videos with high view counts in their first hours get pushed to progressively larger audiences through the For You page. Our TikTok Views service delivers high-retention views that replicate genuine viewing patterns — including realistic watch times and completion rates. This tells TikTok's algorithm that your content is engaging and worth showing to more people. The result is a snowball effect where paid views catalyse organic views, potentially turning any video into a trending piece of content.",
    benefits: [
      { title: "Algorithm Fuel", description: "High view counts in the first hours trigger TikTok's promotion engine for maximum reach." },
      { title: "High Retention", description: "Views include realistic watch-time patterns that the algorithm values highly." },
      { title: "Massive Scale", description: "Order up to 500,000 views per video for maximum impact on trending content." },
      { title: "Lowest Prices", description: "Starting from just £0.008 per view — the most affordable growth tool available." },
      { title: "Fast Delivery", description: "Views begin within minutes and most orders complete within hours." },
      { title: "Any Video Type", description: "Works with regular videos, duets, stitches, and LIVE replays." },
    ],
    howItWorks: [
      { step: "01", title: "Pick a Package", description: "Choose your view count from our preset packages or enter a custom number." },
      { step: "02", title: "Paste Video URL", description: "Share the link to the TikTok video you want to promote." },
      { step: "03", title: "Deduct from Balance", description: "Confirm and pay from your prepaid GrowPulse balance." },
      { step: "04", title: "Track Performance", description: "Views roll in fast. Monitor real-time delivery on your dashboard." },
    ],
    faq: [
      { question: "Do TikTok views affect my analytics?", answer: "Yes, views are counted in your TikTok analytics and contribute to your overall video performance metrics." },
      { question: "Can I use views to help a video go viral?", answer: "High view counts in the first few hours significantly increase your chances of being promoted by TikTok's algorithm." },
      { question: "Are the views from real devices?", answer: "Views come from a network of real devices and accounts, ensuring they register as genuine views in TikTok's system." },
      { question: "What is the maximum order size?", answer: "You can order up to 500,000 views per video per order." },
    ],
  },
  {
    platform: "youtube",
    service: "likes",
    slug: "likes",
    title: "YouTube Likes",
    subtitle: "Enhance your video credibility with genuine likes from active users",
    description: "Increase your YouTube video likes to improve search rankings, build viewer trust, and encourage more organic engagement on your content.",
    longDescription: "YouTube's search and recommendation algorithm considers likes as a key engagement signal. Videos with higher like-to-view ratios rank better in search results and are more frequently recommended in sidebar suggestions and the Home feed. Our YouTube Likes service delivers authentic-looking likes from accounts with watch history and activity. This boosts your video's performance metrics and creates a positive first impression for new viewers. Whether you are optimising for YouTube SEO, building social proof for a product launch, or simply growing your channel, more likes drive more visibility.",
    benefits: [
      { title: "Search Ranking Boost", description: "Higher like counts improve your position in YouTube search results for relevant keywords." },
      { title: "Recommendation Algorithm", description: "YouTube recommends videos with strong engagement — likes are a primary signal." },
      { title: "Viewer Trust", description: "A healthy like count reassures new viewers that your content is worth watching." },
      { title: "Gradual Delivery", description: "Likes arrive gradually to maintain a natural engagement pattern." },
      { title: "All Video Types", description: "Works with standard videos, Shorts, premieres, and livestream replays." },
      { title: "Permanent Results", description: "Likes are permanent and do not expire or disappear over time." },
    ],
    howItWorks: [
      { step: "01", title: "Select Package Size", description: "Choose from 500, 1,000, or 5,000 likes — or enter a custom amount." },
      { step: "02", title: "Share Video URL", description: "Paste your YouTube video link. The video must be public or unlisted." },
      { step: "03", title: "Pay from Balance", description: "Confirm and the cost is deducted from your GrowPulse balance." },
      { step: "04", title: "Watch Likes Grow", description: "Likes begin appearing within minutes. Track delivery on your dashboard." },
    ],
    faq: [
      { question: "Do YouTube likes help with monetisation?", answer: "Likes improve video performance which can lead to more views and watch time — the key metrics for YouTube monetisation eligibility." },
      { question: "Will YouTube remove the likes?", answer: "We use safe delivery methods with high retention rates. Removal is extremely rare." },
      { question: "Do likes work on YouTube Shorts?", answer: "Yes, our service works on all YouTube content types including Shorts." },
      { question: "Can I order likes for an older video?", answer: "Absolutely. Likes can be added to any public or unlisted YouTube video regardless of age." },
    ],
  },
  {
    platform: "youtube",
    service: "followers",
    slug: "subscribers",
    title: "YouTube Subscribers",
    subtitle: "Grow your channel with subscribers who stay and watch your content",
    description: "Build your YouTube subscriber base to unlock monetisation, increase video visibility, and establish channel authority in your niche.",
    longDescription: "Subscribers are the foundation of a successful YouTube channel. They provide a reliable audience for every upload, improve your video's initial performance metrics, and are a prerequisite for YouTube Partner Program monetisation (1,000 subscriber minimum). Our YouTube Subscribers service delivers genuine-looking subscribers to your channel, helping you reach milestones faster and build the social proof that attracts organic subscribers. Channels with higher subscriber counts also receive preferential treatment in YouTube's recommendation algorithm, meaning your content reaches larger audiences with every upload.",
    benefits: [
      { title: "Monetisation Threshold", description: "Hit the 1,000-subscriber milestone to qualify for YouTube's Partner Program and start earning revenue." },
      { title: "Initial View Boost", description: "Subscribers receive notifications for your new uploads, improving your video's crucial first-hour metrics." },
      { title: "Channel Authority", description: "Higher subscriber counts position your channel as an authority in your niche." },
      { title: "Gradual Delivery", description: "Subscribers are added slowly over days to replicate natural channel growth." },
      { title: "High Retention", description: "30-day retention guarantee with free refills if subscribers drop below 90%." },
      { title: "Username Only", description: "We never request your YouTube password. Just provide your channel URL." },
    ],
    howItWorks: [
      { step: "01", title: "Choose a Plan", description: "Select from Starter (100), Growth (500), or Pro (1,000) subscribers." },
      { step: "02", title: "Share Channel URL", description: "Provide your YouTube channel link or handle." },
      { step: "03", title: "Confirm & Pay", description: "Review your order and pay with your GrowPulse balance." },
      { step: "04", title: "Grow Your Channel", description: "Subscribers start arriving within hours. Full delivery completes in 2-7 days." },
    ],
    faq: [
      { question: "Will subscribers watch my videos?", answer: "Subscribers add to your count and social proof. Increased visibility from higher subscriber counts often leads to more organic views." },
      { question: "Is it safe for my YouTube channel?", answer: "Yes. Our delivery methods are designed to be safe and comply with best practices for channel growth." },
      { question: "How long does delivery take?", answer: "Starter packages take 1-3 days, Growth packages 3-5 days, and Pro packages 5-7 days for natural pacing." },
      { question: "Can I cancel an ongoing order?", answer: "Once delivery begins, orders cannot be cancelled. However, any undelivered portion will be refunded to your balance." },
    ],
  },
  {
    platform: "youtube",
    service: "views",
    slug: "views",
    title: "YouTube Views",
    subtitle: "Increase your video reach with high-retention views that boost your ranking",
    description: "Drive more views to your YouTube videos with high-retention, algorithm-friendly views that improve search rankings and trigger recommendations.",
    longDescription: "YouTube views are the most important metric for video success. The platform's recommendation engine heavily weighs view velocity — how quickly a video accumulates views after publishing. High-retention views (where viewers watch a significant portion of the video) are valued even more than raw view counts. Our YouTube Views service delivers retention-optimised views that signal quality content to the algorithm. This improves your video's search ranking, increases suggestion frequency, and can trigger the viral recommendation loop that drives exponential organic growth.",
    benefits: [
      { title: "Watch Time Optimised", description: "Our views include genuine watch-time patterns that YouTube's algorithm rewards." },
      { title: "Search SEO Impact", description: "Higher view counts improve your ranking for relevant search terms on YouTube." },
      { title: "Monetisation Hours", description: "Views contribute to watch-hour requirements for YouTube Partner Program eligibility." },
      { title: "Scalable Orders", description: "From 1,000 to 100,000 views per video — scale to match any campaign." },
      { title: "Works with Shorts", description: "Boost both long-form videos and YouTube Shorts with targeted views." },
      { title: "Quick Start", description: "Views begin arriving within minutes and scale up rapidly." },
    ],
    howItWorks: [
      { step: "01", title: "Choose View Count", description: "Select 1,000, 5,000, or 10,000 views — or enter a custom amount." },
      { step: "02", title: "Enter Video URL", description: "Paste the URL of the YouTube video you want to promote." },
      { step: "03", title: "Pay from Balance", description: "Confirm your order. The cost is deducted from your prepaid balance." },
      { step: "04", title: "Track Results", description: "Views start flowing immediately. Monitor progress on your dashboard." },
    ],
    faq: [
      { question: "Do views count toward watch hours?", answer: "Yes. Our high-retention views contribute to your channel's total watch hours, helping you meet monetisation requirements." },
      { question: "Are views from real locations?", answer: "Views come from a global network with mixed geographic distribution for a natural-looking traffic pattern." },
      { question: "Can views help a video go viral?", answer: "Strong view velocity in the first 24-48 hours significantly increases your chances of YouTube promoting the video algorithmically." },
      { question: "Do you support YouTube Shorts views?", answer: "Yes, we support both standard YouTube videos and YouTube Shorts." },
    ],
  },
];

export function getServicePageData(platform: string, service: string): ServicePageData | undefined {
  return servicePages.find((p) => p.platform === platform && p.slug === service);
}

export function getAllServiceParams(): { platform: string; service: string }[] {
  return servicePages.map((p) => ({ platform: p.platform, service: p.slug }));
}
