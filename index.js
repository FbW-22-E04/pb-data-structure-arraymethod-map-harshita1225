// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//1
function camelize(str) {
  const words = str.split("-");
  //console.log(words);
  const camelCase = words.map((letters, indx) => {
    if (indx > 0) {
      return letters[0].toUpperCase() + letters.slice(1);
    }
    return letters;
  });

  return camelCase.join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

const usersMapped = users.map(function (user) {
  const newUser = {};
  newUser.fullName = `${user.name} ${user.surname}`;
  newUser.id = `${user.id}`;

  return newUser;
});

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
