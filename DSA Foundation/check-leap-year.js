// 👋 Hey, Software Sheriffs! 👋

// ❓ PROBLEM HEADING ❓
// Check if a given year is a leap year.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// Given an input y, write a function to check if it's a leap year.
// A year is a leap year if one of the following conditions is satisfied:
// a) The year is a multiple of 400.
// b) The year is a multiple of 4 and not a multiple of 100.
// Also solve for the inputs that don't meet the constraints as follows:
// If input does not satisfy any of the constraints, return "Invalid".
// Note: The given numeric input will be assumed to be the year in AD by default.

// 🖨️ OUTPUT FORMAT 🖨️
// For a valid input y, return "true" if it's a leap year.
// For a valid input y, return "false" if it's not a leap year.
// If the given input doesn't meet any of the constraints, then return "Invalid".

// 🛑 CONSTRAINTS 🛑
// The input year y should be a whole number.
// y should not be greater than 1000000.
// BC years or alphanumeric years is invalid input.

// 🧪 SAMPLE INPUT 1 🧪
// y = 1900
// 👌 SAMPLE OUTPUT 1 👌
// false

// 🧪 SAMPLE INPUT 2 🧪
// y = 2000
// 👌 SAMPLE OUTPUT 2 👌
// true

// 🧪 SAMPLE INPUT 3 🧪
// y = 100 BC
// 👌 SAMPLE OUTPUT 3 👌
// Invalid

// 🧪 SAMPLE INPUT 4 🧪
// y = 1.2
// 👌 SAMPLE OUTPUT 4 👌
// Invalid

// 🧪 SAMPLE INPUT 5 🧪
// y = 2/3
// 👌 SAMPLE OUTPUT 5 👌
// Invalid

// 🧪 SAMPLE INPUT 6 🧪
// y = hundred
// 👌 SAMPLE OUTPUT 6 👌
// Invalid

// 🧪 SAMPLE INPUT 7 🧪
// y = -20
// 👌 SAMPLE OUTPUT 7 👌
// Invalid

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function isLeapYear(y) {
    if (typeof(y) !== "number" || y % 1 !== 0 || y < 0 || y > 1000000)
        return "Invalid";
    return (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0));
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(1)

// ⬅️ SPACE COMPLEXITY ➡️
// O(1)

// 🙏 NAMASTE - May your logic be agile, never fragile! 🙏