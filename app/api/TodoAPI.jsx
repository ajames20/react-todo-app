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

    // if ($.isArray(todos)) {
    //   return todos
    // } else { 
    //   return []
    // }
  }
}