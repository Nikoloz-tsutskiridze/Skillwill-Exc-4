// Exercise 1
function customReplace(originalString, valueToReplace, valueToReplaceWith) {
  let result = "";
  let i = 0;

  while (i < originalString.length) {
    if (originalString.slice(i, i + valueToReplace.length) === valueToReplace) {
      result += valueToReplaceWith;
      i += valueToReplace.length;
    } else {
      result += originalString[i];
      i++;
    }
  }

  return result;
}

//Exercise 2

function capitalizeWords(sentence) {
  const words = sentence.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  const capitalizedSentence = capitalizedWords.join(" ");

  return capitalizedSentence;
}

const sentence = "hello world! this is a test.";
console.log(capitalizeWords(sentence));

//Exercise 3
function sortUsersByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

const users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];

const sortedUsers = sortUsersByAge(users);
console.log(sortedUsers);
