// 206. Reverse Linked List


// Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseList = function (head) {
    let pre = null
    let curr = head
    while (curr) {
        let next = curr.next
        curr.next = pre
        pre = curr
        curr = next
    }
    return pre
}