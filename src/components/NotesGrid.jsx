import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note.jsx';


class NotesGrid extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        let grid = this.refs.grid;
        var elem = document.querySelector('.note');
        this.msnry = new Masonry( grid, {
            columnWidth: 10,
        });
    }
    componentDidUpdate(prevProps){
        if (this.props.note.length !== prevProps.note.length){
            this.msnry.reloadItems();
            this.msnry.layout()
        }
    };
    render(){
        let onNoteDelete = this.props.onNoteDelete;

        return(
            <div ref="grid">
                {
                    this.props.note.map((note)=><Note
                        key={note.id}
                        date={note.date}
                        style={note.style}
                        onDelete={onNoteDelete.bind(null, note)} // todo
                    >{note.note}</Note>)
                }
            </div>

        )
    }
}

export default NotesGrid;