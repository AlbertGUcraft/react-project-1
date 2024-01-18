import { useState, lazy, Suspense } from 'react';

import '../index.css';
const MousePositionComponent = lazy(() => import('./MousePositionComponent'));
const InputComponent = lazy(() => import('./InputComponent'));

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
