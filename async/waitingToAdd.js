const add = async (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    const err = new Error('Please supply two numbers');
}