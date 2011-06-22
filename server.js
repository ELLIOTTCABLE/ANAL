var util = require('util')
,     fs = require('fs')
,    url = require('url')
,   http = require('http')
,  jsdom = require('jsdom').jsdom
,   ANAL = {page: require('./Source/page')}


,go = function(to, neverGoAlone) {
  to.writeHead(200, "I LOVE YOU", {
    'Content-Type': "text/html; charset=utf-8"
  , 'Content-Length': Buffer.byteLength(neverGoAlone, 'utf8') })
  to.write(neverGoAlone, 'utf8')
  to.end() }

fs.readFile('./template/ANAL.html', function(err, data) { if (err) throw err; var server, 
  route =              function(coming, going) { route[url.parse(coming.url).pathname](coming, going) }
  route['/'] =         function(coming, going) { var // »
    window = jsdom(data).createWindow()
    go(going, window.document.outerHTML)
  }
  route['/modified'] = function(coming, going) {
    window = jsdom(data).createWindow()
    
    ANAL.page.constructify(window)
    
    go(going, window.document.outerHTML)
  }
  
  server = new(http.Server)()
  server.addListener('request', route)
  server.listen(7441)
})
