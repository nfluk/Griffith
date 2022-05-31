const p = new Promise((resolve, reject) => {
  const a = 1;
  if (a > 1) {
    const myErr = new Error('Oups. Something went wrong.');
    reject(myErr);
  } else {
    const message = 'Great. Everything looks fine.';
    resolve(message);
  }
});

p.then((result) => {
  console.log(result);
}).catch((myErr) => {
  console.log(myErr);
});
