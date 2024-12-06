interface CityCoordinates {
  [key: string]: {
    lat: number;
    lng: number;
    zoom: number;
  };
}

export const cityCoordinates: CityCoordinates = {
  "Cape Town": { lat: -33.925, lng: 18.423, zoom: 12 },
  "Johannesburg": { lat: -26.204, lng: 28.045, zoom: 12 },
  "Durban": { lat: -29.858, lng: 31.025, zoom: 12 },
  "Pretoria": { lat: -25.747, lng: 28.229, zoom: 12 },
  "Port Elizabeth": { lat: -33.960, lng: 25.602, zoom: 12 },
  "Bloemfontein": { lat: -29.085, lng: 26.159, zoom: 12 },
  "East London": { lat: -33.019, lng: 27.915, zoom: 12 },
  "Kimberley": { lat: -28.732, lng: 24.762, zoom: 12 },
  "Polokwane": { lat: -23.904, lng: 29.468, zoom: 12 },
  "Nelspruit": { lat: -25.465, lng: 30.985, zoom: 12 }
};