import React from 'react';
import { playgrounds } from '../data/playgrounds';
import PlaygroundCard from '../components/PlaygroundCard';
import Map from '../components/Map';

export default function Playgrounds() {
  const handleRate = (id: number, rating: number, comment: string) => {
    // In a real app, this would make an API call
    alert(`Rating submitted: ${rating} stars with comment: ${comment}`);
  };

  const handleReportMaintenance = (id: number, report: any) => {
    // In a real app, this would make an API call
    alert(`Maintenance report submitted: ${report.description}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Playgrounds & Parks</h1>
      
      <div className="mb-8">
        <Map playgrounds={playgrounds} creches={[]} selectedCreche={null} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playgrounds.map((playground) => (
          <PlaygroundCard
            key={playground.id}
            playground={playground}
            onRate={handleRate}
            onReportMaintenance={handleReportMaintenance}
          />
        ))}
      </div>
    </div>
  );
}