// 👋 Hi there, Development Mavens! 👋

// ❓ PROBLEM HEADING ❓
// Grade the students based on marks.

// 📝 DETAILED PROBLEM DESCRIPTION 📝
// A school has the following rules for grading system:
// [0, 25) - F
// [25, 45) - E
// [45, 50) - D
// [50, 60) - C
// [60, 80) - B
// [80, 100] - A
// If the input is less than 0 or greater than 100 then it is considered invalid.
// You are given a number "marks" as an argument.
// You have to implement the function "gradeMarks" such that it will return the
// corresponding grade.
// Also solve for the inputs that don't meet the constraints as follows:
// If input does not satisfy any of the constraints, return "Invalid".

// 🖨️ OUTPUT FORMAT 🖨️
// For a valid input, return the grade corresponding to the input marks.
// If the given input doesn't meet any of the constraints, then return "Invalid".

// 🛑 CONSTRAINTS 🛑
// Input marks should range from 0 to 100.
// Blank spaces, special characters, alphabets are not acceptable.

// 🧪 SAMPLE INPUT 1 🧪
// marks = 80
// 👌 SAMPLE OUTPUT 1 👌
// A

// 🧪 SAMPLE INPUT 2 🧪
// marks = 42
// 👌 SAMPLE OUTPUT 2 👌
// E

// 🧪 SAMPLE INPUT 3 🧪
// marks = -3
// 👌 SAMPLE OUTPUT 3 👌
// Invalid

// 🧪 SAMPLE INPUT 4 🧪
// marks = 100.2
// 👌 SAMPLE OUTPUT 4 👌
// Invalid

// 🧪 SAMPLE INPUT 6 🧪
// marks = 1@23
// 👌 SAMPLE OUTPUT 6 👌
// Invalid

// 🧪 SAMPLE INPUT 7 🧪
// marks = ten
// 👌 SAMPLE OUTPUT 7 👌
// Invalid

// START OF SOLUTION - 🔮 I Solemnly Commit To Coding Curiosity 🔮

function gradeMarks(marks) {
    if (typeof(marks) !== "number" || marks < 0 || marks > 100)
        return "Invalid";
    else if (marks < 25)
        return "F";
    else if (marks < 45)
        return "E";
    else if (marks < 50)
        return "D";
    else if (marks < 60)
        return "C";
    else if (marks < 80)
        return "B";
    else
        return "A";
}

// END OF SOLUTION - ✨ Mischief Managed ✨

// ⏱️ TIME COMPLEXITY ⏱️
// O(1)

// ⬅️ SPACE COMPLEXITY ➡️
// O(1)

// 🙏 NAMASTE - May your code be divine, like aged wine! 🙏