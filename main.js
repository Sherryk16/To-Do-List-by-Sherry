import inquirer from "inquirer";
//install inquirer
// array
// function
//operators
let todos = ["sheharyar", "khan"];
async function createTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Select an operation",
            choices: ["Add", "update", "view", "delete"],
        });
        if (answer.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add Items In The List",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
        if (answer.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Select an item to update",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add Items In The List",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(todo));
        }
        if (answer.select == "view") {
            console.log("***TO DO LIST***");
            todos.forEach(todo => console.log(todo));
            console.log("*****************");
        }
        if (answer.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Select an item in the list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
        }
    } while (true);
}
createTodo(todos);
