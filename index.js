var proc = require('child_process')
var path = require('path')

var isWin = process.platform === 'win32'
var bin = isWin ? 'bin/win' : 'bin/unix'
var sep = isWin ? ';' : ':'

module.exports = spawn

function spawn (flags, cmd, opts) {
  return proc.spawn(cmd[0], cmd.slice(1), {
    env: Object.assign({}, process.env, {
      NITM_BIN: process.execPath,
      NITM_FLAGS: flags.join(' '),
      PATH: path.join(__dirname, bin) + sep + process.env.PATH
    })
  })
}
