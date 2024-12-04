import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Tailwind CSS Cards
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Card 1"
          description="This is a description for the first card. It can be a blog post summary or some other info."
          imageUrl="https://via.placeholder.com/300x200"
          onClick={() => alert('Card 1 clicked')}
        />
        <Card
          title="Card 2"
          description="This is a description for the second card. It can be a product summary or some other info."
          imageUrl="https://via.placeholder.com/300x200"
          onClick={() => alert('Card 2 clicked')}
        />
        <Card
          title="Card 3"
          description="This is a description for the third card. It can be an event summary or any other content."
          imageUrl="https://via.placeholder.com/300x200"
          onClick={() => alert('Card 3 clicked')}
        />
      </div>
    </div>
  );
}

export default App;
