let todo = [];

let req = prompt("Please Enter Your Request");

while (true) {
    if (req == "quit") {
        console.log("Quitting To Do App...");
        break;
    } else if (req == 'list') {
        console.log("----------All Tasks----------");
        console.log("----------[start]----------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i + 1, todo[i]);
        }
        console.log("----------[end]----------");
    } else if (req == 'add') {
        let task = prompt("Enter Your Task...");
        todo.push(task);
        console.log("Task Added!");
    } else if (req == "delete") {
        let taskListString = "";
        for (let i = 0; i < todo.length; i++) {
            taskListString += `${i + 1}: ${todo[i]}\n`; // Constructing the string
        }
        let taskToDelete = prompt("Enter the number of the task you want to delete:\n" + taskListString);
        taskToDelete = Number(taskToDelete);
        todo.splice(taskToDelete - 1, 1);
        alert("Task Deleted!");
    } else {
        console.log("Invalid Command!");
    }
    req = prompt("Enter Your Request");
}