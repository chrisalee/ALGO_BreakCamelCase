// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
  // to add a - between the cases
  console.log(string.replace(/([A-Z])/g, '-$1'));

  // the answer to the solution
  console.log(string.replace(/([A-Z])/g, ' $1'));
  return(string.replace(/([A-Z])/g, ' $1')); 
}

solution("camelCase");
solution("camelCaseTest");