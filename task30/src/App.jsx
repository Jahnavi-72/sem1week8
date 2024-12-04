import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {/* Hover Animation */}
      <div className="w-64 h-64 bg-yellow-500 rounded-lg p-6 text-white text-center flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl animate-fadeIn">
        <div>
          <h2 className="text-xl font-bold">Hover Over Me</h2>
          <p className="text-sm">I grow and shadow when hovered.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
