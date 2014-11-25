var express = require('express');

var ApiBridge = function(aRegistry) {
  this.mRegistry = aRegistry;
  //this.buildRouter();
};

ApiBridge.prototype.buildRouter = function() {
  this.mRouter = express.Router();
  var self = this;
  var routes = this.mRegistry.versions('v1.0.0').getRoutes();
  routes.forEach(function(route, i) {
    self.mRouter[route.method](route.path, route.callback);
  });
  return this.mRouter;
}

ApiBridge.prototype.getHandler = function() {
  var self = this;
  return function(req, res, next) {
    self.handle(req, res, next);
  };

  //return this.handle.bind(this);
};

ApiBridge.prototype.handle = function(req, res, next) {
  var urlPieces = req.url.replace(/^\/+/, '').split('/');
  var apiVersion = urlPieces[0];
  if (this.mRegistry.hasVersion(apiVersion)) {
    req.url = req.url.substring(apiVersion.length + 1);
    this.buildRouter().handle(req, res, next);
  }
  else {
    next();
  }
};

module.exports = ApiBridge;
