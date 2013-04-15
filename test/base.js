// Include NGN (locally)
var assert = require('assert'),
    path = require('path'),
    http = require('http'),
    port = 3000;

UTIL.testing = true;

suite('IDK API Sanity Test', function(){

  var lib = null;

  // Basic Sanity Tests
  test('NGN.http.ApiServer exists.', function(){
    assert.ok(NGN.http.ApiServer !== undefined,'NGN.http.ApiServer load failure.');
  });

  // Make sure the classes instantiate
  test('new NGN.http.WebServer() constructed.', function(done){
    var api = new NGN.http.ApiServer({
      port: port,
      routes: 'test/routes',
      autoStart: false
    });
    assert.ok(api !== undefined,'Could not create new NGN.http.ApiServer()');

    api.on('ready',function(){
      http.get('http://localhost:'+port+'/',function(res){
        var out = '';
        assert.ok(res.statusCode == 200);

        res.on("data", function(chunk) {
          out += chunk;
        });
        res.on('end',function(){
          assert.ok(JSON.parse(out).hello == 'Hello. I am root.');
          done();
        });
      });
    });

    api.start();
  });
});