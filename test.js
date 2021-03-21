const uuid = require('uuid');
const normalizr = require('normalizr');
const {v4} = uuid;
const fakeDatabase = {
    todos: [
        {
            id: v4(),
            text: 'hey',
            completed: true
        },
        {
            id: v4(),
            text: 'ho',
            completed: true
        },
        {
            id: v4(),
            text: 'let us go',
            completed: true
        }
    ]
}

const todo = normalizr.schema.Entity('todo');

const todos = normalizr.schema.Array(todo);

const data = normalizr.schema.Object({
    todos
})

const list = normalizr.normalize(fakeDatabase, data);

console.log(list);