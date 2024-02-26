import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
    constructor(props) {
        super(props)
    }

    colorSet(color){
        this.props.onColor(color);
    }


    render() {
        return (
            <>
                <div className="colorbox"
                    style={{ backgroundColor: `${this.props.color}` }}
                    onClick={this.colorSet.bind(this, this.props.color)}>
                </div>
            </>
        )
    }
}
