(function(){ var body, script
  body = document.getElementsByTagName('body')[0]
  script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = "../Source/page.js"
  script.onload = function(){
    document.getElementById('the.modifier').onclick = function(){
      ANAL.page.constructify(window);
      window.history.pushState({}, "", "/modified");
    return false; }
  }
  
  body.appendChild(script)
})()
