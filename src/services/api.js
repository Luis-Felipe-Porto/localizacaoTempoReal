import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/maurolcsilva/transactionsapi',
});

export default api;
