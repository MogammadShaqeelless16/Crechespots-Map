export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  category: 'workshop' | 'activity' | 'camp' | 'performance';
  ageRange: string;
  price: string;
  capacity: number;
  registeredCount: number;
}