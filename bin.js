#!/usr/bin/env node

var nitm = require('./')
var sep = process.argv.indexOf('--')

if (sep === -1) {
  console.log('Usage: nitm [node-flags] -- [program]')
  process.exit(1)
}

nitm(process.argv.slice(2, sep), process.argv.slice(sep + 1), {stdio: 'inherit'})
