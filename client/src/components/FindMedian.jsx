import { useState } from 'react';

export default function FindMedian({ onSubmit }) {
  const [n, setN] = useState('');

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, n)}>
        <input type="text" value={n} onChange={(e) => setN(e.target.value)} />
        <button type="submit">Find Median</button>
      </form>
    </div>
  );
}
