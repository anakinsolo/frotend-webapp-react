import axios from 'axios';

const BASE_URI = 'http://fixably.local/';

const get = async (location) => {
  let res = await axios.get(`${BASE_URI}${location}`);
  return res.data;
};

export default { get };