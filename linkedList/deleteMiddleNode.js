// 2095. Delete the Middle Node of a Linked List
// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

function deleteMiddle(head) {
    if (!head || !head.next) return null; // If the list is empty or has only one node, return null
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        prev = slow; // Keep track of the previous node
        slow = slow.next; // Move slow pointer one step
        fast = fast.next.next; // Move fast pointer two steps
    }
    // Now slow is at the middle node, and prev is the node before it       
    if (prev) {
        prev.next = slow.next; // Remove the middle node by linking previous node to the next of slow
    }
    return head; // Return the modified list
}