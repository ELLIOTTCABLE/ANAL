var util = require('util')
,     fs = require('fs')
,  jsdom = require('jsdom').jsdom
, ANAL = {page: require('./Source/page')}

fs.readFile('./template/ANAL.html', function(err, data) { if (err) throw err; var window
  window = jsdom(data).createWindow();
  
  ANAL.page.constructify(window);
  util.log(window.document.outerHTML);
})
