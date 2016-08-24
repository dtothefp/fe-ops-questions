console.log('** Read All JSON in ./mocks, merge, and write to dist/combined.json');
console.log(`Result:
  {
    "bleep": "bleep",
    "bloop": "bloop",
    "beep": "beep"
  }
order of properties is not important **`);

import fs from 'fs';

function fsReadPromise (filename) {
  return new Promise ( (resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  });
}

function readWrite () {
  const mocks = ['./mocks/beep.json', './mocks/bleep.json', './mocks/bloop.json']

  const promises = mocks.map(fsReadPromise);

  Promise.all(promises)
    .then((results) => {
      // Parse each result and merge them into a new object
    })
    .then(() => {
      // Then, write the new object as json to the specified directory
    })

}


