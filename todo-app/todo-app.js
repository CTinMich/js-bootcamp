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

const filters = {
  searchText: '',
  hideCompleted: false
}

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    if (!filters.hideCompleted) {
      return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    } else {return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed}
  })
  
  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  document.querySelector('#todos').appendChild(summary)

  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
  })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo-form').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.newNote.value,
    completed: false
  })
  renderTodos(todos, filters)
  e.target.elements.newNote.value = ''
})

// document.querySelector('#hide-completed').addEventListener('change', function (e) {
//   filters.hideCompleted = e.target.checked
//   renderTodos(todos, filters)
// })