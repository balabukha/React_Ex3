import React from 'react';
import ReactDOM from 'react-dom';

import notes from './notes.js';
import NotesGrid from './components/NotesGrid.jsx';
import InputComp from './components/InputComp.jsx';


class WrapApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            _NOTES: this.props.initialData,
        }
    };

    componentDidMount(){
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes) {
            this.setState({
                _NOTES: localNotes
            })
        }
    }

    componentDidUpdate(){
        this._updateLocalStorage()
    };

    handleNoteAdd(newNote){
        console.log('newNote', newNote);
        let newNotes = this.state._NOTES.slice();
        console.log('newNotes!!', newNotes);

        newNotes.unshift(newNote);
        this.setState({
            _NOTES: newNotes
        })

    }

    handleNoteDelete(note){
        let noteId = note.id;
        let newNotes = this.state._NOTES.filter((note)=>
        note.id !== noteId);

        this.setState({
            _NOTES: newNotes
        })
    }

    render(){
        return(
            <div>
                <h2>NotesApp</h2>
                <InputComp onNoteAdd={this.handleNoteAdd.bind(this)}/>
                <NotesGrid
                    note={this.state._NOTES}
                    onNoteDelete={this.handleNoteDelete.bind(this)}
                />
            </div>

        )
    }

    _updateLocalStorage(){
        let notes = JSON.stringify(this.state._NOTES);
        localStorage.setItem('notes', notes);
    }

}

ReactDOM.render(
    <WrapApp initialData={notes} className="WrapApp"/>,
    document.getElementById('mount-point')
);

