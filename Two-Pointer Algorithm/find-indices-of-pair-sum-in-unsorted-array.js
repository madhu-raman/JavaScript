// 👋 Howdy, Dev Digerati? 👋

// ❓ PROBLEM HEADING ❓
// Find indices of two numbers in an unsorted array that add up to a target

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given an unsorted array of integers as input, find the indices of two numbers in the
// array that add up to a specified target.
// Return an array of the indices in increasing order.
// Assume the input is clean (all constraints are met). Need not validate the input.

// 🛑 CONSTRAINTS - ASSUME ALL ARE MET 🛑
// 2 <= Length of array <= 100000
// 1 <= Range of values <= 1000000
// Input array is unsorted
// Each input would have exactly one solution
// Cannot use same element twice. If two elements have same value, they can be used
// Input array contains only integers
// Target value is an integer

// 🖨️ OUTPUT FORMAT 🖨️
// Return an array of the two indices in increasing order, corresponding to the numbers
// that add up to the specified target

// 🧪 SAMPLE INPUT 1 🧪
// nums = [2, 4, 5, 9, 8] --> Array elements
// target = 7 --> Target sum value
// 👌 SAMPLE OUTPUT 1 👌
// [0, 2]

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function twoSum(nums, target) {
    let result = [];
    let sumMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (sumMap.has(nums[i])) {
            if (sumMap.get(nums[i]) > i) {
                result.push(i);
                result.push(sumMap.get(nums[i]));
            }
            else {
                result.push(sumMap.get(nums[i]));
                result.push(i);
            }
            return result;
        }
        sumMap.set(target - nums[i], i);
    }
}

// END OF SOLUTION - ✨ Mischief Managed ✨
// NOTE: This is a PSEUDO-Two-Pointer problem. Since sorting array will modify indices of
// the elements, we CANNOT use the Two-Pointer Algorithm here for an equal or better TC.

// ⏱️ TIME COMPLEXITY ⏱️
// O(n)

// ⬅️ SPACE COMPLEXITY ➡️
// O(n)

// 🙏 NAMASTE - May your scripts be quick, not sick! 🙏