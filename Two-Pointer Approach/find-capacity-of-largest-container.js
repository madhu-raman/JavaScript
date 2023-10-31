// 👋 Hello, Digital Denizens! 👋

// ❓ PROBLEM HEADING ❓
// Determine the capacity of the largest container.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// You are given an array of N non-negative integers where each represents the height of a
// line. N vertical lines are drawn at points marked 1 to n on the x axis as shown in the
// diagram.
// Diagram URL: http://bit.ly/container-with-most-water
// Find two lines, which together with the x axis forms a container, such that the
// container holds the most water. Assume the width of lines to be negligible.
// Note: You may not slant the container and N is at least 2.
// Assume the input is clean (constraints are met). Need not validate the input.

// 🖨️ OUTPUT FORMAT 🖨️
// Return a single integer denoting the capacity of the largest container.

// 🛑 CONSTRAINTS 🛑
// 2 <= N <= 10^6

// 🧪 SAMPLE INPUT 1 🧪
// [1 8 6 2 5 4 8 3 7]

// 👌 SAMPLE OUTPUT 1 👌
// 49

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function maxArea(height) {
    let maxAreaValue = 0;
    let left = 0, right = height.length - 1;
    while (left < right) {
        let tempArea = Math.min(height[left], height[right]) * (right - left);
        if (tempArea > maxAreaValue)
            maxAreaValue = tempArea;
        if (height[left] < height[right])
            left++;
        else
            right--;
    }
    return maxAreaValue;
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(n)

// ⬅️ SPACE COMPLEXITY ➡️
// O(1)

// 🙏 NAMASTE - May your functions be sleek, not weak! 🙏