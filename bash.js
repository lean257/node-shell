process.stdout.write('prompt > ')
process.stdin.on('data', function(data){
  var cmd = data.toString().trim()
  if (cmd == 'pwd') {
    process.stdout.write(process.cwd())
  } else if (cmd == 'date') {
    var today = new Date()
    process.stdout.write(today.toString())
  }
  process.stdin.write('\nprompt > ')
})
