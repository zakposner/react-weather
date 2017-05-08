const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Please provide two valid numerical arguments');
    }
  });
}

let sum = addPromise(1, 12)
  .then((value) => {
    console.log('success:', value);
  })
  .catch((err) => {
    console.error('error:', err);
  })
