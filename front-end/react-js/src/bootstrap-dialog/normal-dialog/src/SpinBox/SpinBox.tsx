import React from "react";
import { Button } from "react-bootstrap";
import './SpinBox.scss';
import { number } from "prop-types";

type TSpintboxProps = {
    value?: number,
    onChangeValue?: any
}

export class SpinBox extends React.Component<TSpintboxProps, {}> {

    state = {
        value: 0
    }

    constructor(props: TSpintboxProps) {
        super(props);
        this.setState({
            value: this.props.value
        })
    }

    onDecrease = () => {
        let value: number = this.state.value - 1;
        this.setState({
            value
        });

        let inputText = document.getElementsByTagName("input")[0];
        inputText.innerText = value.toString();
    }

    onIncrease = () => {
        let value: number = this.state.value + 1;
        this.setState({
            value
        });
    }

    render() {
        return (
            <div className="text-content inc-dec">
                <Button className="decrement" onClick={this.onDecrease}>-</Button>
                <input type="text" className="inc-dec-text" value={this.props.value} onChange={this.props.onChangeValue}/>
                <Button className="increment" onClick={this.onIncrease}>+</Button>
            </div>
        );
    }

}