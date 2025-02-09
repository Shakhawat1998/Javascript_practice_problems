// String parenthesis = "{[()]}" -> true
// String parenthesis = "({[])}" -> false
// String parenthesis = "})][({" -> false 

// use Stack data structure 

function checkBalancedParentheses(parenthesis) {
    let characterStack = [];
    let isBalanced = true;
    
    for (let i = 0; i < parenthesis.length; i++) {
        let ch = parenthesis[i];

        // Step 1: Look for opening parentheses and push to stack
        if (ch === '{' || ch === '(' || ch === '[') {
            characterStack.push(ch);
        }
        // Step 2: Look for closing parentheses
        else if (ch === '}' || ch === ')' || ch === ']') {
            // Case 1: Closing parentheses before opening parentheses
            if (characterStack.length === 0) {
                isBalanced = false;
                break;
            }

            // Step 3: Check for matching pair of parentheses
            let lastOpen = characterStack.pop();
            if ((ch === '}' && lastOpen !== '{') ||
                (ch === ')' && lastOpen !== '(') ||
                (ch === ']' && lastOpen !== '[')) {
                isBalanced = false;
                break;
            }
        }
    }

    // Step 4: Check if stack is empty and boolean flag is still true
    if (characterStack.length === 0 && isBalanced) {
        console.log("Balanced Parentheses");
    } else {
        console.log("Not balanced Parentheses");
    }
}

// Example usage:
checkBalancedParentheses("{[()]}"); // Balanced Parentheses
checkBalancedParentheses("}]()]}>"); // Not balanced Parentheses
