'use strict';

function double_to_one(collection) {
  var newArray = [];

  collection.forEach(function (element) {
    if (!Array.isArray(element))  newArray.push(element);
    else
      element.forEach(function (digit) {
        newArray.push(digit);
      });
  });

  return newArray;
}


module.exports = double_to_one;
