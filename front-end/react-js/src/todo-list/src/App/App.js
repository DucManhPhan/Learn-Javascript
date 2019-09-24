import React, {Component} from 'react';
import './App.css';
import TodoList from '../Todo-list/TodoList';
import TodoItems from '../Todo-list/TodoListItem';


class App extends Component {

    constructor() {
        super();

        this.state = {
            items: [],
            currentItem: {text: '', key: ''}
        }

        this.inputElement = React.createRef();
    }

    handleInput = e => {
        const itemText = e.target.value;
        const currentItem = {text: itemText, key: Date.now()};
        this.setState({
            currentItem
        });
        
        console.log("Handle input.");
    }

    addItem = e => {
        e.preventDefault();
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
            console.log(newItem)
            const items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItem: { text: '', key: '' },
            })
        }

        console.log("Add item to List.");
    }

    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key != key;
        });

        this.setState({items: filteredItems});
    }

    render() {
        return (
            <div className="App">
                <TodoList addItem={this.addItem} 
                          inputElement={this.inputElement}
                          handleInput={this.handleInput}
                          currentItem={this.state.currentItem} 
                />
                <TodoItems entries={this.state.items} />
            </div>
        );
    }

}

export default App;