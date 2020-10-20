"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items){
    console.log(`${items[i]} ${i}`);
  }

  // for i in range(len(items)):
  // print(f'{items[i]} {i}')
}


// 2. everyOtherItem
function everyOtherItem(items) {
  
  const myList = [];

  // for (item in items) {
  //   if (item % 2 == 0) {
  //     myList.push(items[item]);
  //   }
  // }
  for (let i=0; i<items.length; i+=2) {
    myList.push(items[i]);
  }
  return myList;

} 
  // Replace this with your code

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
