// 👋 Howdy, Dev Digerati? 👋

// ❓ PROBLEM HEADING ❓
// Find indices of two numbers in an array that add up to a target

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given an array of integers as input, output the indices of two numbers in the array which
// add up to a specified target.
// Assume that each input would have exactly one solution and you cannot use the same element
// twice. If 2 different elements have the same value, they can be used.
// Return an array of the indices in increasing order.
// Assume the input is clean (constraints are met). Need not validate the input.

// 🖨️ OUTPUT FORMAT 🖨️
// Return an array of the two indices (in increasing order) of the numbers which add up to the
// specified target.

// 🛑 CONSTRAINTS 🛑
// 2 <= Length of array <= 100000
// 1 <= Range of values <= 1000000

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

// ⏱️ TIME COMPLEXITY ⏱️
// O(n)

// ⬅️ SPACE COMPLEXITY ➡️
// O(n)

// 🙏 NAMASTE - May your scripts be quick, not sick! 🙏