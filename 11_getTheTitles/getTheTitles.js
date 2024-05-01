const getTheTitles = function (books) {
  let bookTitles = [];
  books.forEach(book => {
    bookTitles.push(book.title);
  });
  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
