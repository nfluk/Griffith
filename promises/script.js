// learning about promises

// step 1 - just make a simple promise that resolves / is fulfilled
const myFirstP = new Promise((resolve, reject) => {
  const myName = 'John';
  resolve(myName); // if myName has a value resolve / fulfill the promise
});

myFirstP.then((result) => {
  // resolve is passed into here - we can chose whatever parameter name we want to be passed forward from here
  console.log('The first promise resolve: ', result); // log the thing that was passed from resolve
});

// this is the end of the FIRST promise ----------------

// step 2 - a simple promise that does more stuff and then resolves / is fulfilled
const mySecondP = new Promise((resolve, reject) => {
  const a = 1;
  const b = 3;
  const sum = a + b;
  resolve(sum);
});

mySecondP
  .then((result) => {
    console.log('What what passed to .then: ', result);
    const doubled = result * 2;
    return doubled; // whatever is returned here is passed into the next .then
  })
  .then((result2) => {
    console.log('The second promise resolve: ', result2);
  });

// this is the end of the SECOND promise ----------------

// step 3 - a promise that resolves OR rejects

const myThirdP = new Promise((resolve, reject) => {
  if (true) {
    reject(new Error('An error occured!'));
  } else {
    const first = 'Yey!';
    const second = 'All went well :)';
    resolve(`Third p resolve: ${first} That was nice. ${second}`);
  }
});

myThirdP
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
