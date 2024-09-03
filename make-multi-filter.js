'use strict';

function MakeMultiFilter(originalArray) {
  let currentArray = [...originalArray];

  function arrayFilterer(filterCriteria, callback) {
    if (typeof filterCriteria === 'function') {
      currentArray = currentArray.filter(filterCriteria);

      if (typeof callback === 'function') {
        const boundCallback = callback.bind(originalArray);
        boundCallback(currentArray);
      }
    } else {
      if (typeof callback === 'function') {
        const boundCallback = callback.bind(originalArray);
        boundCallback(currentArray);
      }

      return currentArray;
    }

    return arrayFilterer;
  }

  return arrayFilterer;
}

// Adding a comment
