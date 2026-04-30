export interface Order {
  id: string;
  platform: string;
  service: string;
  package: string;
  quantity: number;
  price: number;
  status: "processing" | "in_progress" | "completed";
  date: string;
}

export interface Transaction {
  id: string;
  type: "top_up" | "purchase";
  amount: number;
  description: string;
  date: string;
}

export interface MockUser {
  name: string;
  surname: string;
  email: string;
  avatar: string;
  joinDate: string;
}

export const mockUser: MockUser = {
  name: "Alex",
  surname: "Johnson",
  email: "alex.johnson@email.com",
  avatar: "AJ",
  joinDate: "2025-12-15",
};

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    platform: "Instagram",
    service: "Followers",
    package: "Growth",
    quantity: 1000,
    price: 34.99,
    status: "completed",
    date: "2026-04-25",
  },
  {
    id: "ORD-002",
    platform: "TikTok",
    service: "Views",
    package: "Pro",
    quantity: 25000,
    price: 59.99,
    status: "in_progress",
    date: "2026-04-27",
  },
  {
    id: "ORD-003",
    platform: "YouTube",
    service: "Likes",
    package: "Starter",
    quantity: 500,
    price: 14.99,
    status: "processing",
    date: "2026-04-28",
  },
  {
    id: "ORD-004",
    platform: "Instagram",
    service: "Likes",
    package: "Growth",
    quantity: 1000,
    price: 17.99,
    status: "completed",
    date: "2026-04-20",
  },
  {
    id: "ORD-005",
    platform: "TikTok",
    service: "Followers",
    package: "Growth",
    quantity: 2000,
    price: 49.99,
    status: "completed",
    date: "2026-04-18",
  },
  {
    id: "ORD-006",
    platform: "YouTube",
    service: "Views",
    package: "Growth",
    quantity: 5000,
    price: 24.99,
    status: "in_progress",
    date: "2026-04-26",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "TXN-001",
    type: "top_up",
    amount: 100,
    description: "Balance top-up",
    date: "2026-04-15",
  },
  {
    id: "TXN-002",
    type: "purchase",
    amount: -34.99,
    description: "Instagram Followers — Growth",
    date: "2026-04-18",
  },
  {
    id: "TXN-003",
    type: "top_up",
    amount: 50,
    description: "Balance top-up",
    date: "2026-04-20",
  },
  {
    id: "TXN-004",
    type: "purchase",
    amount: -17.99,
    description: "Instagram Likes — Growth",
    date: "2026-04-20",
  },
  {
    id: "TXN-005",
    type: "purchase",
    amount: -59.99,
    description: "TikTok Views — Pro",
    date: "2026-04-25",
  },
  {
    id: "TXN-006",
    type: "top_up",
    amount: 100,
    description: "Balance top-up",
    date: "2026-04-26",
  },
  {
    id: "TXN-007",
    type: "purchase",
    amount: -49.99,
    description: "TikTok Followers — Growth",
    date: "2026-04-27",
  },
  {
    id: "TXN-008",
    type: "purchase",
    amount: -14.99,
    description: "YouTube Likes — Starter",
    date: "2026-04-28",
  },
];
