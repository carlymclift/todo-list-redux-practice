import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});
