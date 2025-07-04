import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {
  const [flag , setflaf] = useState(false)
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button onClick={()=> setflaf(!flag)} data-testid="toggle-btn">{flag ? "Show Fictional Books" :"Show Non-Fictional Books"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {!flag ? <Fiction /> : <NonFiction />}
      </div>
    </div>
  );
}

export default App;
