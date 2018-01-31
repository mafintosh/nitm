var proc = require('child_process')
var path = require('path')

var isWin = process.platform === 'win32'

module.exports = isWin ? spawnWindows : spawnUnix

function spawnWindows (flags, cmd, opts) {
  if (!opts) opts = {}

  var parentEnv = opts.env || process.env
  var env = Object.assign({}, parentEnv, {
    NITM_BIN: process.execPath,
    NITM_FLAGS: flags.join(' '),
    Path: path.join(__dirname, 'bin/win') + ';' + (parentEnv.Path || process.env.Path)
  })

  opts = Object.assign({}, opts, {env: env})
  // we need the spawnwrap on windows as the Path is resolved *after* spawn for some reason
  return proc.spawn(path.join(__dirname, 'spawnwrap.cmd'), cmd, opts)
}

function spawnUnix (flags, cmd, opts) {
  if (!opts) opts = {}

  var parentEnv = opts.env || process.env
  var env = Object.assign({}, parentEnv, {
    NITM_BIN: process.execPath,
    NITM_FLAGS: flags.join(' '),
    PATH: path.join(__dirname, 'bin/unix') + ':' + (parentEnv.PATH || process.env.PATH)
  })

  opts = Object.assign({}, opts, {env: env})
  return proc.spawn(cmd[0], cmd.slice(1), opts)
}
