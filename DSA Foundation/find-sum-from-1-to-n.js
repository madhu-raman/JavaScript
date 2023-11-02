// 👋 Salutations, Programming Champions! 👋

// ❓ PROBLEM HEADING ❓
// Find the sum of positive integers from 1 to n.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given an input n, write a function that adds all the positive integers from 1 to n and
// returns the sum, without using any direct formulas.
// Also solve for the inputs that don't meet the constraints as follows:
// If input does not satisfy any of the constraints, return "Invalid".

// 🖨️ OUTPUT FORMAT 🖨️
// For a valid input n, return the sum of positive integers from 1 to n.
// If the given input doesn't meet any constraint, then return "Invalid".

// 🛑 CONSTRAINTS 🛑
// Decimal numbers, blank spaces, special characters, alphabets are not acceptable.
// n should be a positive integer less than or equal to 1000000.

// 🧪 SAMPLE INPUT 1 🧪
// n = 3
// 👌 SAMPLE OUTPUT 1 👌
// 6

// 🧪 SAMPLE INPUT 2 🧪
// n = 5
// 👌 SAMPLE OUTPUT 2 👌
// 15

// 🧪 SAMPLE INPUT 3 🧪
// n = -3
// 👌 SAMPLE OUTPUT 3 👌
// Invalid

// 🧪 SAMPLE INPUT 4 🧪
// n = 1.2
// 👌 SAMPLE OUTPUT 4 👌
// Invalid

// 🧪 SAMPLE INPUT 5 🧪
// n = 2/3
// 👌 SAMPLE OUTPUT 5 👌
// Invalid

// 🧪 SAMPLE INPUT 6 🧪
// n = 1@23
// 👌 SAMPLE OUTPUT 6 👌
// Invalid

// 🧪 SAMPLE INPUT 7 🧪
// n = 0
// 👌 SAMPLE OUTPUT 7 👌
// Invalid

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function findSumOfFirstN (n) {
    if (typeof(n) !== "number" || n % 1 !== 0 || n < 1 || n > 1000000)
        return "Invalid";
    let sum = 1;
    for (let i = 2; i <= n; i++)
        sum += i;
    return sum;
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(n)

// ⬅️ SPACE COMPLEXITY ➡️
// O(1)

// 🙏 NAMASTE - May your syntax be tight, not in a plight! 🙏