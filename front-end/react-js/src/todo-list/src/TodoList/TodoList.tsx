import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AddItem from '../AddItem/AddItem';

type TTodoListProps = {

}

type TTodoListStates = {
    tasks: string[],
    showAddTask: boolean,
    editTask: boolean
}

class TodoList extends Component<TTodoListProps, TTodoListStates> {

    constructor(props: TTodoListProps) {
        super(props);

        this.state = {
            tasks: ['Do our homework', 
                    'Do sport'        
            ],
            showAddTask: false,
            editTask: false
        }
    }

    setStatus = () => {
        this.setState({
            showAddTask: true
        });
    }

    closeAddItem = () => {
        this.setState({
            showAddTask: false,
            editTask: false 
        });
    }

    addTask = (name: string) => {
        this.state.tasks.push(name);
        this.forceUpdate();
    }

    render() {
        if (this.state.showAddTask) {
            return (
                <AddItem closeForm={this.closeAddItem} addTask={this.addTask} />
            );
        } else {
            return (
                <div className="container">
                    <br />
                    <br />
                    <button type="button" className="btn btn-outline-primary" onClick={this.setStatus}>Add Task</button>
                    <h2>List Task</h2>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name of task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map((name: string, index: number) => {
                                    return <TodoItem name={name} />
                                })
                            }
                        </tbody>
                    </table>
                </div>

            );
        }
    }
}

export default TodoList;