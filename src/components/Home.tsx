import { useState, lazy, Suspense } from 'react';

import '../index.css';

const MousePositionComponent = lazy(() => import('./MousePositionComponent'));
const InputComponent = lazy(() => import('./InputComponent'));

const Home = () => {
  const [showMousePosition, setShowMousePosition] = useState(true);
  function x() {
    setShowMousePosition(false);
  }
  return (
    <div className="home">
      <div className="x">
        <h2>Home Page</h2>
        <button id="fchild" onClick={() => setShowMousePosition(true)}>
          Show Mouse Position
        </button>
        <button onClick={x}>Render Counter</button>
        {showMousePosition && (
          <Suspense fallback={<div>Loading...</div>}>
            <MousePositionComponent />
          </Suspense>
        )}
        {!showMousePosition && (
          <Suspense>
            <InputComponent />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Home;
