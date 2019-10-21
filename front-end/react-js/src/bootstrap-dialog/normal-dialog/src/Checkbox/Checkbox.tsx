import React from "react";
import './Checkbox.scss';


type TCheckboxProps = {
    name?: string,
    path: string
}

export class Checkbox extends React.Component<TCheckboxProps, {}> {

    constructor(props: TCheckboxProps) {
        super(props);
    }

    render() {
        return (
            <label className="container">
                <img src={this.props.path} alt="Image Font Type"/>
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
        );
    }
}