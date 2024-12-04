import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-brand-light text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-brand-dark text-white p-6 rounded-b-4xl shadow-deep">
        <h1 className="text-3xl font-heading">Welcome to Tailwind Customization</h1>
        <p className="mt-2 text-accent-light">
          Explore custom colors, fonts, spacing, and more!
        </p>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-heading mb-4">Custom Spacing and Colors</h2>
          <div className="bg-accent-light p-72 rounded-pill shadow-glow">
            <p className="text-accent-dark">This box demonstrates custom spacing and shadows.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-heading mb-4">Custom Fonts and Radius</h2>
          <button className="bg-brand hover:bg-brand-dark text-white font-sans py-2 px-6 rounded-4xl shadow-deep transition-all duration-300">
            Click Me
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
