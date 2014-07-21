"use strict";
(function(){
// an ECMAScript Harmony const holds a Node.js module called fs for file-system module...
const fs = require('fs');
fs.watch('target.txt', function() {
	console.log("File 'target.txt' just changed...");
	console.log("You're a badass dude!");
});
console.log("Node.js is watching 'target.txt' for alterations...");
// call with: node --harmony watcher.js (from the terminal)...
// 1. Node interprets this file...
// 2. There's more to do b/c of the call to 'watch'...
// 3. Node waits for a change on the 'target.txt' file to occur...
// 4. The callback function is executed once the change to 'target.txt' has been detected...
// 5. Node will continue to wait b/c changes to 'target.txt' could be made, it must be terminated...
}());