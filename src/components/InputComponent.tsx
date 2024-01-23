import { useRef, useState, ChangeEvent } from 'react';

const InputComponent = () => {
  const ref = useRef<number>(0);
  const [count, setCount] = useState<string | number>(0);

  console.info(count);

  return (
    <div className="renderCounter">
      <h2>Count is: {(ref.current = ref.current + 1)}</h2>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setCount(e.target.value);
        }}
        type="text"
        name=""
        placeholder="rendercounter"
      />
    </div>
  );
};

export default InputComponent;
