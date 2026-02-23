//Reverse a String (Manual Method Only)
// Input: "javascript"
// Output: "tpircsavaj" ✨ Use a loop — no .reverse().

// function reverseString(str) {
//   let reversedString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }

//   return reversedString;
// }

// console.log(reverseString("abcd"));

// *********************************************************************************************************

// Check if a String is a Palindrome
// Input: "racecar"
// Output: Palindrome ✨ Compare characters from both ends using two-pointer logic.

// function isPalindrome(str) {
//   let leftIndex = 0;
//   let rightIndex = str.length - 1;

//   while (leftIndex < rightIndex) {
//     if (str[leftIndex] !== str[rightIndex]) return false;
//     leftIndex++;
//     rightIndex--;
//   }

//   return true;
// }

// console.log(isPalindrome("racecar"));

// *********************************************************************************************************

//3️⃣ Count Frequency of Each Character
// Input: "banana"
// Output: { b:1, a:3, n:2 } ✨ Teaches hash maps / JS objects + iteration.

// function countFrequency(str) {
//   const frequency = {};

//   for (let i = 0; i < str.length; i++) {
//     frequency[str[i]] = (frequency[str[i]] || 0) + 1;
//   }

//   return frequency;
// }

// console.log(countFrequency("banana"));

// *********************************************************************************************************

// 4️⃣ Find the Most Frequent Character in a String
// Input: "success"
// Output: Most frequent: s (3 times) ✨ Builds on frequency map — find maximum occurrence.

// function maxFrequencyChar(str) {
//   const frequency = {};
//   let maxChar = "";
//   let maxCharCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     frequency[char] = (frequency[char] || 0) + 1;

//     if (maxCharCount < frequency[char]) {
//       maxCharCount = frequency[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// console.log(maxFrequencyChar("bannnnanna"));

// *********************************************************************************************************

// 1️⃣ Remove All Duplicate Characters (Keep First Occurrence)

// function removeDuplicates(str) {
//   const visited = new Set();
//   let result = "";

//   for (let char of str) {
//     if (!visited.has(char)) {
//       visited.add(char);
//       result += char;
//     }
//   }

//   return result;
// }

// console.log(removeDuplicates("programming"));

// *********************************************************************************************************

// Count the Number of Words (Manually Without split)

// function countWords(str) {
//   let count = 0;
//   let inWord = false;

//   for (let char of str) {
//     if (char !== " " && !inWord) {
//       count++; // starting a new word
//       inWord = true;
//     } else if (char === " ") {
//       inWord = false; // left a word
//     }
//   }

//   return count;
// }

// console.log(countWords("  hi   there  world "));

// *********************************************************************************************************



//  Find the Longest Word in a Sentence

function longestWord(str) {
  let longest = "";
  let current = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      current += str[i];
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = "";
    }
  }

  
  if (current.length > longest.length) {
    longest = current;
  }

  return longest;
}

console.log(longestWord("coding is beautiful"));
