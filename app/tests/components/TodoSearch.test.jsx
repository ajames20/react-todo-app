import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
const $ = require('jQuery')
const TestUtils = require('react-addons-test-utils')

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist()
  })

  it('should call onSearch with entered input text', () => {
    const searchText = 'Cat'
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)
    const $el = $(ReactDOM.findDOMNode(todoSearch))

    todoSearch.refs.searchText.value = searchText
    TestUtils.Simulate.change(todoSearch.refs.searchText)

    expect(spy).toHaveBeenCalledWith(false, 'Cat')
  })

  it('should call onSearch with proper checked value', () => {
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)
    const $el = $(ReactDOM.findDOMNode(todoSearch))

    todoSearch.refs.showCompleted.checked = true
    TestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(true, '')
  })

})