var tape = require('tape')
var collect = require('stream-collector')
var childProcess = require('child_process')
var nitm = require('./')

tape('basic', function (t) {
  var proc = nitm(['--version'], ['node'])
  collect(proc.stdout, function (err, data) {
    t.error(err, 'no error')
    childProcess.exec('node --version', function (err, expected) {
      t.error(err, 'no error')
      t.same(Buffer.concat(data).toString(), expected)
      t.end()
    })
  })
})

tape('node from wrapped shell', function (t) {
  var cmd = process.platform === 'win32' ? ['cmd.exe', '/c', 'node'] : ['sh', '-c', 'node']
  var proc = nitm(['--version'], cmd)
  collect(proc.stdout, function (err, data) {
    t.error(err, 'no error')
    childProcess.exec('node --version', function (err, expected) {
      t.error(err, 'no error')
      t.same(Buffer.concat(data).toString(), expected)
      t.end()
    })
  })
})
