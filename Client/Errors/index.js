const errorMessages = require('./Errors');

class ErrorsManager {
  static handle(error) {
    if (error.response && error.response.data && error.response.data.errorCode) {
      const errorCode = error.response.data.errorCode;
      if (errorMessages[errorCode]) {
        console.error(`[${errorCode}] : ${errorMessages[errorCode]}`);
        throw new Error(errorMessages[errorCode]);
      }
    }

    console.error(error);
    throw new Error("An unknown error occurred. Please contact a developper.");
  }
}

module.exports = ErrorsManager;