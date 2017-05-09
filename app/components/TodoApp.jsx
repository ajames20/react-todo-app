import React, { Component } from 'react'
import uuid from 'node-uuid'


// Components
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'

// Modules I have built
import TodoAPI from 'TodoAPI'

class TodoApp extends Component {

  constructor() {
    super()

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos)
  }

  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  }

  handleToggle = (id) => {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState({ todos: updatedTodos })
  }

  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  render() {
    const { todos, showCompleted, searchText } = this.state
    const filterdTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filterdTodos} onToggle={this.handleToggle} />
        <AddTodo addTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp