// A word is considered valid if:

// It contains a minimum of 3 characters.
// It contains only digits (0-9), and English letters (uppercase and lowercase).
// It includes at least one vowel.
// It includes at least one consonant.
// You are given a string word.

// Return true if word is valid, otherwise, return false.

// Notes:

// 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
// A consonant is an English letter that is not a vowel.
 

// Example 1:

// Input: word = "234Adas"

// Output: true

// Explanation:

// This word satisfies the conditions.

// Example 2:

// Input: word = "b3"

// Output: false

// Explanation:

// The length of this word is fewer than 3, and does not have a vowel.

// Example 3:

// Input: word = "a3$e"

// Output: false

// Explanation:

// This word contains a '$' character and does not have a consonant.

 

// Constraints:

// 1 <= word.length <= 20
// word consists of English uppercase and lowercase letters, digits, '@', '#', and '$'.




// Check length: If the string is shorter than 3, it can’t be valid.

// Loop through characters:

// If it’s a letter:
// Check if it’s a vowel → increase vowel count.
// Else → increase consonant count.
// If it’s not a letter or digit → return false immediately.
// Final check: Return true only if:

// There is at least one vowel.
// There is at least one consonant.


function isValid(s) {
  const n = s.length;
  if (n < 3) return false;

  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  let countVowel = 0;
  let countConsonant = 0;

  for (let i = 0; i < n; i++) {
    const c = s[i];
    const code = s.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      // It's a letter
      if (vowels.includes(c)) {
        countVowel++;
      } else {
        countConsonant++;
      }
    } else if (!(code >= 48 && code <= 57)) {
      // Not a digit
      return false;
    }
  }

  return countVowel >= 1 && countConsonant >= 1;
}


console.log(isValid("234Adas"));        
