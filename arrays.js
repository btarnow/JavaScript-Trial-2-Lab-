'use strict';

// Python Code: 

// for i in range(len(items)):
//         print(f'{items[i]} {i}')

// input --> ["apple", berry, cherry]
// // output -->  apple 0
//                berry 1
//                cherry 2


//We know to get length it's .length
//range is range(start, stop)

//for (let i = 0; i < items.length; i += 1) {
//   console.log(i);
// }

// 1. printIndices
function printIndices(items) {
  for (let index = 0; index < items.length; index +=1) 
    console.log(items[index], index)
  
}

// printIndices(["apple", "berry", "cherry"])



// input --> [0, 1, 2, 3, 4, 5]
// output --> [0, 2, 4]

// add to end with:
// vowels.push('y');


// create an empty array to add the values of the even indicies to 
// loop through the original array 
  // if the index is even, add the value of the index to the empty array

// print our the array 

// 2. everyOtherItem
function everyOtherItem(items) {
  const everyOtherItem = [];

  for (let index = 0; index < items.length; index +=1) {
    if (index % 2 === 0) {
      everyOtherItem.push(items[index]);
      }
    }
    console.log(everyOtherItem)
}

// everyOtherItem([0, 1, 2, 3, 4, 5])

// input --> ([1, 5, 2, 0], 2)
// output --> [1, 0]


// sort the list first in acesending --> [0, 1, 2, 5]
// shorten it the length of n (2) but it is index 0 and index 1 --> [0, 1]
// sort the list in decending order --> [1, 0]

  

// 3. smallestNItems

function smallestNItems(items, n) {
  const sortedItems = items.sort();
  const sortedNItems = sortedItems.slice(0, n);
  sortedNItems.reverse();
  console.log(sortedNItems);
}

smallestNItems([1, 5, 2, 0], 2)