var  util    = require('util'),
     http    = require('http'),
     nsmarty = require('nsmarty');

// IMPORTANT! Templates path	
nsmarty.tpl_path = __dirname + '';

var $arr = {
  // simple {$title}
  title: 'Hi, I am nsmarty template engine!',

  // loop {foreach} ... {/foreach}
  books: [
	  {
		 title  : 'JavaScript: The Definitive Guide',          
		 author : 'David Flanagan',                            
		 price  : '31.18'
	  },
	  {
		 title  : 'Murach JavaScript and DOM Scripting',
		 author : 'Ray Harris'
	  },
	  {
		 title  : 'Head First JavaScript',
		 author : 'Michael Morrison',
		 price  : '29.54'
	  }
	]
}

http.createServer(function (req, res) {

  // assign - parse the template.
  var 	stream = nsmarty.assign('test.tpl', $arr);
        stream.pipe(res) // take place of _display() from PHP Smarty.

}).listen(8000);
console.log("Server started: http://127.0.0.1:8000/");