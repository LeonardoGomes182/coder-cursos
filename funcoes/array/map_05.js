const nums = [9, 8, 7];

nums.map(function (el, indice, array) {
  console.log(el, indice, array);
});


//arrow
nums.map(el =>console.log(el))