const axios = require('axios');
const ErrorsManager = require('../Client/ErrorsManager/index');

async function check(id, token) {
  const apiUrl = 'http://panel.myheberg.cloud:2003';
  const url = `${apiUrl}/check/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token
      }
    });

    if (!response.data.isUnsafe) {
      throw new Error("Invalid API response");
    }

    return response.data.isUnsafe;
  } catch (error) {
    ErrorsManager.handle(error);
  }
}

module.exports = check;