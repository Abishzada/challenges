// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
var mergeTwoLists = function (list1, list2) {
  if (Array.isArray(list1) && Array.isArray(list2)) {
    const newList = [...list1, ...list2].sort();
    return newList;
  }
};
