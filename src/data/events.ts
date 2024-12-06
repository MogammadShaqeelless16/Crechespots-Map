import { Event } from '../types/event';

export const events: Event[] = [
  {
    id: 1,
    title: "Kids Art Workshop",
    description: "A fun-filled art workshop where children can explore their creativity through painting and drawing.",
    date: "2024-03-25",
    time: "14:00 - 16:00",
    location: {
      lat: -33.915,
      lng: 18.423,
      address: "Creative Space, 45 Bree Street, Cape Town"
    },
    category: "workshop",
    ageRange: "5-12 years",
    price: "R150",
    capacity: 20,
    registeredCount: 12
  },
  {
    id: 2,
    title: "Mini Scientists Day",
    description: "Interactive science experiments and demonstrations for curious young minds.",
    date: "2024-03-27",
    time: "10:00 - 12:00",
    location: {
      lat: -33.932,
      lng: 18.457,
      address: "Science Center, 12 Main Road, Observatory, Cape Town"
    },
    category: "workshop",
    ageRange: "7-13 years",
    price: "R200",
    capacity: 15,
    registeredCount: 8
  },
  {
    id: 3,
    title: "Kids Dance Party",
    description: "A high-energy dance party with professional instructors teaching fun dance moves.",
    date: "2024-03-30",
    time: "15:00 - 17:00",
    location: {
      lat: -29.858,
      lng: 31.025,
      address: "Dance Studio, 78 Marine Parade, Durban"
    },
    category: "activity",
    ageRange: "4-12 years",
    price: "R100",
    capacity: 30,
    registeredCount: 22
  }
];