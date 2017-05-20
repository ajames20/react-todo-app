import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call addTodo if valid todo entered', () => {
    const todoItem = 'Get milk';
    const spy = expect.createSpy();
    const addTodoForm = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todo.value = todoItem;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoItem);
  });

  it('should not call addTodo if no data for todo entered', () => {
    const todoItem = '';
    const spy = expect.createSpy();
    const addTodoForm = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled(todoItem);
  });
});
