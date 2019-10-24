import React from "react";
import './Sidebar.scss';


export class Sidebar extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='sidebar'>
                <a href="#home" className="active">Home</a>
                <a href="#new">News</a>
                <a href="#contact">Contact</a>
                <a href="#home">About</a>
            </div>
        );
    }

}