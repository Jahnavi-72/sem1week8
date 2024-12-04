import React from "react";

function App() {
  return (
    <div className="flex p-6 bg-gray-100 min-h-screen">
      {/* Larger Column */}
      <div className="flex-3 bg-blue-500 text-white p-6 rounded-md">
        <h2 className="text-xl font-bold">Larger Column</h2>
        <p>This column takes up more space in the layout compared to the smaller column.</p>
      </div>

      {/* Smaller Column */}
      <div className="flex-1 bg-green-500 text-white p-6 rounded-md ml-4">
        <h2 className="text-xl font-bold">Smaller Column</h2>
        <p>This column takes up less space and provides supporting content.</p>
      </div>
    </div>
  );
}

export default App;
