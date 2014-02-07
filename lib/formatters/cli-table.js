
var Table = require('cli-table');
var _ = require('lodash');

// symbols from mocha
var symbols = {
    ok: '✓',
    err: '✖'
};

if (process && process.platform === 'win32') {
	symbols.ok = '\u221A';
	symbols.err = '\u00D7';
}

module.exports = {
	format: function (owners, github, npm) {
		var table = new Table({
			head: ['Owner'.cyan, 'GitHub'.cyan, 'NPM'.cyan]
		});

		table.push.apply(table, 
			_.map(owners, function (owner) {
				var row = [];
				row.push(owner);
				row.push(_.contains(github, owner) ? symbols.ok.green : symbols.err.red);
				row.push(_.contains(npm, owner) ? symbols.ok.green : symbols.err.red);
				return row;
			}));

		return table.toString();
	}
};