// Test 1: Student Grading System

// Function 1: calculate the average of three marks
function calculateAverage(mark1, mark2, mark3) {
  return (mark1 + mark2 + mark3) / 3;
}

// Function 2: determine the grade from an average
function calculateGrade(average) {
  if (average >= 80) return "A";
  if (average >= 70) return "B";
  if (average >= 60) return "C";
  if (average >= 50) return "D";
  return "E"; // 0 - 49
}

// Ask for text (name / course) - will not accept empty input
function askText(message) {
  while (true) {
    const answer = prompt(message);
    if (answer === null) return null; // user pressed Cancel
    if (answer.trim() !== "") return answer.trim();
    alert("This field cannot be empty. Please try again.");
  }
}

// Ask for a mark - must not be empty, must be a number from 0 to 100
function askMark(message) {
  while (true) {
    const answer = prompt(message);
    if (answer === null) return null; // user pressed Cancel
    if (answer.trim() === "") {
      alert("Marks cannot be empty. Please try again.");
      continue;
    }
    const mark = Number(answer);
    if (isNaN(mark)) {
      alert("Please enter a valid number.");
    } else if (mark < 0 || mark > 100) {
      alert("Invalid mark! Marks must be between 0 and 100.");
    } else {
      return mark;
    }
  }
}

function runGradingSystem() {
  const name = askText("Enter the student's full name:");
  if (name === null) return console.log("Cancelled.");

  const course = askText("Enter the course name:");
  if (course === null) return console.log("Cancelled.");

  const mark1 = askMark("Enter marks for Subject 1 (0-100):");
  if (mark1 === null) return console.log("Cancelled.");

  const mark2 = askMark("Enter marks for Subject 2 (0-100):");
  if (mark2 === null) return console.log("Cancelled.");

  const mark3 = askMark("Enter marks for Subject 3 (0-100):");
  if (mark3 === null) return console.log("Cancelled.");

  const average = calculateAverage(mark1, mark2, mark3);
  const grade = calculateGrade(average);

  const result =
    "===== STUDENT RESULT =====\n" +
    "Name:    " + name + "\n" +
    "Course:  " + course + "\n" +
    "Marks:   " + mark1 + ", " + mark2 + ", " + mark3 + "\n" +
    "Average: " + average.toFixed(2) + "\n" +
    "Grade:   " + grade;

  console.log(result);
  alert(result);
}

runGradingSystem();
