import { useReducer } from 'react';

import findMedian from './api';

import FindMedian from './components/FindMedian';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA':
      return { err: false, loading: false, data: action.data };
    case 'LOADING':
      return { ...state, loading: true };
    case 'ERROR':
      return { ...state, err: true, message: action.message, loading: false };
    default:
      throw new Error('Invalid action type');
  }
};

export default function App() {
  const [{ data, err, message, loading }, dispatch] = useReducer(reducer, {
    data: null,
    err: false,
    message: '',
    loading: false,
  });

  const handleSubmit = (e, n) => {
    e.preventDefault();
    dispatch({ type: 'LOADING' });
    findMedian(n)
      .then(({ data, err }) => {
        if (err) {
          dispatch({ type: 'ERROR', message: err });
          return;
        }
        dispatch({ type: 'DATA', data });
      })
      .catch((err) => dispatch({ type: 'ERROR', message: err.message }));
  };

  return (
    <div>
      <FindMedian onSubmit={handleSubmit} loading={loading} />
      {loading && <p>Loading...</p>}
      {err && <p>{message}</p>}
      {data && <p>{data}</p>}
    </div>
  );
}
