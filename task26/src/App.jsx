import React from "react";

function App() {
  return (
    <div className="prose lg:prose-xl max-w-3xl mx-auto p-6 bg-white">
      <h1>Understanding Tailwind Typography Plugin</h1>
      <p>
        The <strong>Tailwind Typography Plugin</strong> (also known as
        <em>tailwindcss-typography</em>) provides a set of utilities for styling
        long-form content like blog posts. It is designed to make typography
        easier to implement with great defaults while allowing for customization.
      </p>

      <h2>Why Use the Typography Plugin?</h2>
      <p>
        When you're writing a blog post or long-form content, readability is
        essential. The typography plugin provides utilities that format text in a
        way that improves legibility and consistency.
      </p>

      <ul>
        <li>Consistent line heights</li>
        <li>Better font sizes for readability</li>
        <li>Enhanced lists and paragraph styling</li>
      </ul>

      <h3>How to Customize Typography Styles</h3>
      <p>
        The default typography can be customized to suit your design needs.
        You can modify the font size, line height, colors, and more within
        the <code>tailwind.config.js</code> file.
      </p>

      <pre>
        <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            h1: {
              fontSize: '2.5rem',
              fontWeight: '700',
            },
            h2: {
              fontSize: '2rem',
              fontWeight: '600',
            },
            p: {
              lineHeight: '1.75',
            },
            ul: {
              listStyleType: 'disc',
              marginLeft: '1.5rem',
            },
            'code': {
              backgroundColor: '#f7f7f7',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.3rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};`}</code>
      </pre>
    </div>
  );
}

export default App;
