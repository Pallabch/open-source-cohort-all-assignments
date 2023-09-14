/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.list = []
  }
  add(task)
  {
    this.list.push(task);
  }
  remove(indexOfTodo)
  {
    if(indexOfTodo > -1)
      this.list.splice(indexOfTodo, 1);
  }
  update(index,updatedTodo)
  {
    if(index > -1 && index < this.list.length)
      this.list[index] = updatedTodo;
  }
  getAll()
  {
    return this.list;
  }
  get(index)
  {
    if(index > -1 && index < this.list.length)
      return this.list[index];
    else
      return null;
  }
  clear()
  {
    this.list = [];
  }
}
var todoList = new Todo();
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');

todoList.update(1, 'Updated Task 2');
console.log(todoList.get(1));

module.exports = Todo;
