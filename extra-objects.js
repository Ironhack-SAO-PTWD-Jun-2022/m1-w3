const keysArr = ['firstName', 'lastName', 'age'];
const valuesArr = ['Daniel', 'Albanez', 37];
const myObj = {};

for(let i = 0; i < keysArr.length; i += 1){
  const key = keysArr[i];
  const value = valuesArr[i];
  myObj[key] = value;
  
  console.log(`${key} >> ${value}`);
  console.log('Objeto', myObj);
}

console.log('resultado:', myObj);