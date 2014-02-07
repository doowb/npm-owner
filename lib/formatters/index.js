
var dirname = require('dirname');
var _fs = require('fs-utils');
var _ = require('lodash');

var local = dirname(__dirname);
var formatters = module.exports = {};

var files = _fs.withExt(local(), 'js');

_.each(_.filter(files, function(file) { return file.indexOf('index.js') === -1 }),
	function (file) {
		var name = _fs.basename(file);
		formatters[name] = require(local(name));
	});