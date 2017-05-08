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
})