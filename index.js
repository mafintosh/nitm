var proc = require('child_process')

module.exports = spawn

function spawn (flags, cmd, opts) {
  return proc.spawn('sh', ['-c', `
    NODE_BIN="$(which node)"
    PATH="${__dirname}/bin:$PATH"
    NITM_BIN="$NODE_BIN" NITM_FLAGS="${flags.join(' ')}" ${stringify(cmd)}
  `], opts)
}

function stringify (arr) {
  return arr.map(item => JSON.stringify(item)).join(' ')
}
