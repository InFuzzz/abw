const axios = require('axios');
const ErrorsManager = require('../Client/Errors/index');

async function check(id, token) {
  try {
    const response = await axios.get(`http://panel.myheberg.cloud:2004/check/${id}`, {
      headers: {
        Authorization: token
      }
    });

    if (response.data.isUnsafe !== true && response.data.isUnsafe !== false) {
      throw new Error("Invalid API response");
    }

    return response.data.isUnsafe;
  } catch (error) {
    ErrorsManager.handle(error);
  }
}

module.exports = check;