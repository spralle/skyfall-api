var express = require('express');

var ApiBridge = function(aRegistry)
{
  this.mRegistry = aRegistry;
  this.buildRouter();
};

ApiBridge.prototype.buildRouter = function()
{
  this.mRouter = express.Router();
  for(var route in this.mRegistry.versions('v1.0.0').getRoutes())
  {
    //console.log(this.mRouter);
    this.mRouter.get(route.path, route.callback);
    //this.mRouter[route.method](
  }
}

ApiBridge.prototype.getHandler = function()
{
  var self = this;
  return function(req, res, next)
  {
    self.handle(req, res, next);
  };
};

ApiBridge.prototype.handle = function(req, res, next)
{
  var urlPieces = req.url.replace(/^\/+/, '').split('/');
  var apiVersion = urlPieces[0];
  if(this.mRegistry.hasVersion(apiVersion))
  {
      req.url = req.url.substring(apiVersion + 1);
      //todo implement...
      res.send(500);
      //this.versions(apiVersion).handle(req, res, next);
  }
  else
  {
    next();
  }
};


module.exports = ApiBridge;
