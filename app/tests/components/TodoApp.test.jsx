import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  it('should add todo to the todos state onHandleAddTodo', () => {
    const todoText = 'Test Text'
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />)

    todoApp.setState({ todos: [] })
    todoApp.handleAddTodo(todoText)

    expect(todoApp.state.todos[0].text).toBe(todoText)
  })

  it('should toggle completed value when handleToggle called', () => {
    const todoData = {
      id: 11,
      text: 'test feature',
      completed: false
    }
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />)

    todoApp.setState({ todos: [todoData] })
    todoApp.handleToggle(todoData)
    expect(todoApp.state.todos[0].completed).toBe(false)

    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(true)
  })
})