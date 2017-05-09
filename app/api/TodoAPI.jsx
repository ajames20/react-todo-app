import $ from 'jQuery'

export default {
  setTodos: (todos) => {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos)) // Local storage can Only store strings that is why a call to JSON.stringify is necessary
      return todos
    }
  },

  getTodos: () => {
    const stringTodos = localStorage.getItem('todos')
    let todos = []

    try {// this block checks if valid data is being passed
      todos = JSON.parse(stringTodos)
    } catch (error) {
      console.log(error)
    }

    return $.isArray(todos) ? todos : [] //Same as if else block below
  },

  filterTodos: (todos, showCompleted, searchText) => {
    let filteredTodos = todos // Const is read only and can not be used here

    // FILTER by showCompleted 
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted
    })

    // FILTER by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      const text = todo.text.toLowerCase()

      return searchText.length === 0 || text.indexOf(searchText) > -1
    })

    //SORT todos with non completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) { // if a is false && b is true
        return -1
      } else if (a.completed && !b.completed) {
        return 1
      } else {
        return 0 // -return -1 === a < b, return 1 === a > b, return 0 === no change
      }
    })

    return filteredTodos
  }
}