#!/usr/bin/node
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let d = 0; d < size; d++) {
    let row = '';
    for (let h = 0; h < size; h++) row += 'X';
    console.log(row);
  }
}
