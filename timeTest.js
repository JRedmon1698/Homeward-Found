let test = 7;

const decrementCount = (count) =>{
  while (count > 0) {
    count -= 1;
    console.log(count);
  }
}

setTimeout(() => decrementCount(test), 3000);