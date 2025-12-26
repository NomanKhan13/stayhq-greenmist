export const properties = [
  {
    name: "GreenMist Hill Retreat",
    slug: "greenmist-hill-retreat",
    location: "Munnar, Kerala",
    description:
      "Perched on misty hilltops, GreenMist Hill Retreat offers breathtaking views of rolling hills, cool mountain air, and serene natural surroundings.",
    highlights: [
      "Panoramic hill views",
      "Sunrise viewpoints",
      "Nature trails",
      "Peaceful hillside location",
    ],
    images: [
      "/images/properties/hill-1.jpg",
      "/images/properties/hill-2.jpg",
      "/images/properties/hill-3.jpg",
    ],
  },
  {
    name: "GreenMist Tea Garden Retreat",
    slug: "greenmist-tea-garden-retreat",
    location: "Munnar, Kerala",
    description:
      "Surrounded by lush tea plantations, GreenMist Tea Garden Retreat immerses you in the aroma, greenery, and heritage of Munnar’s famous tea estates.",
    highlights: [
      "Tea plantation views",
      "Guided tea walks",
      "Colonial-style architecture",
      "Calm and scenic ambience",
    ],
    images: [
      "/images/properties/tea-1.jpg",
      "/images/properties/tea-2.jpg",
      "/images/properties/tea-3.jpg",
    ],
  },
  {
    name: "GreenMist Valley Retreat",
    slug: "greenmist-valley-retreat",
    location: "Munnar, Kerala",
    description:
      "Nestled in a tranquil valley, GreenMist Valley Retreat offers lush greenery, flowing mist, and a deep connection with nature.",
    highlights: [
      "Valley-facing rooms",
      "Quiet surroundings",
      "Bird watching",
      "Ideal for long stays",
    ],
    images: [
      "/images/properties/valley-1.jpg",
      "/images/properties/valley-2.jpg",
      "/images/properties/valley-3.jpg",
    ],
  },
];

export const hillRooms = [
  // STANDARD ROOMS (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    propertyId: "76f99299-8341-41a3-98ee-f2570d70094a",
    slug: `hill-standard-${i + 1}`,
    name: `Hill Standard Room ${i + 1}`,
    description:
      "A cozy room with soothing interiors and partial hill views, ideal for a peaceful stay.",
    bedType: "Queen",
    bedCount: 1,
    type: "standard",
    occupancy: 2,
    pricePerNight: 3500,
    amenities: [
      "Free Wi-Fi",
      "Mountain view",
      "Attached bathroom",
      "Room service",
    ],
    images: ["/images/rooms/hill-standard.jpg"],
  })),

  // DELUXE ROOMS (10)
  ...Array.from({ length: 10 }).map((_, i) => ({
    propertyId: "76f99299-8341-41a3-98ee-f2570d70094a",
    slug: `hill-deluxe-${i + 1}`,
    name: `Hill Deluxe Room ${i + 1}`,
    description:
      "Spacious room with panoramic hill views and a private balcony.",
    bedType: "King",
    bedCount: 1,
    type: "deluxe",
    occupancy: 3,
    pricePerNight: 5200,
    amenities: [
      "Free Wi-Fi",
      "Private balcony",
      "Hill view",
      "Mini fridge",
      "Room service",
    ],
    images: ["/images/rooms/hill-deluxe.jpg"],
  })),

  // SUITES (5)
  ...Array.from({ length: 5 }).map((_, i) => ({
    propertyId: "76f99299-8341-41a3-98ee-f2570d70094a",
    slug: `hill-suite-${i + 1}`,
    name: `Hill View Suite ${i + 1}`,
    description:
      "Luxury suite offering uninterrupted hill views, a living area, and premium amenities.",
    bedType: "King",
    bedCount: 1,
    type: "suite",
    occupancy: 4,
    pricePerNight: 8500,
    amenities: [
      "Living area",
      "Private balcony",
      "Panoramic views",
      "Premium toiletries",
      "Coffee machine",
    ],
    images: ["/images/rooms/hill-suite.jpg"],
  })),
];

export const teaGardenRooms = [
  ...Array.from({ length: 10 }).map((_, i) => ({
    propertyId: "5f4c9285-37d4-4fdd-af0f-c1f36015e542",
    slug: `tea-standard-${i + 1}`,
    name: `Tea Garden Standard Room ${i + 1}`,
    description: "Comfortable room overlooking lush tea plantations.",
    bedType: "Queen",
    bedCount: 1,
    type: "standard",
    occupancy: 2,
    pricePerNight: 3800,
    amenities: ["Free Wi-Fi", "Tea garden view", "Attached bathroom"],
    images: ["/images/rooms/tea-standard.jpg"],
  })),

  ...Array.from({ length: 10 }).map((_, i) => ({
    propertyId: "5f4c9285-37d4-4fdd-af0f-c1f36015e542",
    slug: `tea-deluxe-${i + 1}`,
    name: `Tea Garden Deluxe Room ${i + 1}`,
    description:
      "Elegant room with plantation-facing balcony and enhanced comfort.",
    bedType: "King",
    bedCount: 1,
    type: "deluxe",
    occupancy: 3,
    pricePerNight: 5600,
    amenities: [
      "Private balcony",
      "Tea estate view",
      "Mini fridge",
      "Room service",
    ],
    images: ["/images/rooms/tea-deluxe.jpg"],
  })),

  ...Array.from({ length: 5 }).map((_, i) => ({
    propertyId: "5f4c9285-37d4-4fdd-af0f-c1f36015e542",
    slug: `tea-suite-${i + 1}`,
    name: `Tea Plantation Suite ${i + 1}`,
    description:
      "Premium suite nestled amidst tea gardens with a private sit-out area.",
    bedType: "King",
    bedCount: 1,
    type: "suite",
    occupancy: 4,
    pricePerNight: 9000,
    amenities: [
      "Living area",
      "Private sit-out",
      "Plantation views",
      "Coffee machine",
    ],
    images: ["/images/rooms/tea-suite.jpg"],
  })),
];

export const valleyRooms = [
  ...Array.from({ length: 10 }).map((_, i) => ({
    propertyId: "3e41bb30-5e9d-4dca-9091-e2e3877fb5e8",
    slug: `valley-standard-${i + 1}`,
    name: `Valley Standard Room ${i + 1}`,
    description: "Simple and serene rooms facing the lush green valley.",
    bedType: "Queen",
    bedCount: 1,
    type: "standard",
    occupancy: 2,
    pricePerNight: 3600,
    amenities: ["Free Wi-Fi", "Valley view", "Attached bathroom"],
    images: ["/images/rooms/valley-standard.jpg"],
  })),

  ...Array.from({ length: 10 }).map((_, i) => ({
    propertyId: "3e41bb30-5e9d-4dca-9091-e2e3877fb5e8",
    slug: `valley-deluxe-${i + 1}`,
    name: `Valley Deluxe Room ${i + 1}`,
    description:
      "Spacious rooms with private balconies overlooking the valley.",
    bedType: "King",
    bedCount: 1,
    type: "deluxe",
    occupancy: 3,
    pricePerNight: 5400,
    amenities: [
      "Private balcony",
      "Valley view",
      "Mini fridge",
      "Room service",
    ],
    images: ["/images/rooms/valley-deluxe.jpg"],
  })),

  ...Array.from({ length: 5 }).map((_, i) => ({
    propertyId: "3e41bb30-5e9d-4dca-9091-e2e3877fb5e8",
    slug: `valley-suite-${i + 1}`,
    name: `Valley View Suite ${i + 1}`,
    description:
      "Luxury suite offering panoramic valley views and a peaceful retreat.",
    bedType: "King",
    bedCount: 1,
    type: "suite",
    occupancy: 4,
    pricePerNight: 8800,
    amenities: [
      "Living area",
      "Private balcony",
      "Valley views",
      "Premium toiletries",
    ],
    images: ["/images/rooms/valley-suite.jpg"],
  })),
];
