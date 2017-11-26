import React from 'react';
import _ from 'lodash';

export function convertDate(timestamp) {
    const formatted = new Date(timestamp).toDateString()
    console.log(formatted)
    return formatted;
}

export function sort(arr, value) {
    let sortedList;
    if(value === 'Date') {
        sortedList = _.sortBy(arr, [{'timestamp': Date}], ['desc'])
        console.log(sortedList);
        return sortedList;
    } 
      sortedList = _.sortBy(arr, [{'voteScore': Number}], ['desc'])
      console.log(sortedList);
      return sortedList;
  }