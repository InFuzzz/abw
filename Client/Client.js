const check = require('../Routes/Check');

class Client {
  constructor({ token }) {
    this.token = token;
  }

  async check(id) {
    return await check(id, this.token);
  }
}

module.exports = { 
  Client
};
