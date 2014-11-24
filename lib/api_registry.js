//var semver = require('semver');
var VersionExpander = require('./version_expander');
var DefaultApiManagerFactory = require('./default_api_manager_factory');
var parameterTypes = require('./parameter_types');

var ApiRegistry = function(aApiManagerFactory, aVersionExpander)
{
  this.mVersions = {};
  this.mApiManagerFactory = aApiManagerFactory || DefaultApiManagerFactory;
  this.mVersionExpander = aVersionExpander || new VersionExpander();
};

ApiRegistry.prototype.hasVersion = function(aVersion)
{
  var versionKey = this.mVersionExpander.expand(aVersion);
  var version = this.mVersions[versionKey];
  if(typeof(version) === 'undefined')
  {
    return false;
  }
  else
  {
    return true;
  }
};

ApiRegistry.prototype.versions = function(aVersion)
{
  var versionKey = this.mVersionExpander.expand(aVersion);
  var version = this.mVersions[versionKey];
  if(typeof(version) === 'undefined')
  {
    version = this.mApiManagerFactory();
    this.mVersions[versionKey] = version;
  }
  return version;
};

ApiRegistry.parameterTypes = parameterTypes;

module.exports = ApiRegistry;
