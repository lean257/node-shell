'use_strict';

var fs = require('fs')
var readline = require('readline')
var os = require('os')
var request = require('request')

  function pwd(stdin, args, done) {
    done(process.cwd())
  }

  function date(str, done) {
    var today = new Date().toString()
    done(today)
  }

  function ls(file, done) {
    var output = "";
    fs.readdir('.', function(err, files) {
      files.forEach(function(file) {
        output += file.toString() + "\n";
      })
      done(output);
    });
  }

  function echo(str, done) {
    done(str)
  }

  function cat(str, done) {
    fs.readFile(str, (err, data) => {
      if (err) throw err
      done(data.toString());
    })
  }

  function head(str, done) {
    var rl = readline.createInterface({
      input: fs.createReadStream(str)
    })

    var lineno = 0

    rl.on('line', (line) => {
      lineno++
      if (lineno > 5) {rl.close()}
      else {
        var output = line.toString() + '\n'
        done(output)
      }
    })
  }

  function tail(str, done) {
    var rl = readline.createInterface({
      input: fs.createReadStream(str)
    })

    var lineno = 0
    rl.on('line', (line) => {
      lineno--
      if (lineno > -7) {rl.close()}
      else {
        var output = line.toString() + '\n'
        done(output)
      }
    })
  }

  function sort(str, done) {
    var arr = []
    fs.readFile(str, (err, data) => {
      if (err) throw err
      var arr = data.toString().split('\n')
      arr.sort()
      var res = arr.join().replace(/,/g, '\n')
      done(res.toString())
    })
  }

  function curl(str, done) {
    request(str, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }

module.exports = {
  cat: cat,
  head: head,
  tail: tail,
  sort: sort,
  pwd: pwd,
  curl: curl,
  date: date,
  ls: ls,
  echo: echo
}
