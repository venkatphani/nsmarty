const express=require('express')
const nsmarty=require('nsmarty')
const util=require('util')

const app=express()

app.get('/',function (req,res) {
    res.send('Hello world')
})

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

app.listen(9000, function(req,res) {
    var 	stream = nsmarty.assign('test.tpl', $arr);
    console.log(stream)
    stream.pipe(res); // take place of _display() from PHP Smarty.

    console.log('server started on port: http://localhost:9000')
})