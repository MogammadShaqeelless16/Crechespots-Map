export interface Playground {
  id: number;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  description: string;
  facilities: string[];
  ageRange: string;
  rating: number;
  reviews: Review[];
  maintenanceReports: MaintenanceReport[];
}

export interface Review {
  id: number;
  userId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface MaintenanceReport {
  id: number;
  issue: string;
  status: 'pending' | 'in-progress' | 'resolved';
  dateReported: string;
  description: string;
}