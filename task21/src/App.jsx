// src/App.jsx
function App() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold">Sidebar</h2>
        <ul>
          <li className="mt-2">Menu Item 1</li>
          <li className="mt-2">Menu Item 2</li>
          <li className="mt-2">Menu Item 3</li>
        </ul>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-gray-900 text-white p-4">
          <h1 className="text-2xl font-bold">Header</h1>
        </header>

        <main className="flex-1 bg-gray-100 p-4">
          <h2 className="text-xl font-semibold">Content Area</h2>
          <p>Welcome to the app!</p>
        </main>
      </div>
    </div>
  );
}

export default App;

