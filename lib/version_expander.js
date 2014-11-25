var VersionExpander = function() {

};

VersionExpander.prototype.expand = function(aVersion) {
  var dots = aVersion.match(/\./g);
  var count = dots != null ? dots.length : 0;
  var version = aVersion;
  //allow for users to specify 'v1' and change that to 'v1.0.0'
  for (var i = 0; i < 2 - count; i++) {
    version += '.0';
  }
  return version;
};

module.exports = VersionExpander;
