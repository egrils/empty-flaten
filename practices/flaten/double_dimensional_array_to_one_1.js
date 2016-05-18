'use strict';

function double_to_one(collection) {
  var array = changeOne(collection);

  return deleteRepeat(array);
}

function changeOne(collection) {
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

function deleteRepeat(array) {
  var newArray = [];

  array.forEach(function (element) {
    if (!isExit(element,newArray))  newArray.push(element);
  });

  return newArray;
}

function isExit(element,array) {
  var boolean = false;

  array.forEach(function (digit) {
    if (digit == element)
      boolean = true;
  });

  return boolean;
}

module.exports = double_to_one;
