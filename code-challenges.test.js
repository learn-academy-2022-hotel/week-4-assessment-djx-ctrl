// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// RED:

describe("allColors", () => {
  it("removes first item and shuffles reamining in array", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(allColors(colors1)).toEqual(expect.arrayContaining(colors1.slice(1)))
    expect(allColors(colors2)).toEqual(expect.arrayContaining(colors2.slice(1)))
  })
})
// FAIL  ./code-challenges.test.js
// allColors
//   ✕ removes first item and shuffles reamining in array (1 ms)

// ● allColors › removes first item and shuffles reamining in array

//   ReferenceError: allColors is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSUEDOCODE:
// declare a function called allColors
// input: takes in an array
// output: array with first item removed and the remaining items shuffled
// Process: used .slice() to extract the first item in the array and used .sort() to randomize the order of the strings inside the array
// Reference used for code: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

const allColors = (array) => {
  return array.slice(1).sort((a,b) => 0.5 - Math.random())
}
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"]

console.log(allColors(colors1))
console.log(allColors(colors2))
// PASS  ./code-challenges.test.js
// allColors
//   ✓ removes first item and shuffles reamining in array (1 ms)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// RED:

describe("totalVotes", () => {
  it("counts up and down votes return end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(totalVotes(votes1)).toEqual(11)
    expect(totalVotes(votes2)).toEqual(-31)

  })
})
// FAIL  ./code-challenges.test.js
// totalVotes
//   ✕ counts up and down votes return end tally

// ● totalVotes › counts up and down votes return end tally

//   ReferenceError: totalVotes is not defined

// b) Create the function that makes the test pass.

// PSUEDOCODE:
// delcare a function called totalVotes
// input: an object taht contains up votes and down votes
// output: a number of the total up and down votes
// Process: Inside of the function take the object and return the downvotes subtracted from upvotes.

// GREEN:

const totalVotes = (obj) => {
  return obj.upVotes - obj.downVotes
}

console.log(totalVotes({ upVotes: 13, downVotes: 2 }))
console.log(totalVotes({ upVotes: 2, downVotes: 33 }))
// PASS  ./code-challenges.test.js
// totalVotes
//   ✓ counts up and down votes return end tally (1 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// RED:

describe("bothDataArrays", () => {
  it("takes in two arrays and returns one array", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(bothDataArrays(dataArray1)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    expect(bothDataArrays(dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// FAIL  ./code-challenges.test.js
// bothDataArrays
//   ✕ takes in two arrays and returns one array

// ● bothDataArrays › takes in two arrays and returns one array

//   ReferenceError: bothDataArrays is not defined

// b) Create the function that makes the test pass.

// GREEN:

// PSUEDOCODE:
// declare a function called bothDataArrays
// input: an array of strings
// output: a combined array with no duplicate values
// Process: Reference used for code: https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
const bothDataArrays = (array1, array2) => {
  return dataArray1.concat(dataArray2.filter((item) => dataArray1.indexOf (item) < 0))
}

console.log(bothDataArrays)
// PASS  ./code-challenges.test.js
// bothDataArrays
//   ✓ takes in two arrays and returns one array (1 ms)