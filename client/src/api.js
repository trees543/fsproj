import axios from 'axios';

export default async function findMedian(n) {
  try {
    const { data } = await axios.post('http://localhot:3001', { n });
    return {
      data: data.payload,
      err: data.err,
    };
  } catch (err) {
    return {
      data: null,
      err: err.message,
    };
  }
}
