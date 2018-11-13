/**
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = function(l1, l2) {

  // leetcode-cn answer:
  // if (l1 === null && l2 === null) return [];

  if (l1 === null) return l2;
  if (l1 === null) return l1;

  const headNode = new ListNode('head');
  let curNode = headNode;

  while(l1 !== null && l2 !== null) {
    // rewrite next node
    if (l1.val < l2.val) {
      curNode.next = l1;
      l1 = l1.next;
    } else {
      curNode.next = l2;
      l2 = l2.next;
    }
    curNode = curNode.next;
  }

  curNode.next = l1 !== null ? l1 : l2;

  return headNode.next
};

module.exports = [
  mergeTwoLists
]
