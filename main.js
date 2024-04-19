#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        message: "Please enter your sentence here to count the word: ",
        type: "input",
    }
]);
const words = answers.Sentence.trim().split(" ");
if (words.length === 1) {
    console.log(`Your Sentence Word Count is "${words.length}" Thank You for using this app.`);
}
else if (words.length >= 2) {
    console.log(`Your Sentence Words Counts are "${words.length}" ThankYou for using this app.`);
}
else {
    console.log("You did not type any word Please enter your sentence first Thank You.");
}
;
