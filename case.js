const userName = "Rokib";
const userInput = "rokiB";

console.log(userName.toLocaleLowerCase()); //convert to lower case
console.log(userInput.toLocaleLowerCase()); //convert to lower case

if (userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()) {
  console.log("valid user");
} else {
  console.log("invalid user");
}
