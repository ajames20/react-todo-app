import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
const $ = require('jQuery')
const TestUtils = require('react-addons-test-utils')

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

})