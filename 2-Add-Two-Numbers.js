/**
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

//法一：一次性求和、取余、进位
// Runtime: 259ms
var addTwoNumbers = function(l1, l2) {
    
	var sum = 0,
		carry = 0,
		head = new ListNode(0),
		cur = head;

	while (l1 || l2) {
		var l1Val = l1 ? l1.val : 0,
			l2Val = l2 ? l2.val : 0;

		sum = l1Val + l2Val + carry;
		nodeValue = sum % 10;
		cur.next = new ListNode(nodeValue);
		cur = cur.next;
		carry = sum >= 10 ? 1 : 0;

    	l1 = l1.next || 0;
    	l2 = l2.next || 0;

	}

	if (carry) {
		cur.next = new ListNode(1);
		cur = cur.next;
	}

	return head.next;

};

//法二：分两次求和（先将了l1的值加到val中，再加l2的值）最后判断进位
//Runtime: 192ms
var addTwoNumbers = function (l1, l2) {

	var head = new ListNode(0),
		res,
		cur,
		prev = head;

	while (l1 || l2) {

			cur = prev.next || new ListNode(0);
			prev.next = cur;
			cur.val += (l1 ? l1.val : 0);
			cur.val += (l2 ? l2.val : 0);

			if (cur.val >= 10) {
				cur.val -= 10;
				cur.next = new ListNode(1);
			}

			prev = cur;
			l1 = l1 ? l1.next : 0;
			l2 = l2 ? l2.next : 0;

		}	

	res = head.next;

	return res;
}