import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {

    // life-cycle method of React
    // ComponentDidUpdate is called to focus on the input box referred by the inputElement reference
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input 
                            placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;