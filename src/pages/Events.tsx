import React from 'react';
import { events } from '../data/events';
import EventCard from '../components/EventCard';

export default function Events() {
  const handleRegister = (eventId: number) => {
    alert(`Registration submitted for event ID: ${eventId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Children's Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onRegister={handleRegister}
          />
        ))}
      </div>
    </div>
  );
}