'use strict';

exports = module.exports = {
  name: require ('./package').name
};

exports.deploy = require ('./lib/');