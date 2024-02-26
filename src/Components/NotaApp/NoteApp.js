import React, { Component } from 'react';
import ColorBox from './NoteApp Components/ColorBox';
import Note from './NoteApp Components/Note';
import './NoteApp.css'

export default class NoteApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            inputTitle: '',
            inputColor: '#fff',
            myNotes: []
        }

        this.inputColorHandler = this.inputColorHandler.bind(this);
        this.inputTitleHandler = this.inputTitleHandler.bind(this);
        this.removeInput = this.removeInput.bind(this);
        this.addNote = this.addNote.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

    }

    inputColorHandler(color) {
        this.setState({ inputColor: color })
    }

    inputTitleHandler(e) {
        this.setState({ inputTitle: e.target.value });
    }

    removeInput() {
        this.setState({ inputTitle: '' });
        this.setState({ inputColor: '#fff' });
    }

    addNote() {
        let newNotes = {
            id: this.state.myNotes.length + 1,
            note: this.state.inputTitle,
            color: this.state.inputColor
        };
        let allNotes = [...this.state.myNotes, newNotes];
        this.setState({ myNotes: allNotes });
        this.setState({ inputTitle: '' });
        this.setState({ inputColor: '#fff' });

    }

    removeTodo(userId){
        let oldNotes = [...this.state.myNotes]
        let filteredTodos = oldNotes.filter(x => x.id !== userId);
        this.setState({myNotes:filteredTodos});
        console.log('Moji');
    }

    componentDidUpdate() {
        console.log(this.state.myNotes);
    }



    render() {
        return (
            <>
                <div className="note_input">
                    <input type="text"
                        style={{ backgroundColor: this.state.inputColor }}
                        className="form-input"
                        placeholder="Enter Something...."
                        value={this.state.inputTitle}
                        onChange={e => this.inputTitleHandler(e)} />
                </div>
                <div className="btns">
                    <button
                        onClick={this.addNote}
                    >
                        <i className='fas fa-plus'></i>
                    </button>
                    <button
                        onClick={this.removeInput}>
                        <i className='fas fa-eraser	'></i>
                    </button>
                </div>

                <div className="colors-list">
                    {this.state.colors.map(x => <ColorBox
                        key={Math.random() * 10}
                        color={x}
                        onColor={this.inputColorHandler}
                    />)}
                </div>
                <div className="notes mt-5">
                    {this.state.myNotes.map(x => <Note
                        key={(x.id) * Math.random()}
                        noteTitle={x.note}
                        noteColor={x.color} 
                        id={x.id}
                        onRemove = {this.removeTodo}/>)}

                </div>
            </>

        )
    }
}
