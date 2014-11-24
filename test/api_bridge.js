var assert = require('should');
var express = require('express');
var request = require('supertest');


var Registry = require('..').Registry;
var Bridge = require('..').Bridge;

describe('api_bridge', function()
{
  it('should return 404 when no method exists', function(done)
  {
    var registry = new Registry();
    //add version but not method
    registry.versions('v1');
    var app = express();
    app.use('/api', new Bridge(registry).getHandler());
    request(app)
      .get('/api/v1/mytestmethod')
      .expect(404, done);
  });

  it('should return 200 when method exists', function(done)
  {
    var registry = new Registry();
    registry.versions('v1').get('/mytestmethod',
    {
      description:"Test Method",
      summary:"Summary of Test Method",
      type:'string',
      parameters:[]
    },
    function(req, res)
    {
      res.send('OK');
    });
    var app = express();
    app.use('/api', new Bridge(registry).getHandler());
    request(app)
      .get('/api/v1/mytestmethod')
      .expect(404, done);
  });


});
