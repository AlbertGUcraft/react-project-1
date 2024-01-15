import React, { useState, useEffect, useRef } from 'react';

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
  const ref = useRef(); // Move useRef inside the component
  const [count, setCount] = useState(0);
  const handleInputChange = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h2>Count is: {count}</h2>
      <input
        ref={ref} // Attach the ref to the input element
        onChange={handleInputChange}
        type="text"
        name=""
        id=""
        placeholder="rendercouneter"
      />
    </div>
  );
};

const Home = () => {
  const [showMousePosition, setShowMousePosition] = useState(false);
  const [rndCounter, setRndCounter] = useState(false);

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={() => setShowMousePosition(true)}>Show Mouse Position</button>

      {showMousePosition && <MousePositionComponent />}
      <button onClick={() => setRndCounter(true)}>Render Counter1</button>
      {rndCounter && <InputComponent />}
    </div>
  );
};

export default Home;
