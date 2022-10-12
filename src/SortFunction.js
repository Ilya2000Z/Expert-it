//****************** sort method *********************
// arr -> sort by userId return obeject "SortObject" whith key = userId and value = group array
// then Object -> convert to array of arrays where each array group by userId
// Then Sort by completed key
// ObjectToArray is array values from SortObject
// in foreach call fucnction where create Object and push hear
// Key = Count cmpleted, and value = array which was group by userId
// if cmpleted == cmpleted add + 0,1 to < userId
// Then ObjectCmpleted convert to array of arrays type => [['count completed',[array group by userId]]...]
//**************************************************** */

export function SortArr(arr) {
  var SortObject = {};
  var endOfSort = [];
  var sortable = [];
  //***********Array group bu userId******************** */
  arr.forEach(function (value) {
    if (typeof SortObject[value.userId] == "undefined") {
      SortObject[value.userId] = [];
      SortObject[value.userId].push(value);
    } else if (Object.keys(SortObject) == value.userId) {
      SortObject[value.userId].push(value);
    }
    Object.keys(SortObject).map(function (key) {
      if (Object.keys(SortObject)[key] == value.userId) {
        if (SortObject[value.userId][0] !== value) {
          SortObject[value.userId].push(value);
        }
      }
    });
  });
  //***************************************************** */

  var ObjectToArray = Object.values(SortObject); // Object grop by userId to array
  SortUp(ObjectToArray); // call sort up function

  // count true completed in array
  function CountCompleted(arr) {
    const test = arr.filter((item1) => item1.completed === true).length;
    return parseFloat(test);
  }
  //****************

  // Сортировка по возростинию
  function SortUp(ObjectToArray) {
    var completedObject = {};
    ObjectToArray.forEach(function (value) {
      if (typeof completedObject[CountCompleted(value)] == "undefined") {
        completedObject[CountCompleted(value)] = value;
      } else {
        if (
          completedObject[CountCompleted(value)][0].userId < value[0].userId
        ) {
          const valueObject = completedObject[CountCompleted(value)];
          completedObject[CountCompleted(value)] = valueObject;
          completedObject[CountCompleted(value) + 0.1] = value;
        } else {
          completedObject[CountCompleted(value) + 0.1] = value;
        }
      }
    });
    sortable = Object.entries(completedObject);
    sortable.sort(function (a, b) {
      return a[0] - b[0];
    });
    for (var i = 0; i < sortable.length; i++) {
      endOfSort.push(sortable[i][1]);
    }
  }
  return sortable.reverse();
}
