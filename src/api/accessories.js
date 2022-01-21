import _ from 'lodash';
import server from '../utils/server';
import { auth } from '../utils/auth_header';

const fetchAccessories = async () => {
  let res = await server.get('/accessories');
  return res.data;
};

const fetchAccessory = async (id) => {
  let res = await server.get(`/accessories/${id}`);
  return res.data;
};

export { fetchAccessories, fetchAccessory };
