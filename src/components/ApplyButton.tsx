import React from 'react';
import { Send } from 'lucide-react';

interface ApplyButtonProps {
  crecheId: number;
  onApply: (crecheId: number) => void;
}

export default function ApplyButton({ crecheId, onApply }: ApplyButtonProps) {
  return (
    <button
      onClick={() => onApply(crecheId)}
      className="mt-2 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
    >
      <Send className="w-4 h-4" />
      Apply Now
    </button>
  );
}