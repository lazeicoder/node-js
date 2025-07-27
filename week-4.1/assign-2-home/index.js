const { Command } = require('commander');
const fs = require('fs').promises;
const path = require('path');

const program = new Command();

// creating the json file
const filePath = path.join(__dirname, 'files', 'tododata.json');

const readTodos = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

const writeTodo = async (todo) => {
    await fs.writeFile(filePath, JSON.stringify(todo, null, 2));
}

program
    .command('add <task>')
    .description('Adds a new Todo')
    .action(async (task) => {
        const todo = await readTodos();
        const nextId = todo.length > 0? todo[todo.length - 1].id + 1: 1;
        const timeAdded = new Date().toLocaleString();
        todo.push({id: nextId, task, timeAdded, done: false });
        await writeTodo(todo);
        console.log(`New todo has been added: ${task}`);
    });

program.command('list')
    .description('Lists all the todos')
    .action(async () => {
        const todo = await readTodos();
        if (todo.length === 0) {
            console.log(`No todos available!! Add some.`);
        }else {
            console.log(`Your Todos:`);
            todo.forEach( (doTodo) => {
                console.log(`${doTodo.id} - ${doTodo.task} - ${doTodo.done ? 'Completed!!': 'Not Done yet!!'}`);
            });
        }
    });

program .command('done <id>')
    .description('Marks a todo as completed')
    .action(async (id) => {
        const todos = await readTodos();
        const todo = todos.find(t => t.id === parseInt(id));

        if (!todo) {
            console.log(`Todo with id : ${id} does not exists`);
            return;
        }

        todo.done = true;
        await writeTodo(todos);
        console.log(`Todo with id: ${id} is completed!!`);
    })

program.parse();