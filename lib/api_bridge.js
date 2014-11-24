var ApiBridge = function(aRegistry)
{
  this.mRegistry = aRegistry;
};

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
