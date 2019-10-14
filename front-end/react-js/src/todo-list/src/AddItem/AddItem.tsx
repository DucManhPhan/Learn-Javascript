import { Component } from "react";
import TodoList from "../TodoList/TodoList";
import React from "react";


type TAddItemProps = {
    closeForm: any,
    addTask: any
}

type TAddItemStates = {
    showTaskList: boolean,
    name: string
}


export default class AddItem extends Component<TAddItemProps, TAddItemStates> {

    constructor(props: TAddItemProps) {
        super(props);
        this.state = {
            showTaskList: false, 
            name: ''
        }
    }

    onChangeText = (event: any) => {
        this.setState({
            name: event.target.value
        });
    }

    onSubmit = () => {
        this.props.addTask(this.state.name);
        this.close();
    }

    close = () => {
        this.props.closeForm();
    }

    render() {
        if (this.state.showTaskList) {
            return (
                <TodoList />
            );
        } else {
            return (
                <React.Fragment>
                    <div className="container">
                        <h2>Add New Task</h2>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter task'name" className="form-control" onChange={this.onChangeText}/>
                        </div>

                        <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Add</button>
                        <button type="button" className="btn btn-default" onClick={this.close}>Back</button>
                    </div>
                </React.Fragment>
            );
        }
    }
}