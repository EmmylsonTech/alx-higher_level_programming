#!/usr/bin/node
const count = process.argv.length;
console.log(count === 4 ? 'No argument' : count === 5 ? 'Argument found' : 'Arguments found');
