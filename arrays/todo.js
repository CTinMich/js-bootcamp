const todos = [
  {
    text: 'Todo: let the dog out',
    completed: true
  }, 
  {
    text: 'Todo: pet the dog',
    completed: false
  },
  {
    text: 'Todo: give the dog water',
    completed: true,
  },
  {
    text: 'Todo: give the dog food',
    completed: false
  },
  {
    text: 'Todo: play with the dog',
    completed: false
  }
]

const sortTodos = function (todos) {
  todos.sort( function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

const deleteTodo = function (todos, todoText) {
   const index = todos.findIndex(function (todos) {
     return todos.text.toLowerCase() === todoText.toLowerCase()
   })
  
   if (index > -1) {
    todos.splice(index, 1)
  }
}

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Todo: pet the d0g')
// console.log(todos)