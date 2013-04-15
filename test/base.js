// Include NGN (locally)
var assert = require('assert'),
    path = require('path'),
    port = 3000;

UTIL.testing = true;

/**
 * Make sure the NGN Utilities namespace is available.
 */
suite('IDK HTTP Web Sanity Test', function(){

  var lib = null,
      client = null;

  // Basic Sanity Tests
  test('NGN.http.ApiServer exists.', function(){
    assert.ok(NGN.http.ApiServer !== undefined,'NGN.http.ApiServer load failure.');
  });

  // Make sure the classes instantiate
  test('new NGN.http.WebServer() constructed.', function(done){
    var ws = new NGN.http.ApiServer({
      port: port,
      routes: 'test/routes',
      autoStart: false
    });
    assert.ok(ws !== undefined,'Could not create new NGN.http.ApiServer()');

    ws.on('ready',function(){
      /*client.GET('http://localhost:'+port+'/test',function(err,res,body){
        assert.ok(body == 'Basic Test');
        done();
      });*/
     done()
    });

    ws.start();
  });
});