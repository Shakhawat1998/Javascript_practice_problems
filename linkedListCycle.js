// Given head, the head of a linked list,
//  determine if the
//  linked list has a cycle in it.

// There is a cycle in a linked 
// list if there is some node in the list 
// that can be reached again by continuously 
// following the next pointer. Internally,
//  pos is used to denote the index of the
//  node that tail's next pointer is 
// connected to. Note that pos is not
//  passed as a parameter.

// Return true if there is a
//  cycle in the linked list.
//  Otherwise, return false.

//  Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in 
// the linked list, where the tail 
// connects to the 1st node (0-indexed).

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in
//  the linked list, where the tail
//  connects to the 0th node.



//fast slow pointer



// Define ListNode class
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create linked list with optional cycle based on pos
function createLinkedList(arr, pos) {
    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = (pos === 0) ? head : null;

    for (let i = 1; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);
        current.next = newNode;
        current = newNode;

        if (i === pos) {
            cycleNode = newNode;
        }
    }

    // Create the cycle if pos is valid
    if (pos !== -1) {
        current.next = cycleNode;
    }

    return head;
}

// Floyd's Cycle Detection Algorithm
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

// === TEST CASES ===
// Example dynamic input
const inputArray = [1, 2]; // Your linked list values
const position = 0;        // Dynamic position to form cycle (-1 means no cycle)

const linkedListHead = createLinkedList(inputArray, position);
console.log(hasCycle(linkedListHead)); // true if cycle exists, false otherwise
