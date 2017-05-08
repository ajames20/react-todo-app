import React, { Component } from 'react'

import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

class TodoApp extends Component {

  constructor() {
    super()

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Leave mail on porch'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ]
    }
  }

  handleAddTodo(text) {
    console.log('new todo: ' + text)
  }

  render() {
    const { todos } = this.state

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo addTodo={this.handleAddTodo} />
      </div>
    )
  }
}

export default TodoApp