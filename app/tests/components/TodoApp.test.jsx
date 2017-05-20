import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state handleAddTodo', () => {
    const todoText = 'Test Text';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    const todoData = {
      id: 11,
      text: 'test feature',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [todoData] });
    todoApp.handleToggle(todoData);
    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle todo completed to imcompleted', () => {
    const todoData = {
      id: 11,
      text: 'test feature',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [todoData] });
    todoApp.handleToggle(todoData);
    expect(todoApp.state.todos[0].completed).toBe(true);

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].createdAt).toNotExist();
  });
});
