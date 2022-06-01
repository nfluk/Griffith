const add = (num1, num2) => {
  const p = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      const err = new Error('Please supply two numbers');
      reject(err);
    } else {
      const sum = num1 + num2;
      setTimeout(() => {
        resolve(sum);
      }, 2500);
    }
  });

  p.then((result) => {
    console.log(result);
  }).catch((result) => {
    console.log(result);
  });
};

add(5, 4);
add('hello', 5);
