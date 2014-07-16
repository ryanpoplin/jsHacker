(function(){
	console.log("Log this string literal to the console via Node terminal or a Browser console...");
	console.log('poplin' === new String('poplin'));
	console.log('poplin' === new String('poplin').toString());
	console.log('poplin' == new String('poplin'));
	var testObj = {
		propOne: "Property One...",
		propTwo: {
			innerPropOne: {

			}
		},
		propThree: [{
			innerPropTwo: {
				innerPropFour: "Hello..."
			},
			innerPropThree: {
				innerPropFive: "Person..."
			},
		}, {
			wordUp: "Complex???"
		}]
	};
	console.log(testObj);
	var testObjTwo = function () {
		// special features of the function object...
		// this...
		this.propOne = "Property One...",
		this.propTwo = "Property Two..."
	};
	console.log(testObjTwo);
	console.log(new testObjTwo());
	// undefined...
	// console.log(testObjTwo());
	// the point for var f && function f???
	var f = function f () {
		console.log("Hi...");
		return true;
	};
	function f () {
		console.log("Hi again...");
		return true;
	} // no semicolon...
	var k = function () {
		console.log("function: k...");
	};
	k.testProp = "Just a testing string...";
	k();
	console.log(k.testProp);
	var converstionOfNumber = function (num) {
		// console.log(num + 10);
		return num + 10;
	};
	var conversionOfNumberTwo = function (num) {
		return num + 20;
	};
	converstionOfNumber(24);
	var processNum = function (num, fn, fn2) {
		console.log(fn(num));
		console.log(fn2(num));
	};
	processNum(24, converstionOfNumber, conversionOfNumberTwo);
	function test () {};
	console.log(test());
	function a (a) {console.log(a); return a;};
	a(24);
	var arrTest = [];
	var arrTest2 = [[],{},"",24];
	console.log(arrTest2);
	// Classical, Pseudo-Classical, Functional...
	// Functional Inheritance Pattern...
	var tester = function (ops) {
		console.log();
		return;
	};
	// what makes this Node API serious IP Property???
	// what's the algorithm for IP/NDA agreement proposals for other developers???
	// API, SDK, APP, Network, Security,  
	// IP Property, Growth Potential, how much fucking money is it worth... 
	//
	//
	// create a RESTful API with Node to intake data structure...
	// the data 'interface' will need to accept two collections/arrays of data...
	// the word object for each event... {date:new Date(),word: $('example').val()};
	// [{date:new Date(),word:"I"},{date:new Date(),word:"want"},{date:new Date(), word:"coffee"}]; word objects for an entire day's date...
	// [["I","want","coffee",{date:new Date()}],["You","are","cool",{date:new Date()}],["I","need","band-aid"],{date:new Date()}]; multi-dimenstional arrays...
	//
	//
	// create a grid-collection with example illustrations and words with Backbone.js...
	// create a the data analysis view with tables, charts, graphs, pies, (D3.js) etc...as a Backbone.js App...
	// create a grid-collection/UICollectionView example with iOS with illustrations and words with Xcode...
	// then do it in Android...
	// 
	/*var obj = function() {
		// proper date method for the return...
		// this === obj...
		var currentDate = new Date(); 
		// the format in for U.S....
		var dateTime = currentDate.getDate() + "/"
                + (currentDate.getMonth()+1) + "/" 
                + currentDate.getFullYear() + " @ "  
                + currentDate.getHours() + ":"  
                + currentDate.getMinutes() + ":" 
                + currentDate.getSeconds();
		this.date = dateTime,
		this.word = "I"
	};
	var holder = new obj();
	console.log(holder);*/
}());