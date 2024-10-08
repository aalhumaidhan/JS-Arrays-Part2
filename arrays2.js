//Task 1
function isArrayLengthOdd(numbers) {
  return numbers.length % 2 === 1;
}

console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));

//Task 2
function isArrayLengthEven(numbers) {
  return numbers.length % 2 === 0;
}

console.log(isArrayLengthEven([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3, 4]));

//Task 3
function addLailaToArray(instructors) {
  let newArr = instructors.slice();
  newArr.push("Laila");
  console.log(instructors);
  return newArr;
}

console.log(addLailaToArray(["Mishary, Hasan"]));

//Task 4
function eliminateTeam(teams) {
  return teams.pop();
}

//Challenge 1
function secondHalfOfArrayIfItIsEven(fruits) {
  if (isArrayLengthEven(fruits)) {
    let newArr = fruits.slice(fruits.length / 2);
    return newArr;
  }
  return [];
}

console.log(secondHalfOfArrayIfItIsEven([1, 2, 3, 4, 5, 6]));
console.log(secondHalfOfArrayIfItIsEven([1, 2, 3]));

//Challenge 2
function youGottaCalmDown(shout) {
  const firstExclamation = shout.indexOf("!");
  if (firstExclamation !== -1) return shout.slice(0, firstExclamation + 1);
  return shout;
}

console.log(youGottaCalmDown("HI!!!!!!!!!!"));
console.log(youGottaCalmDown("Hello There!"));
console.log(youGottaCalmDown("Hello"));
