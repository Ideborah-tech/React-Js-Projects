//Use state hook
import React, { useState } from 'react';

const Counter: React.FC = () => {
  //const [state, setState] = useState(initialState);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => count===0?0:setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
//const [state, dispatch] = useReducer(reducer, initialState);