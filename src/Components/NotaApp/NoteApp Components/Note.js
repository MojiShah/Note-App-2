import React, { Component } from 'react'

import './Note.css'

export default class Note extends Component {

    constructor(props) {
        super(props);
    }

    clickHandler(userId) {
        console.log('button clicked');
        this.props.onRemove(userId);
    }

    render() {
        return (
            <>
                <div className='NoteClass' style={{ backgroundColor: `${this.props.noteColor}` }}>
                    <span>
                        {this.props.noteTitle}
                    </span>
                    <button onClick={this.clickHandler.bind(this, this.props.id)}><i className='fas fa-trash-alt'></i></button>
                </div>
            </>
        )
    }
}
