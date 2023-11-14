// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

module.exports = chunk;

// function chunk(array, size) {
//     const result = [];
//     for (let index = 0; index < array.length; index + size) {
//       let tempArray = [];
//       if (size >= array.length) {
//         tempArray = array.splice(index, array.length); //splice will change the array, slice is not
//       } else {
//         tempArray = array.splice(index, size);
//       }
//       result.push(tempArray);
//     }
//     return result;
//   }

// function chunk(array, size) {
//     const result = [];
//     for (let index = 0; index < array.length; index + size) {
//       let tempArray = [];
//       if (size >= array.length) {
//         tempArray = array.splice(index, array.length);
//       } else {
//         tempArray = array.splice(index, size);
//       }
//       result.push(tempArray);
//     }
//     return result;
//   }

// function chunk(array, size) {
//     const result = [];
//     let tempArray = [];

//     for (let index = 0; index < array.length; index++) {
//       tempArray.push(array[index]);

//       if (tempArray.length === size) {
//         result.push(tempArray);
//         tempArray = [];
//       } else if (index === array.length - 1) {
//         result.push(tempArray);
//       }
//     }
//     return result;
//   }

// function chunk(array, size) {
//   const result = [];
//   for (const element of array) {
//     const last = result[result.length - 1]; // get last element of RESULT EVERY LOOP
//     if (!last || last.length === size) {
//       result.push([element]);
//     } else {
//       last.push(element); // using point function of array
//     }
//   }

//   return result;
// }
