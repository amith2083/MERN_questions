// 🔹 What is EventEmitter?
// EventEmitter is a built-in module in Node.js.

// It allows you to create and listen for custom events.

// Works like a publish-subscribe system.

import EventEmitter from 'events'

const e = new EventEmitter();

e.on('greet',()=>console.log('hello amith'))

e.emit('greet',)