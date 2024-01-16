import React, { useState, useEffect, useRef } from 'react';
import '../index.css';
function useMouse() {
  const [mousePosition, setPosition] = useState({ x: null, y: null });

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({
        x: e.pageX,
        y: e.pageY
      });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}

const MousePositionComponent = () => {
  const { x, y } = useMouse();

  return (
    <div>
      <h3>Mouse Position</h3>
      <p>
        X: {x}, Y: {y}
      </p>
    </div>
  );
};

const InputComponent = () => {
  const ref = useRef(0); // Move useRef inside the component
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="renderCounter">
      <h2>Count is: {(ref.current = ref.current + 1)}</h2>
      <input
        onChange={(e) => {
          setCount(e.target.value);
        }}
        type="text"
        name=""
        placeholder="rendercouneter"
      />
    </div>
  );
};

const Home = () => {
  const [showMousePosition, setShowMousePosition] = useState(true);
  return (
    <div className="home">
      <div className="x">
        <h2>Home Page</h2>
        <button id="fchild" onClick={() => setShowMousePosition(true)}>
          Show Mouse Position
        </button>
        <button onClick={() => setShowMousePosition(false)}>Render Counter</button>
        {showMousePosition && <MousePositionComponent />}
        {!showMousePosition && <InputComponent />}
      </div>
    </div>
  );
};

export default Home;
