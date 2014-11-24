var assert = require('should');
var ApiService = require('..').Registry;
describe('api_service', function()
{
  describe('#hasVersion', function()
  {
    it('should return false if version do not exist', function()
    {
      var api = new ApiService();
      api.hasVersion('v1').should.be.false;
    })

    it('should return true if version do exist', function()
    {
      var api = new ApiService(function() { return {}});
      var version = api.versions('v1');
      api.hasVersion('v1').should.be.true;
    })
  })

  describe('#version', function()
  {
    it('should return version object', function()
    {
      var result = { itsMe: true};
      var api = new ApiService(function() { return result});
      var version = api.versions('v1');
      result.should.equal(version);
    })

    it('should call factory if version do not exist', function()
    {
      var factoryCalled = 0;
      var api = new ApiService(function() { factoryCalled++; return {}});
      api.versions('v1');
      factoryCalled.should.equal(1);
    })

    it('should call factory only once for a version', function()
    {
      var factoryCalled = 0;
      var api = new ApiService(function() { factoryCalled++; return {}});
      api.versions('v1');
      factoryCalled.should.equal(1);
      api.versions('v1');
      factoryCalled.should.equal(1);
    })

    it('should return different objects for different versions', function()
    {
      var factoryCalled = 0;
      var api = new ApiService(function() { factoryCalled++; return {version:factoryCalled}});

      var ver1 = api.versions('v1');
      var ver2 = api.versions('v2');
      ver1.should.not.equal(ver2);
    })

    it('should return same object for same version', function()
    {
      var factoryCalled = 0;
      var api = new ApiService(function() { factoryCalled++; return {version:factoryCalled}});

      var ver1 = api.versions('v1');
      var ver1_2 = api.versions('v1');
      ver1.should.be.equal(ver1_2);
    })
  })

});
