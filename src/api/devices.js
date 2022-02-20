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

const fetchProcessors = async () => {
  let processors = [
    {
      id: 1,
      brand: "intel",
      model: "celeron"
    },
    {
      id: 2,
      brand: "intel",
      model: "pentium"
    },
    {
      id: 3,
      brand: "intel",
      model: "core i3"
    },
    {
      id: 4,
      brand: "intel",
      model: "core i5"
    },
    {
      id: 5,
      brand: "intel",
      model: "core i7"
    },
    {
      id: 6,
      brand: "amd",
      model: "a10"
    },
  ];
  return processors;
};

export { fetchDevices, fetchDevice, fetchProcessors };
