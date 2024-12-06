import { Playground } from '../types/playground';

export const playgrounds: Playground[] = [
  {
    id: 1,
    name: "Green Point Urban Park Playground",
    location: { lat: -33.9095, lng: 18.4105 },
    address: "1 Fritz Sonnenberg Rd, Green Point, Cape Town",
    description: "Modern playground with climbing frames, swings, and slides in a safe, enclosed environment.",
    facilities: ["Swings", "Slides", "Climbing Frame", "Sandpit", "Benches", "Water Fountain"],
    ageRange: "2-12 years",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userId: "user1",
        rating: 5,
        comment: "Excellent facilities and very clean!",
        date: "2024-03-15"
      }
    ],
    maintenanceReports: []
  },
  {
    id: 2,
    name: "Durban Botanical Gardens Play Area",
    location: { lat: -29.8487, lng: 31.0218 },
    address: "70 St Thomas Rd, Musgrave, Durban",
    description: "Natural playground area surrounded by beautiful gardens.",
    facilities: ["Wooden Climbing Structures", "Balance Beams", "Nature Trail", "Picnic Area"],
    ageRange: "3-12 years",
    rating: 4.2,
    reviews: [],
    maintenanceReports: []
  },
  {
    id: 3,
    name: "Company's Garden Playground",
    location: { lat: -33.9271, lng: 18.4173 },
    address: "19 Queen Victoria St, Cape Town City Centre",
    description: "Historic garden playground with modern equipment.",
    facilities: ["Swings", "Slides", "Spring Riders", "Shade Structures"],
    ageRange: "2-10 years",
    rating: 4.0,
    reviews: [],
    maintenanceReports: []
  }
];