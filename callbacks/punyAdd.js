const add = (a, b, cb) => {
  cb(a + b);
};

add(4, 5, (sum) => {
  setTimeout(() => {
    console.log(sum);
  }, 2000);
});
