var casper = require('casper').create();

casper.start('http://www.eazework.com/index.aspx', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});

casper.run();