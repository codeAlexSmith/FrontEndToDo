import React, { Component } from 'react';
import Heading from './components/Heading';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';
import './App.css';

// class based component

// const tasks = ['eat', 'sleep', 'react', 'have lunch'];

class App extends Component {
  state = {
    tasks: [
      { text: 'Eat', completed: true, category: 'staying alive'},
      { text: 'Sleep', completed: false, category: 'staying alive' },
      { text: 'Climb', completed: false, category: 'staying alive' },
      { text: 'React', completed: false, category: 'staying alive' },
      { text: 'Javascript', completed: false, category: 'staying alive' },
      { text: 'gym', completed: false, category: 'staying alive' }
    ]
  };

  render() {
    return (
      <div className="App">
        <Heading name="Alex" />
        <TaskAdder addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask} addCategory = {this.addCategory} changeTaskDone = { this.changeTaskDone }/>
      </div>
    );
  }

  addTask = taskToAdd => {
    this.setState(state => ({
      tasks: [taskToAdd, ...state.tasks]
    }));
  };

  removeTask = taskToRemove => {
    this.setState(state => {
      return {
        tasks: state.tasks.filter(task => task !== taskToRemove)
      };
    });
  };

  addCategory = event => {
    this.setState((state)=>{
    this.setState.category = event.category
    console.log('hi')
    return{tasks: state.tasks}
}
    )
};
changeTaskDone = event => {
    this.setState(state =>{
        if(state.tasks[state.tasks.findIndex(task => {return task.text === event.text})].completed === false){
        state.tasks[state.tasks.findIndex(task => {return task.text === event.text})].completed = true}
        else{state.tasks[state.tasks.findIndex(task => {return task.text === event.text})].completed = false}
        return {tasks : state.tasks}
})
};
}

export default App;
