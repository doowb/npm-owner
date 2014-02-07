
var dirname = require('dirname');
var _ = require('lodash');

var formatters = require('./formatters');
var github = require('./github');
var npm = require('./npm');

var callerRoot = dirname(process.cwd());

module.exports = {

	npm: npm,
	github: github,

	list: function (formatter) {

		formatter = formatters[(formatter || 'cli-table')];

		var npmOwners = npm.list() || [];
		var githubOwners = github.list() || [];
		var owners = _.union(npmOwners, githubOwners);

		return formatter.format(owners, githubOwners, npmOwners);
	},

	add: function (owner, source) {
		source = source || 'npm';
		switch (source.toLowerCase()) {
			case 'npm':
				return npm.add(owner);

			case 'github':
				return github.add(owner);

			case 'both':
				return npm.add(owner) && github.add(owner);
		}

		return false;
	}

};