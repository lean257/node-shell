var commands = require('./commands')
process.stdout.write('prompt > ')
process.stdin.on('data', function(data){
  var pm = data.toString().trim()
  var file = pm.slice(data.indexOf(' ') + 1)
  var cmd = data.slice(0, data.indexOf(' '))
  commands[cmd](file)
})
