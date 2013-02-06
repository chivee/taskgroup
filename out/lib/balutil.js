// Generated by CoffeeScript 1.4.0
(function() {
  var balUtil, balUtilCompare, balUtilEvents, balUtilFlow, balUtilHTML, balUtilModules, balUtilPaths, balUtilTypes, key, subpackage, subpackages, value, _i, _len,
    __hasProp = {}.hasOwnProperty;

  balUtil = {};

  balUtilCompare = require('./compare.js');

  balUtilEvents = require('./events');

  balUtilFlow = require('./flow');

  balUtilHTML = require('./html');

  balUtilModules = require('./modules');

  balUtilPaths = require('./paths');

  balUtilTypes = require('./types');

  subpackages = [balUtilCompare, balUtilEvents, balUtilFlow, balUtilHTML, balUtilModules, balUtilPaths, balUtilTypes];

  for (_i = 0, _len = subpackages.length; _i < _len; _i++) {
    subpackage = subpackages[_i];
    for (key in subpackage) {
      if (!__hasProp.call(subpackage, key)) continue;
      value = subpackage[key];
      balUtil[key] = value;
    }
  }

  module.exports = balUtil;

}).call(this);
