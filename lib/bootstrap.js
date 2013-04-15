global.NGN = {};
module.exports = function(ngn){
  NGN = ngn;

  var http = NGN.http || {};

  http.ApiServer = require('./ApiServer');

  return {http:http};
};