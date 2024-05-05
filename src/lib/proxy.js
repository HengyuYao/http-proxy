const axios = require('axios');

const proxy = axios.create({
  baseURL: 'http://www.songshanlab.com',
  timeout: 3000
})
module.exports = proxy;
