import React from "react";
import { Button } from "react-bootstrap";
import './SpinBox.scss';
import { number } from "prop-types";

type TSpintboxProps = {
    value: number,
    onChangeValue?: any,
    unit: number,
    idIncreamentBtn: any,
    idDecreamentBtn: any
}

type TSpinBoxState = {
    value: number
}

export class SpinBox extends React.Component<TSpintboxProps, TSpinBoxState> {

    constructor(props: TSpintboxProps) {
        super(props);
        // this.currentValue = this.props.value;
        this.state = {
            value : this.props.value
        };
    }

    onDecrease = (event: any) => {
        this.calculate(event.target.id);
    }

    onIncrease = (event: any) => {
        this.calculate(event.target.id);
    }

    private calculate(idElement: any): void {
        let value = this.state.value + this.props.unit;

        // get input text element that is sibling of decrement button
        let activeBtn = document.getElementById(idElement);
        let nextSiblingDecrementElement = null;
        let previousSiblingIncrementElement = null;

        if (activeBtn) {
            // @ts-ignore
            nextSiblingDecrementElement = activeBtn.nextSibling;

            // @ts-ignore
            previousSiblingIncrementElement = activeBtn.previousSibling;
        }

        // @ts-ignore
        let inputText: HTMLInputElement = nextSiblingDecrementElement || previousSiblingIncrementElement;
        if (!inputText) {
            console.log("Do not get the input text element.");
            return;
        }

        // @ts-ignore
        inputText.value = value.toString();

        this.setState({
            value
        });
    }

    onChange = (event: any) => {
        console.log('Textbox changed value with ', event);
        this.setState({
            value : event.target.value
        }); 
    }

    render() {
        return (
            <div className="text-content inc-dec">
                <Button id={this.props.idDecreamentBtn} className="decrement" onClick={this.onDecrease}>-</Button>
                <input type="text" className="inc-dec-text" value={this.state.value} onChange={this.onChange}/>
                <Button id={this.props.idIncreamentBtn} className="increment" onClick={this.onIncrease}>+</Button>
            </div>
        );
    }

}