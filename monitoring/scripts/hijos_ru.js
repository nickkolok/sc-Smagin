var urllist = require('../../parser/urllist.js');
var fs = require('fs');

var list=JSON.parse(fs.readFileSync("./urllists/hijos_ru.urllist.json", 'utf-8'));

urllist.countErrorsInURLarray(
	list,
	10000000,
	'<div id="content">',
	'<div id="comments">',
	{
		name:'hijos_ru',
		pause:1500,
	}
);

