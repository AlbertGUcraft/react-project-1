import React, { useState, useEffect } from 'react';

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

export default MousePositionComponent;
