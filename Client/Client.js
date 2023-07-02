const check = require('../Methods/Check');

class AbwClient {
  constructor({ token }) {
    this.token = token;
  }

  async check(id) {
    return await check(id, this.token);
  }
}

module.exports = AbwClient;