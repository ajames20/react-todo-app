import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
const $ = require('jQuery')
const TestUtils = require('react-addons-test-utils')

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should call addTodo if valid todo entered', () => {
    let spy = expect.createSpy();
    let addTodoForm = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />)
    let $el = $(ReactDOM.findDOMNode(addTodoForm))

    addTodoForm.refs.todo.value = 'Get Milk'
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith('Get Milk')
  })

  it('should not call addTodo if no data for todo entered', () => {
    let spy = expect.createSpy();
    let addTodoForm = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />)
    let $el = $(ReactDOM.findDOMNode(addTodoForm))

    addTodoForm.refs.todo.value = ''
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })

})