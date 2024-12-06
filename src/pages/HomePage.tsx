import React, { useState } from 'react';
import { creches } from '../data/creches';
import { Creche } from '../types/creche';
import Map from '../components/Map';
import CrecheList from '../components/CrecheList';
import SearchBar from '../components/SearchBar';

export default function HomePage() {
  const [selectedCreche, setSelectedCreche] = useState<Creche | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [filteredCreches, setFilteredCreches] = useState(creches);

  const handleSearch = (city: string) => {
    setSelectedCity(city);
    
    if (!city) {
      setFilteredCreches(creches);
      setSelectedCreche(null);
      return;
    }
    
    const filtered = creches.filter(creche => 
      creche.city.toLowerCase() === city.toLowerCase()
    );
    setFilteredCreches(filtered);
    
    if (filtered.length > 0) {
      setSelectedCreche(filtered[0]);
    }
  };

  const handleApply = (crecheId: number) => {
    // In a real application, this would make an API call
    alert(`Application submitted for creche ID: ${crecheId}`);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1">
          <SearchBar onSearch={handleSearch} />
          <div className="lg:col-span-2">
          <Map 
            creches={filteredCreches} 
            selectedCreche={selectedCreche}
            selectedCity={selectedCity}
          />
        </div>
          <CrecheList
            creches={filteredCreches}
            onCrecheSelect={setSelectedCreche}
            selectedCreche={selectedCreche}
            onApply={handleApply}
          />
        </div>

      </div>
    </div>
  );
}