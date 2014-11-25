var ApiManager = function() {
  this.mRoutes = [];
};

ApiManager.prototype.add = function(aMethod, aPath, aSpecification, aAction) {
  this.mRoutes.push(
    {
      method:aMethod,
      path:aPath,
      spec:aSpecification,
      callback: aAction
    }
  );
};

ApiManager.prototype.get = function(aPath, aSpecification, aAction) {
  this.add('get', aPath, aSpecification, aAction);
};

ApiManager.prototype.post = function(aPath, aSpecification, aAction) {
  this.add('post', aPath, aSpecification, aAction);
};

ApiManager.prototype.put = function(aPath, aSpecification, aAction) {
  this.add('put', aPath, aSpecification, aAction);
};

ApiManager.prototype.patch = function(aPath, aSpecification, aAction) {
  this.add('patch', aPath, aSpecification, aAction);
};

ApiManager.prototype.delete = function(aPath, aSpecification, aAction) {
  this.add('delete', aPath, aSpecification, aAction);
};

ApiManager.prototype.getRoutes = function() {
  return this.mRoutes;
};

module.exports = ApiManager;
