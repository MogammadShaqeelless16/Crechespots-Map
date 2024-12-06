import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (location: string) => void;
}

const southAfricanCities = [
  'Cape Town',
  'Johannesburg',
  'Durban',
  'Pretoria',
  'Port Elizabeth',
  'Bloemfontein',
  'East London',
  'Kimberley',
  'Polokwane',
  'Nelspruit'
];

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="w-full mb-6">
      <div className="relative">
        <select
          onChange={(e) => onSearch(e.target.value)}
          className="w-full p-3 pl-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a city</option>
          {southAfricanCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}