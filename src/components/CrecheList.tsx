import React from 'react';
import { Creche } from '../types/creche';
import { Users, Clock, Phone, CheckCircle, XCircle } from 'lucide-react';
import ApplyButton from './ApplyButton';

interface CrecheListProps {
  creches: Creche[];
  onCrecheSelect: (creche: Creche) => void;
  selectedCreche: Creche | null;
  onApply: (crecheId: number) => void;
}

export default function CrecheList({ creches, onCrecheSelect, selectedCreche, onApply }: CrecheListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-h-[600px] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Creches & Daycare Centers</h2>
      <div className="space-y-4">
        {creches.map((creche) => (
          <div
            key={creche.id}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedCreche?.id === creche.id
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => onCrecheSelect(creche)}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg">{creche.name}</h3>
              {creche.isRegistered ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
            <p className="text-gray-600 text-sm">{creche.address}</p>
            <div className="mt-2 space-y-1">
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                <span>Children: {creche.numberOfChildren} | Ratio: 1:{Math.round(1/creche.teacherChildRatio)}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>{creche.operatingHours}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>{creche.contactNumber}</span>
              </div>
            </div>
            <ApplyButton crecheId={creche.id} onApply={onApply} />
          </div>
        ))}
      </div>
    </div>
  );
}