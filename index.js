#!/usr/bin/env node
import inquirer from "inquirer";
while (1) {
    let answers = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter First Number: "
        },
        {
            name: "num2",
            type: "numeber",
            message: "Enter Second Number: "
        },
        {
            name: "operation",
            type: "input",
            message: "Enter Operation, Valid Operations: +, -, *, / :    ",
            validate: function (operation) {
                if (operation == '+' || operation == '-' || operation == '*' || operation == '/') {
                    return true;
                }
                else {
                    return `Invalid Operation. Valid Operations are +, -, *, /`;
                }
            }
        }
    ]);
    if (answers.operation == '+') {
        console.log("The Answer is: ", parseInt(answers.num1, 10) + parseInt(answers.num2, 10));
    }
    else if (answers.operation == '-') {
        console.log("The Answer is: ", parseInt(answers.num1, 10) - parseInt(answers.num2, 10));
    }
    else if (answers.operation == 'x') {
        console.log("The Answer is: ", parseInt(answers.num1, 10) * parseInt(answers.num2, 10));
    }
    else if (answers.operation == '/') {
        console.log("The Answer is: ", parseInt(answers.num1, 10) / parseInt(answers.num2, 10));
    }
}
