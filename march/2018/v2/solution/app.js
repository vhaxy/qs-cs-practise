const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getName(studentName) {
  return new Promise((resolve) => {
    rl.question(studentName, (input) => resolve(String(input)));
  });
}

function getSubjectChoice(subject) {
  return new Promise((resolve) => {
    rl.question(subject, (input) => resolve(String(input)));
  });
}

async function main() {
  const physClass = [];
  const chemClass = [];
  const hisClass = [];
  const geoClass = [];
  const csClass = [];

  const students = [];

  const subjectsCounter = [
    {
      subject: "Physics",
      counter: 0,
      subject: "Chemistry",
      counter: 0,
      subject: "History",
      counter: 0,
      subject: "Geography",
      counter: 0,
      subject: "Computer Science",
      counter: 0,
    },
  ];

  function checkMaxSize(subjectClass) {
    for (let i = 0; i < subjectClass.length; i++) {
      if (subjectClass.length > 20) {
        return True;
      } else {
        return False;
      }
    }
  }

  function checkMinSize(subjectClass) {
    for (let i = 0; i < subjectClass.length; i++) {
      if (subjectClass.length < 10) {
        return True;
      } else {
        return False;
      }
    }
  }

  async function enterStudents() {
    for (let i = 0; i < 2; i++) {
      const student = new Object();

      const studentName = await getName("Enter student name: ");
      const firstChoice = await getSubjectChoice("Enter your choice subject: ");
      const secondChoice = await getSubjectChoice(
        "Enter your choice subject: "
      );

      // const student = {}
      student.name = studentName;
      student.firstChoice = firstChoice;
      student.secondChoice = secondChoice;

      students.push(student);
    }
  }

  function calculateChosenSubjects(students) {
    for (let i = 0; i < students.length; i++) {
        if (students.firstChoice === subjectsCounter.subject) {
            subjectsCounter.counter += 1
        }
    }
  }

  await enterStudents()
  
  calculateChosenSubjects()

  console.log(students);

  rl.close();
}

main();
