import React, {Component} from 'react';
import Header from './component/layout/Header';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';
import './App.css';
import {v4 as uuid} from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4,
        title: 'Take out',
        completed: false
      },
      {
        id: uuid.v4,
        title: 'Take Dinner',
        completed: false
      },
      {
        id: uuid.v4,
        title: 'Date Night',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4,
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    console.log(this.state.todos);
   return (
      <div className="App">
        <div className="container">
         <Header />
            <AddTodo addTodo={this.addTodo}/>
             <Todos todos={this.state.todos} 
              markComplete = {this.markComplete} 
              delTodo = {this.delTodo}/>
          </div>
      </div>
    );
  }
}

export default App;
