const promisifiedSetTimeout = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const findErrors = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Please supply two numbers');
  }
};

const add = async (num1, num2) => {
  findErrors(num1, num2);
  const sum = num1 + num2;
  await promisifiedSetTimeout(1000);
  console.log(sum);
};

add(5, 11);
