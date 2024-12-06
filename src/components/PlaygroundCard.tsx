import React, { useState } from 'react';
import { Star, AlertTriangle, MessageSquare } from 'lucide-react';
import { Playground, MaintenanceReport } from '../types/playground';

interface PlaygroundCardProps {
  playground: Playground;
  onRate: (id: number, rating: number, comment: string) => void;
  onReportMaintenance: (id: number, report: Omit<MaintenanceReport, 'id' | 'status' | 'dateReported'>) => void;
}

export default function PlaygroundCard({ playground, onRate, onReportMaintenance }: PlaygroundCardProps) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [maintenanceDescription, setMaintenanceDescription] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showMaintenanceForm, setShowMaintenanceForm] = useState(false);

  const handleSubmitReview = () => {
    if (rating > 0) {
      onRate(playground.id, rating, comment);
      setComment('');
      setRating(0);
      setShowReviewForm(false);
    }
  };

  const handleSubmitMaintenance = () => {
    if (maintenanceDescription) {
      onReportMaintenance(playground.id, {
        issue: 'Maintenance Required',
        description: maintenanceDescription
      });
      setMaintenanceDescription('');
      setShowMaintenanceForm(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{playground.name}</h3>
        <p className="text-gray-600 mb-4">{playground.description}</p>
        
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 ${
                playground.rating >= star ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-gray-600">({playground.reviews.length} reviews)</span>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600">Age Range: {playground.ageRange}</p>
          <p className="text-sm text-gray-600">Address: {playground.address}</p>
          <div className="flex flex-wrap gap-2">
            {playground.facilities.map((facility, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {facility}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <MessageSquare className="w-4 h-4" />
            Add Review
          </button>
          <button
            onClick={() => setShowMaintenanceForm(!showMaintenanceForm)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            <AlertTriangle className="w-4 h-4" />
            Report Issue
          </button>
        </div>

        {showReviewForm && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 cursor-pointer ${
                    rating >= star ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review..."
              className="w-full p-2 border rounded-lg mb-2"
              rows={3}
            />
            <button
              onClick={handleSubmitReview}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit Review
            </button>
          </div>
        )}

        {showMaintenanceForm && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <textarea
              value={maintenanceDescription}
              onChange={(e) => setMaintenanceDescription(e.target.value)}
              placeholder="Describe the maintenance issue..."
              className="w-full p-2 border rounded-lg mb-2"
              rows={3}
            />
            <button
              onClick={handleSubmitMaintenance}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Submit Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
}