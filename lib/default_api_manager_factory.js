var ApiManager = require('./default_api_manager');

var ApiManagerFactory = function() {
  return new ApiManager();
};

module.exports = ApiManagerFactory;
