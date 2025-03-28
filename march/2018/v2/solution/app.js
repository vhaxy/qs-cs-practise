const { findSourceMap } = require("module");
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

function main() {
	const classes = {
		math: [],
		art: [],
		law: [],
	};

	function validateInput(input) {
		if (!input || input.trim() === "") {
			return false;
		}
		if (input.includes("  ")) {
			return false;
		}
		for (let char of input) {
			if (!/[a-zA-Z\s]/.test(char)) {
				return false;
			}
		}
		return true;
	}

	function validateSubjectChoice(input) {
		return input in classes;
	}

	async function enterStudents() {
		let studentName = await getName("Enter student's name: ");
		while (!validateInput(studentName)) {
			studentName = await getName("Invalid entry, enter student's name: ");
		}

		let firstChoice = await getSubjectChoice("Enter 1st subject choice: ");
		while (!validateInput(firstChoice) || !validateSubjectChoice(firstChoice)) {
			firstChoice = await getSubjectChoice("Re-enter 1st subject choice: ");
		}

		let secondChoice = await getSubjectChoice("Enter 2nd subject choice: ");
		while (
			!validateInput(secondChoice) ||
			!validateSubjectChoice(secondChoice) ||
			secondChoice === firstChoice
		) {
			secondChoice = await getSubjectChoice("Re-enter 2nd subject choice: ");
		}
		console.log(`\n${studentName}: ${firstChoice}, ${secondChoice}\n`);
		rl.close();
	}
	enterStudents();
}

main();
