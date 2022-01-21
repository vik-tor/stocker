import _ from 'lodash';
import server from '../utils/server';
import { auth } from '../utils/auth_header';

const fetchDevices = async () => {
  let res = await server.get('/devices');
  return res.data;
};

const fetchDevice = async (id) => {
  let res = await server.get(`/devices/${id}`);
  return res.data;
};

export { fetchDevices, fetchDevice };
