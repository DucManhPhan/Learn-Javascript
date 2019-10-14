import React, { Component } from 'react';


type TTodoItemProps = {
    name: string
}

class TodoItem extends Component<TTodoItemProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
            </tr>
        );
    }

}

export default TodoItem;