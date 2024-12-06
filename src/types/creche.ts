export interface Creche {
  id: number;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  numberOfChildren: number;
  teacherCount: number;
  teacherChildRatio: number;
  city: string;
  contactNumber: string;
  ageRange: string;
  operatingHours: string;
  isRegistered: boolean;
  applicationStatus?: 'pending' | 'approved' | 'rejected';
}