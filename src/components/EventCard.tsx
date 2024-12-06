import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Event } from '../types/event';

interface EventCardProps {
  event: Event;
  onRegister: (eventId: number) => void;
}

export default function EventCard({ event, onRegister }: EventCardProps) {
  const spotsLeft = event.capacity - event.registeredCount;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`p-4 ${
        event.category === 'workshop' ? 'bg-blue-50' :
        event.category === 'activity' ? 'bg-green-50' :
        event.category === 'camp' ? 'bg-yellow-50' : 'bg-purple-50'
      }`}>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600">{event.description}</p>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{event.time}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location.address}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span>{spotsLeft} spots left</span>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">{event.price}</span>
          <button
            onClick={() => onRegister(event.id)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            disabled={spotsLeft === 0}
          >
            {spotsLeft === 0 ? 'Fully Booked' : 'Register Now'}
          </button>
        </div>
      </div>
    </div>
  );
}