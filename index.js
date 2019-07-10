const figlet = require ("figlet");
const chalk = require ("chalk");

console.log(
    chalk.green(
        figlet.textSync("RUNNING PACKAGE 1", {
            font: "Univers",
            horizontalLayout: "default",
            verticalLayout: "default"
        })
    )

);