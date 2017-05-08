import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

// Components
import TodoApp from 'TodoApp'

// Load Foundation
$(document).foundation()

//CSs
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Todo />,
  document.getElementById('app')
)