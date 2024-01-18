import { useRef, useState } from 'react';

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

export default InputComponent;
