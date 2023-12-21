/*give an array of integer, replace all the occurrence of elementToReplace with subtractionElem.

Example For inputArray = [1,2,3], elementToReplace = 1 and subtractionElem = 3, then output should be arrayReplace(inputArray, elementToReplace, subtractionElem) = [3,2,3]

input/output :
1. [timeLimit] 400ms (js) 
2. [input]array.integer inputArray 

*/

function arrayReplace(inputArray, elementToReplace, subtractionElem){
 //console.log(inputArray, elementToReplace, subtractionElem);
 inputArray.forEach((element, index) => {
  if(element === elementToReplace){
   inputArray[index] = subtractionElem
  }
 });
 console.log(inputArray);
}

arrayReplace([1,2,3],1,3)