import _ from 'lodash';
import server from '../utils/server';
import { auth } from '../utils/auth_header';

const fetchSales = async () => {
  let res = await server.get('/sales');
  return res.data;
};

const fetchSale = async (id) => {
  let res = await server.get(`/sales/${id}`);
  return res.data;
};

export { fetchSale, fetchSales };
