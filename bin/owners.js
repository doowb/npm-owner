#!/usr/bin/env node

var dirname = require('dirname');
var root = dirname(__dirname + '/../');

var pkg = require(root('package.json'));
var program = require('commander');

program
	.version(pkg.version)
	.option('ls, list', 'List Owners')
	.option('sync [source]', 'Synchronize GitHub/NPM ownership from the source [github]')
	.option('add [owner] [source]', 'Add an owner to Github, NPM or both [npm]')
	.parse(process.argv);


var app = require(root());

if (program.list) {

	console.log(app.list());

} else if (program.sync) {
	
	console.log('do some syncing from ' + program.sync);

} else if (program.add) {
	
	console.log('do some adding of ' + program.add + ' from ' + program.args[0]);

} else {
	
	// nothing specified
	program.help();
	
}
