// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (list, bookName) {
  
  return [...list, bookName];
  
  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (list, bookName) {
  const newList = [...list]
  if (newList.indexOf(bookName) >= 0) {
    console.log('1:', newList);
    newList.splice(newList.indexOf(bookName), 1);
    console.log('2:', newList);
    
    // Add your code above this line
    }
}

// var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// console.log(newBookList);
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
// console.log(newBookList);

// console.log(bookList);