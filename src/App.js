import React, {Component} from 'react';
import './App.css';
import './components/Todos';
import Todos from './components/Todos';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'todo2',
        completed: false
      },
      {
        id: 3,
        title: 'todo3',
        completed: false
      }
    ]
  }
  
  markComplete = (id) => {
    this.setState(this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)
    ]});
  }

  render() {
    return (
    <div className="App">
      <Header></Header>
      <AddTodo></AddTodo>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
    </div>
    );
  }
}

export default App;
