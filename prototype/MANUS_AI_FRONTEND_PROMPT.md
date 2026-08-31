# Manus AI Prompt — SIH26132 Frontend Prototype
**Strengthening Market Linkages and Price Discovery for Farmers**

> Paste everything below the line into Manus AI as a single prompt. This generates a **frontend-only** clickable prototype (no real backend, use mock/dummy data + local state) for a hackathon demo.

---

## PROMPT START

Build a **frontend-only web app prototype** (React + Vite + TypeScript + Tailwind CSS + shadcn/ui) for an AI-powered farmer market decision & transaction platform called **AgriConnect** (SIH26132 — Strengthening Market Linkages and Price Discovery for Farmers).

There is **no real backend**. Use mock JSON data, local component state, and `localStorage` to simulate persistence across the flow. Focus entirely on UI/UX, navigation, and realistic-looking data — this is a hackathon demo prototype.

### Core Concept
Farmers currently sell to local middlemen at unfair prices due to lack of market/price transparency. This platform lets farmers list produce, compares prices/demand across nearby markets and buyers, recommends the best time/place/buyer to sell, and walks the deal through discovery → offer → confirmation → logistics → delivery → payment → transaction record, with a dispute/grievance option at the end.

### User Roles (role-based views, switch via a login/role-select screen — no real auth, just pick a role)
1. **Farmer / FPO** — Add produce, view prices & demand, get recommendations, discover buyers, sell & track deals.
2. **Buyer / Processor / Institution** — Post demand, search available lots, make offers, track orders.
3. **Admin / Govt. User** — Verify users, monitor transactions, manage data, resolve disputes (simple dashboard).

### Screens & Flow to Build (this is the primary user journey — build every step as a real screen/page, not just a diagram)

1. **Login / Register** — role selector (Farmer/FPO, Buyer/Processor, Admin/Govt), simple mock form.
2. **Farmer Dashboard** — quick stats (active lots, pending offers, avg price trend), CTA "Add Produce".
3. **Data Collection Layer (implicit, shown as inputs)** — mandi prices ticker, buyer demand snapshot, arrival volumes, quality standards, logistics/storage info, misc data (weather/news) — small widget cards on dashboard.
4. **Market Intelligence & Recommendation Engine** — a dedicated page/panel showing:
   - Current price comparison across nearby markets (table/bar chart, mock data)
   - Price trend & prediction (line chart, next 7 days, mock forecast)
   - Best sale window recommendation (highlighted date/time card)
   - Net return calculator (price − transport − storage − other costs = net profit, with editable input fields)
   - Buyer matching score (list of matched buyers with % match badges)
5. **Recommendations to Farmer/FPO** — a clean summary card: best market/buyer, expected selling price, best time to sell, expected net profit, transport & logistics options. Include a "Create Lot" CTA.
6. **Lot Creation (Farmer/FPO)** — form: crop type, quantity, quality grade (manual or "AI-assisted" mock toggle), location, harvest date, optional photo upload (just UI, no real upload needed), submit → lot appears in "My Lots".
7. **Buyer Discovery & Offers** —
   - Buyer side: browse/search lots matching their demand, filter by crop/quality/location, "Send Offer" (price, quantity, terms) form.
   - Farmer side: "Offers Received" screen listing offers per lot, compare side-by-side, Accept/Reject buttons.
8. **Offer Accepted? decision** — if Accepted → go to Deal Confirmation. If Rejected/Waiting → back to "Show More Offers" list with a toast/notice.
9. **Deal Confirmation** — confirm deal terms summary screen, "Generate Digital Contract/Agreement" button that shows a mock generated agreement (styled document preview, downloadable-looking PDF card but can be a styled modal).
10. **Logistics Coordination** — find best transport option (mock list of transporters with cost/route/ETA), select one, schedule pickup/delivery date.
11. **Delivery & Quality Verification** — checklist UI: goods delivered confirmation, quality & quantity verification toggle, digital acknowledgement signature (simple signature-pad-style UI or "Confirm" button).
12. **Payment Tracking** — invoice auto-generated (mock), payment status stepper (Pending → Processing → Paid), "Initiate Payment" button for buyer.
13. **Transaction Record** — full transaction history table with digital receipts, filters, and a simple analytics panel (total sales, avg price realized, produce sold over time — mock charts).
14. **Dispute / Grievance Management** — raise complaint form (linked to a transaction), status tracker (Raised → Admin Review → Resolution & Feedback), list of past complaints.
15. **Admin/Govt Dashboard** — verify pending users (approve/reject list), monitor all transactions (table), manage disputes (queue with resolve action), basic platform analytics (total farmers, buyers, transaction volume — mock charts).

### Navigation Structure
- Persistent top navbar with role-aware menu + logo "AgriConnect" + notification bell (mock) + profile avatar.
- Farmer: Dashboard | My Lots | Recommendations | Offers | Transactions | Disputes
- Buyer: Dashboard | Browse Lots | My Offers | Orders | Transactions
- Admin: Dashboard | Users | Transactions | Disputes | Analytics
- Left sidebar (collapsible) on desktop, bottom tab bar on mobile.

### Design Guidelines
- Clean, modern agri-tech look: green (#2E7D32 primary) + warm accent (amber #F59E0B for CTAs/highlights) + neutral grays, white cards, soft shadows, rounded-xl corners.
- Use icons (lucide-react) for crops, trucks, price trends, verification, etc.
- Use recharts (or similar) for price trend, demand-supply, and analytics charts — all mock data.
- Fully responsive (mobile-first, since farmers primarily use phones) — large tap targets, simple language, minimal text-heavy screens.
- Add a language toggle UI (English/Hindi labels shown, doesn't need real i18n — just show the switcher for demo).
- Include empty/loading/success states with friendly micro-copy.
- Add subtle animations on step transitions (framer-motion) to make the deal-flow feel alive during the demo.

### Mock Data
Seed realistic Indian mandi/crop data: crops like Wheat, Onion, Tomato, Cotton, Soybean; markets like Azadpur Mandi, Vashi APMC, Indore Mandi; prices in ₹/quintal; farmer/buyer names; Indian locations (village/district/state). Store mock data in a `/src/data` folder as JSON/TS files so it's easy to edit later.

### Tech Constraints
- React 18 + Vite + TypeScript
- Tailwind CSS + shadcn/ui components
- react-router-dom for routing between all screens above
- recharts for charts
- lucide-react for icons
- No real backend/API calls — everything mocked with local state/localStorage/JSON fixtures
- Structure code so a backend can be plugged in later (clear service/api layer stubs, e.g. `src/services/*.ts` returning mock data via Promises, ready to be swapped for real fetch calls)

### Deliverable
A working, navigable, deployable static frontend prototype covering the full flow above end-to-end, suitable for a live hackathon demo walkthrough: **Farmer → Add Crop → Market Price Analysis → Best Price/Market Recommendation → Buyer Matching → Digital Offers → Deal Confirmation → Logistics → Delivery → Payment Tracking → Transaction Record**, plus the Buyer and Admin side panels.

## PROMPT END
