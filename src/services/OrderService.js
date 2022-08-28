import axios from 'axios';
import qs from 'qs';

const BASE_URI = process.env.REACT_APP_BASE_BACKEND_URI;

const get = async (location) => {
  let res = await axios.get(`${BASE_URI}${location}`);
  return res.data;
};


const post = async (location, data) => {
  const config = {
    headers: { 'Content-Type': ' application/x-www-form-urlencoded' }
  };

  let res = await axios.post(`${BASE_URI}${location}`, qs.stringify(data), config);
  return res.data;
};

export default { get, post };