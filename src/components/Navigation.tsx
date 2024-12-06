import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Map, BarChart2, Calendar , Trees} from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Map className="w-4 h-4 mr-2" />
              Map View
            </Link>
            <Link
              to="/analytics"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/analytics' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BarChart2 className="w-4 h-4 mr-2" />
              Analytics
            </Link>
            <Link
              to="/events"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/events' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Events
            </Link>
            <Link
              to="/playgrounds"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/playgrounds' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Trees className="w-4 h-4 mr-2" />
              Playgrounds
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}