// (function(){

	const fs = require('fs'),
	// arguement vector...
	// [node, /Users/byrdannfox/jsHacker/file-system, watcher-argv.js]...
	filename = process.argv[2];
	if (!filename) {
		throw Error("It must be watching a file...");
	}
	fs.watch(filename, function () {
		console.log("File " + filename + " just changed!");
	});
	console.log("Now watching " + filename + " for changes...");

// }());