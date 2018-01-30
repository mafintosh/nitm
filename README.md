# nitm

Node in the middle. Intercept calls to the `node` binary and set some node specific
flags before running a program

```
npm install nitm
```

Useful if you need to profile another application but don't know when it is invoking node itself.

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

## License

MIT
