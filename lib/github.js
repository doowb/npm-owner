
var dirname = require('dirname');
var caller = dirname(process.cwd());
var pkg = {};

try {	pkg = require(caller('package.json')); }
catch (err) { }

module.exports = {

	list: function () {
		if (pkg.contributors) {
			return pkg.contributors;
		}
		return [];
	},

	add: function (owner) {
		return true;
	}

};