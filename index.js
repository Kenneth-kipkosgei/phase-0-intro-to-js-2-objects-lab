let employee = { name: "Sam", streetAddress: "11 Broadway" };

// 1. Non-destructive key/value update
function updateEmployeeWithKeyAndValue(obj, key, value) {
  return { ...obj, [key]: value };
}

// 2. Destructive key/value update
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

// 3. Non-destructive delete
function deleteFromEmployeeByKey(obj, key) {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

// 4. Destructive delete
function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}
// Write your solution in this file!
