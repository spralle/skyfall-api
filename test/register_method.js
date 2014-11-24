var assert = require('should');
var ApiService = require('..').Registry;

describe('api_service', function()
{
  describe('#registerMethod', function()
  {
    it('should return true if method registered', function()
    {
      var api = new ApiService();
      var manager = api.versions('v1');
      manager.get('/carrier/match',
      {
        description:"Match a carrier vs from and to location",
        summary:'Summary for carrier matching',
        type:'array',
        items:{$ref:'Party'},
        parameters:[
          ApiService.parameterTypes.query('from', 'From Address', 'string'),
          ApiService.parameterTypes.query('to', 'To Address', 'string')
        ]
      },
        function(req, res)
        {
          res.send('OK');
        }
      );
      manager.getRoutes()[0].path.should.equal('/carrier/match');
    })
  })
});
