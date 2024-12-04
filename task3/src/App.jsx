import React, { useState } from "react";
import ResizeListener from "./ResizeListener";

// App component definition
const App = () => {
  const [showResizeListener, setShowResizeListener] = useState(true);

  // JSX for rendering
  return (
    <div>
      <button onClick={() => setShowResizeListener(!showResizeListener)}>
        {showResizeListener ? "Unmount Resize Listener" : "Mount Resize Listener"}
      </button>
      {showResizeListener && <ResizeListener />}
    </div>
  );
};

export default App;
