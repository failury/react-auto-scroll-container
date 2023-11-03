import { useState } from "react";
import "./App.css";
import { AutoScrollContainer } from "./react-auto-scroll-container/react-auto-scroll-container";
function App() {
  const [content, setContent] = useState<string>("");

  const handleStart = () => {
    let count = 0;
    const interval = setInterval(() => {
      setContent(
        (prev) =>
          prev +
          "import { AutoScrollContainer } from './AutoScrollContainer';import { AutoScrollContainer } from './AutoScrollContainer';import { AutoScrollContainer } from './AutoScrollContainer';"
      );

      count++;

      if (count === 200) {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Hello!</h1>
      <p>Start editing to see some magic happen :</p>
      <button onClick={handleStart}>Start</button>
      <AutoScrollContainer
        percentageThreshold={10}
        behavior="smooth"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "100%",
          height: "400px",
          border: "1px solid black",
        }}
      >
        <p>{content}</p>
      </AutoScrollContainer>
    </div>
  );
}

export default App;
