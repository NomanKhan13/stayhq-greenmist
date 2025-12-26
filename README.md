# 🏨 StayHQ — Customer-Facing Hotel Booking App

**Project Scope: Hotel Group (GreenMist)**

**Properties:**

- GreenMist Hill View Retreat
- GreenMist Tea Garden Estate
- GreenMist Valley Retreat

---

# 🎯 Core Problems We Solve

1. **Avoid double booking**
2. **Help users make informed booking decisions**

👉 Every feature below exists **only** to support these two goals.

---

# ✅ USER STORIES (FINAL & CLEAN)

## 🎯 GOAL 1: Avoid Double Booking

---

### 🧑‍💼 User Story 0 — About us

**As a guest**,
I want to be able to know about the GreenMist properties,
so that I can choose where to book.

**Acceptance Criteria**

- Information about GreenMist properties
- Location details
- Unique selling points

---

---

### 🧑‍💼 User Story 1 — Select Property

**As a guest**,
I want to choose a property before selecting rooms,
so that I book at the correct location.

**Acceptance Criteria**

- List of GreenMist properties
- Clear property name & location
- Selected property persists through booking flow

---

### 🧑‍💼 User Story 2 — View Availability (Property-Level)

**As a guest**,
I want to see available rooms for selected dates at a property,
so that I don’t attempt to book an occupied room.

**Acceptance Criteria**

- User selects check-in & check-out dates
- Only available rooms are shown
- Unavailable rooms are disabled or hidden

---

### 🧑‍💼 User Story 3 — Room-Level Availability

**As a guest**,
I want to check availability for a specific room,
so that I know if it can be booked for my stay.

**Acceptance Criteria**

- Room detail page shows availability status
- Date picker blocks unavailable dates
- Clear messaging if room is unavailable

---

### 🧑‍💼 User Story 4 — Prevent Parallel Bookings

**As a guest**,
I want the system to temporarily reserve a room during checkout,
so that no one else can book it simultaneously.

**Acceptance Criteria**

- Room is locked during checkout
- Lock expires after X minutes
- Backend prevents race conditions

> 💡 Interview highlight: Shows understanding of concurrency.

---

### 🧑‍💼 User Story 5 — Booking Confirmation

**As a guest**,
I want confirmation after booking,
so that I know my reservation is successful.

**Acceptance Criteria**

- Confirmation page with booking ID
- Booking details displayed clearly
- Email confirmation (mocked)

---

## 🎯 GOAL 2: Help Users Make Informed Decisions

---

### 🧑‍💼 User Story 6 — Compare Room Types

**As a guest**,
I want to compare room types with prices and capacity,
so that I choose the best option for my needs.

**Acceptance Criteria**

- Price per night visible
- Guest capacity shown
- Clear room type labels

---

### 🧑‍💼 User Story 7 — View Room Details

**As a guest**,
I want detailed room information,
so that I know exactly what I’m booking.

**Acceptance Criteria**

- Photo gallery
- Amenities list
- Description
- Check-in / check-out times

---

### 🧑‍💼 User Story 8 — Understand Total Cost

**As a guest**,
I want to see the final price before confirming,
so that there are no surprises.

**Acceptance Criteria**

- Nights × price calculation
- Taxes & fees shown
- Add-ons included
- Final payable amount visible

---

### 🧑‍💼 User Story 9 — Select Add-ons

**As a guest**,
I want to select optional add-ons,
so that I can customize my stay.

**Acceptance Criteria**

- Add-ons listed clearly
- Transparent pricing
- Optional selection

Examples:

- Airport pickup
- Meals
- Extra bed

---

### 🧑‍💼 User Story 10 — Reviews (Optional)

**As a guest**,
I want to read reviews,
so that I feel confident before booking.

**Acceptance Criteria**

- Average rating visible
- Recent reviews shown
- Marked as verified (optional)

---

## 🔐 Cross-Cutting User Stories

---

### 🧑‍💼 User Story 11 — Authentication

**As a guest**,
I want to log in or sign up,
so that my bookings are securely linked to me.

---

### 🧑‍💼 User Story 12 — Past and future reservations

**As a guest**,
I want to view my past and future bookings,
so that I can verify or rebook easily.

---

### 🧑‍💼 User Story 13 — Update and delete reservations

**As a guest**,
I want to update and delete my bookings,
so that I can manage my reservations easily.

---

### 🧑‍💼 User Story 14 — New user

**As a guest**,
I want to have an account created when I sign up,
so that I can manage my bookings and personal information.

---

### 🧑‍💼 User Story 15 — Update user info

**As a guest**,
I want to be able to update my profile information,
so that my account details are current.

---

## 🚫 Explicitly Excluded (Say This Confidently)

- ❌ Hotel marketplace (Airbnb-style)
- ❌ Third-party property onboarding
- ❌ Coupons & discounts
- ❌ Chat support
- ❌ Dynamic pricing packages

**Reason:** They do not serve the core problems.

---

# 🧭 PAGES (Customer-Facing)

```
/                    → Landing
/about-us            → About GreenMist
/properties          → Property selection
/rooms               → Room listing + availability
/rooms/[id]          → Room detail + calendar
/booking             → Checkout
/booking/success     → Confirmation
/auth/login          → Login
/auth/signup         → Signup
/account             → Reservations & profile
/account/bookings    → Paste and future reservations
/account/profile     → User profile management
```

---

# 🧩 PAGES → COMPONENTS

## 🏠 Landing (`/`)

- `HeroSection`
- `PropertyHighlightsPreview`
- `AmenitiesPreview`
- `CallToActionButton`

---

## 🧑‍💼 About Us (`/about-us`)

- `AboutUsSection`
- `PropertyOverview`
- `LocationDetails`
- `UniqueSellingPoints`

---

## 🏨 Properties (`/properties`)

- `PropertyCard`
- `PropertyList`

---

## 🛏 Rooms (`/rooms`)

- `DateRangePicker`
- `RoomFilters`
- `RoomCard`
- `AvailabilityBadge`
- `PriceBadge`

---

## 🛏 Room Detail (`/rooms/[id]`)

- `RoomGallery`
- `RoomSummary`
- `AmenitiesList`
- `AvailabilityCalendar`
- `PriceBreakdown`
- `ReviewsSection`
- `BookNowButton`

---

## 🧾 Booking (`/booking`)

- `BookingSummary`
- `GuestDetailsForm`
- `AddOnSelector`
- `PriceCalculation`
- `ConfirmBookingButton`

---

## ✅ Success (`/booking/success`)

- `BookingSuccessMessage`
- `BookingDetailsCard`
- `SelectedAddOnsList`

---

## 👤 Account (`/account`)

- `BookingHistoryList`
- `BookingHistoryCard`
- `BookingStatusBadge`

---

# 🗃 DATA MODELS (FINAL)

## Property

```ts
Property {
  id: string
  name: string
  location: string
  description: string
  amenities: string[]
  images: string[]
}
```

---

## Room

```ts
Room {
  id: string
  propertyId: string
  name: string
  type: "standard" | "deluxe" | "suite"
  capacity: number
  pricePerNight: number
  amenities: string[]
  images: string[]
}
```

---

## Booking

```ts
Booking {
  id: string
  userId: string
  propertyId: string
  roomId: string
  checkIn: Date
  checkOut: Date
  totalPrice: number
  status: "confirmed" | "cancelled"
  createdAt: Date
}
```

---

## AddOn

```ts
AddOn {
  id: string
  name: string
  price: number
  pricingType: "per_booking" | "per_night"
}
```

---

## BookingAddOn

```ts
BookingAddOn {
  bookingId: string
  addOnId: string
  quantity: number
}
```

---

## User

```ts
User {
  id: string
  name: string
  email: string
}
```

(Auth via NextAuth)

---

# 🔌 API CONTRACTS

### Get Properties

```
GET /api/properties
```

---

### Get Rooms (with availability)

```
GET /api/rooms?propertyId=&checkIn=&checkOut=
```

---

### Get Room Detail

```
GET /api/rooms/:id?checkIn=&checkOut=
```

---

### Get Add-ons

```
GET /api/addons
```

---

### Create Booking

```
POST /api/bookings
```

```json
{
  "propertyId": "string",
  "roomId": "string",
  "checkIn": "date",
  "checkOut": "date",
  "addOns": [{ "addOnId": "string", "quantity": 1 }]
}
```

---

### Booking Confirmation

```
GET /api/bookings/:id
```

---

### User Bookings

```
GET /api/me/bookings
```

---

# 🎤 Interview Closing Statement (Use This)

> “We identified two core problems—double booking and decision uncertainty.
> Every feature, page, and API was designed to directly address one of these problems while avoiding unnecessary complexity.”

This alone puts you **ahead of most candidates**.

---

# Now go build it! 🚀

1. Build home page with a header and a main section.
   - Header consist of logo on the left and navigation links on the right.
   - Navigation links: Home, About Us, Properties, Account.
   - Main section consist of a hero section with a background image, title, subtitle and a call-to-action button.
2. Build About Us page with information about GreenMist properties.
   - use chatGPT to generate content for each property.
3. Setup font, metadata & favicon.
4. Setup Navigation and RootLayout.
5. Setup routing for all pages.
6. Use nextjs Image to optimize images on Hero section and About Us page.
7. Setup accounts and sub-pages under account.
