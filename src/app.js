'use strict';


// const fs = require('fs');
require('./modules/logger.js');
require('./modules/read-file.js');
require('./modules/write-file.js');
require('./modules/uppercase.js');
const events = require('./modules/events.js');

// Lifecycle
// ... we start the app here
// read ==> (read_done / read_error)
// on read_done ==> uppercase ==> uppercase_done
// on uppercase_done ==> write ==> (write_done / write_error)

let file = process.argv.slice(2).shift();

events.on('read_done', (data) => {
  events.emit('uppercase', data);
});
events.on('uppercase_done', (data) => {
  events.emit('write', data);
});

events.emit('read', file);
