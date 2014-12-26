var casper = require("casper").create(
		clientScripts: ['G:\Technical\GoogleApps\KuchBhiKharido\war\WEB-INF\JS\lib\jquery-1.9.1.min.js']);
var totStories = 0;
var ndtvSubMainStoryImages= [];
var ndtvSubMainStoryLinks= [];
var myArray = [];
//var temp = [];

function getElementsByClass(searchClass,node,tag) {

	var classElements = new Array();

	if ( node == null )

		node = document;

	if ( tag == null )

		tag = '*';

	var els = node.getElementsByTagName(tag);

	var elsLen = els.length;

	var pattern = new RegExp('(^|\\\\s)'+searchClass+'(\\\\s|$)');

	for (i = 0, j = 0; i < elsLen; i++) {

		if ( pattern.test(els[i].className) ) {

			classElements[j] = els[i];

			j++;

		}

	}

	return classElements;

}
function map(arrayLike, fn) {
    var ret = [], i = -1, len = arrayLike.length;
    while (++i < len) {
    	this.echo(arrayLike[i]); 
    	ret[i] = fn(arrayLike[i]);
    }
    return ret;
}

function getText(node) {
    if (node.nodeType === 3) return node.data;
    var txt = '';
    if (node = node.firstChild) do {
        txt += getText(node);
    } while (node = node.nextSibling);
    return txt;
}
casper.start("http://www.ndtv.com/", function() {
	this.echo("Start");
	ndtvSubMainStoryImages= this.evaluate(function(){		
			
		
		return __utils__.findAll('img.ot_big_st_img');
			/*ndtvSubMainStoryImages= document.getElementByID('ot_big_st').getElementByTagName('li');
			myArray = map(ndtvSubMainStoryImages, getText);*/		
	});	
	try{
		var temp = __utils__.findAll('div.ot_big_st');
		this.echo(temp.length);
		var ulTemp = temp[0].getElementsByTagName('ul')[0];
		this.echo(temp);
		ndtvSubMainStoryLinks = ulTemp.getElementsByTagName('li');		
	}catch(err){
		this.echo(err);
	}
	
	this.echo("End");
});

next = function() {
    var image;
    /*ndtvSubMainStoryLinks = this.evaluate(function(){	
		try{
			temp= document.getElementByClassName('ot_big_st').getElementByTagName('li');
			//myArray = map(temp, getText);
		}catch(err){
			this.echo(err);
		}
		
		//return __utils__.findAll('h3');
		return temp;
		
	});*/
    
    this.echo("Total stories " + ndtvSubMainStoryImages.length);
    this.echo("Total links " + ndtvSubMainStoryLinks.length);
    this.echo("Class "+ ndtvSubMainStoryImages[0].nodeType);
    var ul = ndtvSubMainStoryImages[0].childNodes;
    this.echo("li tags "+ ul[2]);
};

casper.then(next);
casper.run();