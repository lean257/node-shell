var fs = require('fs')
var readline = require('readline')
var os = require('os')
module.exports = {
  pwd : function(str) {
    process.stdout.write(process.cwd())
    process.stdout.write('\nprompt > ')
  },
  date : function(str) {
    var today = new Date()
    process.stdout.write(today.toString())
    process.stdout.write('\nprompt > ')
  },
  ls : function(str) {
    fs.readdir('.', function(err, files) {
      if (err) throw err
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
    process.stdout.write("prompt > ");
    });
  },
  echo: function(str) {
    process.stdout.write(str)
    process.stdout.write('\nprompt > ')
  },
  cat: function(str) {
    fs.readFile(str, (err, data) => {
      if (err) throw err
      process.stdout.write(data.toString())
    })
  },
  head: function(str) {
    var rl = readline.createInterface({
      input: fs.createReadStream(str)
    })

    var lineno = 0
    rl.on('line', (line) => {
      lineno++
      if (lineno > 5) rl.close()
      else process.stdout.write(line.toString() + '\n')
    })
  },
  tail: function(str) {
    var rl = readline.createInterface({
      input: fs.createReadStream(str)
    })

    var lineno = 0
    rl.on('line', (line) => {
      lineno--
      if (lineno > -7) rl.close()
      else process.stdout.write(line.toString() + '\n')
    })
  },
  sort: function(str) {
    var arr = []
    fs.readFile(str, (err, data) => {
      if (err) throw err
      var arr = data.toString().split('\n')
      arr.sort()
      var res = arr.join().replace(/,/g, '\n')
      process.stdout.write(res.toString())
    })
  }
}
