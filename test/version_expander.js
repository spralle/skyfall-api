var assert = require('should');
var VersionExpander = require('../lib/version_expander');
var version = new VersionExpander();

describe('version_expander', function()
{
  describe('#expand', function(){
    it('should expand with only major version', function()
    {
      var result = version.expand('v1');
      result.should.equal('v1.0.0');
    })
    it('should expand with major.minor version', function()
    {
      var result = version.expand('v1.1');
      result.should.equal('v1.1.0');
    })
    it('should not expand with major.minor.patch version', function()
    {
      var result = version.expand('v1.1.9');
      result.should.equal('v1.1.9');
    })
    it('should not expand with major.minor.patch.something version', function()
    {
      var result = version.expand('v1.1.9.alpha');
      result.should.equal('v1.1.9.alpha');
    })
  })
});
