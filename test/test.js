const onlyEvenNumFn = function () {

  let tmp = [];
  
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      tmp.push(i);
    }
  }
  
  return tmp;
};

onlyEvenNumFn();
