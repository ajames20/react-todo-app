import React, { Component } from 'react'

class AddTodo extends Component {
  onFormSubmit = (e) => {
    e.preventDefault()

    let todo = this.refs.todo.value

    if (todo.length > 0) {
      this.refs.todo.value = ''
      this.props.addTodo(todo)
    } else {
      this.refs.todo.focus()
    }
  }
  render() {
    return (
      <div className="text-center add-todo">
        <form ref="form" onSubmit={this.onFormSubmit}>
          <input type="text" ref="todo" placeholder="What do you need todo?" />
          <button className="button expanded add-todo" >Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo