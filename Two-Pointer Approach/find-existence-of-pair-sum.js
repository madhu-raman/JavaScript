// 👋 Salutations, Source Code Citizens! 👋

// ❓ PROBLEM HEADING ❓
// Find if there are two elements in sorted array that add up to a target.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given a sorted array of integers and a target, find if there’s a pair of elements that
// add up to the target. Return true if such a pair can be found, and false otherwise.
// Assume the input is clean (constraints are met). Need not validate the input.

// 🖨️ OUTPUT FORMAT 🖨️
// Return "true" if there is such a pair present in the array otherwise return "false".

// 🛑 CONSTRAINTS 🛑
// 2 <= Length of array <= 10^5
// 1 <= Range of values <= 10^6

// 🧪 SAMPLE INPUT 1 🧪
// n = 5 --> Number of elements in array
// arr = [2, 4, 5, 8, 9] --> Array elements
// target_sum = 7 --> Target sum value
// 👌 SAMPLE OUTPUT 1 👌
// true

// 🙋 FAQ 🙋
// Q1. Wherever possible, can the target sum can be achieved by adding the same element
// from the array twice?
// A1. No, the indices of both numbers in the array should be different.

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function twoSumInSortedArray(n, arr, target_sum) {
    let left = 0, right = n - 1;
    while (left < right) {
        if (arr[left] + arr[right] === target_sum)
            return true;
        if (arr[left] + arr[right] < target_sum)
            left++;
        else
            right--;
    }
    return false;
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(n)

// ⬅️ SPACE COMPLEXITY ➡️
// O(1)

// 🙏 NAMASTE - May your bugs be gone, not spawn! 🙏