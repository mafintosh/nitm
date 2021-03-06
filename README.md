# nitm

Node in the middle. Intercept calls to the `node` binary and set some node specific
flags before running a program

```
npm install nitm
```

[![build status](https://travis-ci.org/mafintosh/nitm.svg?branch=master)](https://travis-ci.org/mafintosh/nitm)
[![Build status](https://ci.appveyor.com/api/projects/status/2mesincjmvg818j9?svg=true)](https://ci.appveyor.com/project/mafintosh/nitm)

Useful if you need to profile another application but don't know when it is invoking node itself.

Tested on Mac, Linux, and Windows

## Usage

``` js
var nitm = require('nitm')

// set --no-warnings to node when tape invokes it.
nitm(['--no-warnings'], ['tape', 'test/*.js'], {stdio: 'inherit'})
```

## API

#### `var proc = nitm(flags, command, [options])`

Run a command but intercept calls to node and set the specified flags.
Returns a child process instance. Options are forwarded to `childProcess.spawn`.

## CLI

There is a cli available as well

```
npm i -g nitm
# flags before -- and your program after
nitm --no-warnings -- tape test/*.js
```

## Acknowledgements

This project was kindly sponsored by nearForm.

## License

MIT
