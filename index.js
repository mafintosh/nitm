var proc = require('child_process')
var path = require('path')

module.exports = spawn

function spawn (flags, cmd, opts) {
  return proc.spawn(cmd[0], cmd.slice(1), {
    env: Object.assign({}, process.env, {
      NITM_BIN: process.execPath,
      NITM_FLAGS: flags.join(' '),
      PATH: path.join(__dirname, 'bin') + ':' + process.env.PATH
    })
  })
}
