var assert = require('should');
var ApiService = require('..').Registry;

describe('api_service', function()
{
  describe('#get', function()
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
      manager.getRoutes()[0].method.should.equal('get');
    })
  })
describe('#post', function()
{
  it('should return true if method is post', function()
  {
    var api = new ApiService();
    var manager = api.versions('v1');
    manager.post('/carrier/match',
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
    manager.getRoutes()[0].method.should.equal('post');
  })
})
describe('#put', function()
{
  it('should return true if method is put', function()
  {
    var api = new ApiService();
    var manager = api.versions('v1');
    manager.put('/carrier/match',
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
    manager.getRoutes()[0].method.should.equal('put');
  })
})
describe('#patch', function()
{
  it('should return true if method is patch', function()
  {
    var api = new ApiService();
    var manager = api.versions('v1');
    manager.patch('/carrier/match',
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
    manager.getRoutes()[0].method.should.equal('patch');
  })
})
describe('#delete', function()
{
  it('should return true if method is delete', function()
  {
    var api = new ApiService();
    var manager = api.versions('v1');
    manager.delete('/carrier/match',
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
    manager.getRoutes()[0].method.should.equal('delete');
  })
})
});
