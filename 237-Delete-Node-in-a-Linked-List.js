/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//Runtime: 112ms
var deleteNode = function(node) {
    if (node.next === null) {
    	return;
    }
    var next = node.next;
    node.val = next.val;
    node.next = next.next;
};