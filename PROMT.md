# PROMPT.md — SMM Growth Service Website (Frontend Only)

## IMPORTANT

You must follow this document strictly.

* Do NOT skip sections
* Do NOT simplify logic
* Do NOT add backend
* Do NOT invent your own architecture
* Build production-quality UI
* Everything must be frontend-only

---

## PROJECT OVERVIEW

Build a modern premium website that provides social media growth services.

The platform sells:

* Likes
* Followers / Subscribers
* Views

Supported platforms:

* Instagram
* TikTok
* YouTube

The system is balance-based:

* User tops up balance
* Uses balance to buy services
* No subscriptions
* No real payments (frontend only)

Reference logic:
https://proxium.vercel.app/

---

## TECH STACK

Use:

* Next.js (App Router)
* TypeScript
* React
* Tailwind CSS OR SCSS Modules
* Framer Motion (preferred) or GSAP
* Lucide React or React Icons

DO NOT USE:

* Backend
* Database
* Real authentication
* Real payment APIs

---

## PROJECT STRUCTURE

src/
app/
page.tsx
about/page.tsx
how-it-works/page.tsx
top-up/page.tsx
sign-in/page.tsx
sign-up/page.tsx
dashboard/page.tsx
terms/page.tsx
privacy/page.tsx
not-found.tsx

components/
layout/
Header.tsx
Footer.tsx
MobileMenu.tsx
Container.tsx

```
sections/
  HeroSection.tsx
  PlatformsSection.tsx
  ServicesSection.tsx
  HowItWorksSection.tsx
  PackagesSection.tsx
  DashboardPreviewSection.tsx
  BenefitsSection.tsx
  TestimonialsSection.tsx
  FAQSection.tsx
  CTASection.tsx

ui/
  Button.tsx
  Card.tsx
  Input.tsx
  Badge.tsx
  Select.tsx
  Modal.tsx

animations/
  ScrollReveal.tsx
  AnimatedCounter.tsx
  ParallaxLayer.tsx
  FloatingShapes.tsx
```

context/
BalanceContext.tsx

data/
services.ts
packages.ts
testimonials.ts
faq.ts
mockUser.ts

---

## DESIGN REQUIREMENTS

The design must be:

* Modern
* Premium
* Clean
* Commercial
* With animations
* Not overloaded

Use:

* Glassmorphism
* Gradients
* Soft shadows
* 3D abstract shapes
* Floating elements
* Scroll animations
* Hover effects

Add:

* Animated blobs
* Gradient backgrounds
* Social media icons
* Growth-style visuals

---

## HEADER

Include:

* Logo
* Home
* About
* How It Works
* Top-Up
* Dashboard
* Sign In
* Sign Up (primary button)

Behavior:

* Sticky
* Transparent at top
* Blur on scroll
* Mobile menu

---

## HOME PAGE

### HERO

Include:

* Title: “Boost your social presence”
* Subtitle explaining services
* CTA: Top Up Balance
* Secondary CTA: Explore Services

Visual:

* Balance card
* Dashboard preview
* Floating icons (Instagram, TikTok, YouTube)
* Animated shapes

---

### STATS

4 stats with animation:

* Platforms count
* Services count
* Fast activation
* Flexible system

---

### PLATFORMS

3 cards:

* Instagram
* TikTok
* YouTube

Each includes:

* Icon
* Description
* Services list

---

### SERVICES

For each platform:

* Likes
* Followers
* Views

Each card includes:

* Title
* Description
* Price
* CTA: Buy

---

### HOW IT WORKS

4 steps:

1. Create account
2. Top up balance
3. Choose service
4. Track orders

---

### DASHBOARD PREVIEW

Show:

* Balance
* Orders
* Status
* Transactions

Statuses:

* Processing
* In progress
* Completed

---

### BENEFITS

Add cards:

* Flexible balance
* Multi-platform
* Easy usage
* Fast orders
* Clean dashboard

---

### TESTIMONIALS

5–6 realistic reviews.

---

### FAQ

Questions about:

* Balance system
* Platforms
* Services
* Orders
* Payments

---

### CTA

Final block:

* “Start growing today”
* Buttons: Top Up / Explore

---

## TOP-UP PAGE

Include:

* Balance display
* Input amount
* Buttons: $10 / $25 / $50 / $100
* Payment methods (visual only)

Button:
“Add Balance”

Logic:

* Updates balance in frontend state

---

## DASHBOARD PAGE

Include:

* User info
* Balance
* Orders table
* Transactions
* Filters

Table columns:

* Platform
* Service
* Package
* Price
* Status
* Date

---

## SIGN IN

Fields:

* Email
* Password

Frontend only:

* Redirect to dashboard

---

## SIGN UP

Fields:

* Name
* Surname
* Email
* Password
* Checkbox (terms)

Frontend only.

---

## TERMS & PRIVACY

Create realistic pages with:

* Service description
* User responsibilities
* Balance logic
* Refund disclaimer
* Privacy explanation

---

## FOOTER

Include:

* Logo
* Links
* Legal pages
* Payment icons (visual)
* Copyright

---

## LOGIC RULES

* Balance stored in React Context
* No real API
* No real payments
* No real auth
* Use mock data
* Everything must work visually

---

## FINAL REQUIREMENTS

* Fully responsive
* No broken links
* No empty pages
* Clean UI
* Smooth animations
* Build must pass
* No TypeScript errors

---

## IMPLEMENTATION

Follow this order:

1. Project structure
2. Layout + Header/Footer
3. Home page
4. Animations
5. Dashboard logic
6. Top-up logic
7. Other pages
8. Polish UI

---

END OF FILE
