import React from "react";

class TaskAdder extends React.Component {
    state = {
        newTask: "",
        newCategory: ""};

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-task">New Task:</label>
                
                <input
                    id="newTask"
                    type="text"
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    placeholder={'Insert task here'}
                />
                <label htmlFor="new-category"> Task Category:</label>
                <input
                    id="newCategory"
                    type="text"
                    value={this.state.newCategory}
                    onChange={this.handleChange}                    
                    placeholder={'Insert category here'}
                />
                <button type="submit">Add Task</button>
            </form>
        );
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask({ text: this.state.newTask, completed: false , category: this.state.newCategory});
        this.setState({
            newTask: "",
            newCategory: ""
        });
    };

    handleChange = event => {
    
        const { value, id} = event.target;


        
        if (id === 'newCategory'){
            event.cat = value 
        }
        else {event.task = value}
        this.setState({
            [id]: value,
            ...this.setState,
        });
    };

    
}

export default TaskAdder;
