# is-accessible
  Checks if a file or a folder is accessible

```shell
npm install --save is-accessible
```

## Examples

```js
var isAccessible = require('is-accessible');

//result is always true or false

//If no mode is given, only access is checked, rwx isn't checked
isAccessible('/pato/to/something', (result) => { });
isAccessible('/path/to/something', 'wx', (result) => { });

let result = await isAccessible('/path/to/something');
let result = await isAccessible('/path/to/something', 'r'):

let result = isAccessible.sync('/path/to/something');
let result = isAccessible.sync('/path/to/something', 'w');
```

## API

### `isAccessible(path, [mode], [callback])`

#### arguments

- `path (string)`
- `mode (string)`
- `callback (function)`  

#### returns

- `Promise` (Only if no callback was given)

### `isAccessible.sync(path, [mode])`

- `path (string)`
- `mode (string)`