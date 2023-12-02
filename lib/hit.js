const axios = require('axios');
const packageData = require('../package.json');
const botVersion = packageData.version;

const hit = async () => {
  const postData = {
    version: botVersion,
  };
  try {
    const response = await axios.post('https://hit-counter.ananda1240.repl.co/post-version', postData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

module.exports = { hit };
