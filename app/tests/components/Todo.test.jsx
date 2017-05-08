import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
const $ = require('jQuery')
const TestUtils = require('react-addons-test-utils')

import Todo from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  })
})