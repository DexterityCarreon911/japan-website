import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-700 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-japanese-red rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-japanese-red rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-japanese-red rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-japanese-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
      <p className="text-gray-300 text-sm">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
