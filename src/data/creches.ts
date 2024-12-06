import { Creche } from '../types/creche';

export const creches: Creche[] = [
  // Cape Town
  {
    id: 1,
    name: "Sunshine Daycare Centre",
    location: { lat: -33.925, lng: 18.423 },
    address: "123 Main Road, Green Point, Cape Town",
    numberOfChildren: 45,
    teacherCount: 6,
    teacherChildRatio: 1 / 8,
    city: "Cape Town",
    contactNumber: "021-555-0123",
    ageRange: "3 months - 5 years",
    operatingHours: "07:00 - 17:30"
  },
  {
    id: 2,
    name: "Little Angels Creche",
    location: { lat: -33.904, lng: 18.417 },
    address: "45 Beach Road, Sea Point, Cape Town",
    numberOfChildren: 35,
    teacherCount: 5,
    teacherChildRatio: 1 / 7,
    city: "Cape Town",
    contactNumber: "021-555-0124",
    ageRange: "1 - 5 years",
    operatingHours: "06:30 - 17:00"
  },
  {
    id: 3,
    name: "Happy Tots Academy",
    location: { lat: -33.957, lng: 18.490 },
    address: "12 Park Lane, Claremont, Cape Town",
    numberOfChildren: 40,
    teacherCount: 6,
    teacherChildRatio: 1 / 6,
    city: "Cape Town",
    contactNumber: "021-555-0125",
    ageRange: "6 months - 5 years",
    operatingHours: "07:30 - 17:00"
  },
  {
    id: 4,
    name: "Bright Minds Creche",
    location: { lat: -33.912, lng: 18.380 },
    address: "78 Sunset Boulevard, Table View, Cape Town",
    numberOfChildren: 50,
    teacherCount: 8,
    teacherChildRatio: 1 / 6,
    city: "Cape Town",
    contactNumber: "021-555-0126",
    ageRange: "3 months - 6 years",
    operatingHours: "06:30 - 17:30"
  },
  // Johannesburg
  {
    id: 5,
    name: "Little Stars Daycare",
    location: { lat: -26.204, lng: 28.047 },
    address: "22 Melville Street, Johannesburg Central",
    numberOfChildren: 30,
    teacherCount: 4,
    teacherChildRatio: 1 / 7,
    city: "Johannesburg",
    contactNumber: "011-555-0123",
    ageRange: "2 - 6 years",
    operatingHours: "07:00 - 18:00"
  },
  {
    id: 6,
    name: "Rainbow Kids Academy",
    location: { lat: -26.191, lng: 28.041 },
    address: "88 Oxford Road, Rosebank, Johannesburg",
    numberOfChildren: 50,
    teacherCount: 7,
    teacherChildRatio: 1 / 8,
    city: "Johannesburg",
    contactNumber: "011-555-0124",
    ageRange: "6 months - 6 years",
    operatingHours: "06:30 - 17:00"
  },
  {
    id: 7,
    name: "Little Dreamers Creche",
    location: { lat: -26.202, lng: 28.039 },
    address: "34 Sandton Drive, Sandton, Johannesburg",
    numberOfChildren: 45,
    teacherCount: 6,
    teacherChildRatio: 1 / 7,
    city: "Johannesburg",
    contactNumber: "011-555-0125",
    ageRange: "1 - 5 years",
    operatingHours: "07:30 - 17:30"
  },
  // Durban
  {
    id: 8,
    name: "Durban Kids Academy",
    location: { lat: -29.858, lng: 31.025 },
    address: "78 Marine Parade, Durban Central",
    numberOfChildren: 50,
    teacherCount: 7,
    teacherChildRatio: 1 / 7,
    city: "Durban",
    contactNumber: "031-555-0125",
    ageRange: "6 months - 6 years",
    operatingHours: "07:00 - 18:00"
  },
  {
    id: 9,
    name: "Happy Feet Daycare",
    location: { lat: -29.841, lng: 31.021 },
    address: "23 Umbilo Road, Durban North",
    numberOfChildren: 40,
    teacherCount: 6,
    teacherChildRatio: 1 / 6,
    city: "Durban",
    contactNumber: "031-555-0126",
    ageRange: "2 - 5 years",
    operatingHours: "06:30 - 17:00"
  },
  // Pretoria
  {
    id: 10,
    name: "Pretoria Daycare Centre",
    location: { lat: -25.746, lng: 28.188 },
    address: "12 Church Street, Pretoria Central",
    numberOfChildren: 45,
    teacherCount: 5,
    teacherChildRatio: 1 / 9,
    city: "Pretoria",
    contactNumber: "012-555-0123",
    ageRange: "3 months - 5 years",
    operatingHours: "07:00 - 18:00"
  },
];
