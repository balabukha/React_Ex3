import React from 'react';
import ReactDOM from 'react-dom';

class InputComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }

    }

    handleChangeText(event){
        this.setState({
            text: event.target.value
        });
        console.log(this.state.text)
    }

    handleNoteAdd(){
        let date = new Date();
        let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        let month = date.getMonth()+1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth()+1;

        let newNote = {
                note: this.state.text,
                color: 'yellow',
                id: Date.now(),
                date: `${day}.${month}.${date.getFullYear()}`
            }
        ;
        this.props.onNoteAdd(newNote);
        // главное вызвать функцию в props
        console.log(newNote);
        this.setState({
            text: ''
        })
    }
    render(){
        return(
            <div className="noteEditorWrap">
                <textarea
                    className="textEntering"
                    placeholder="Enter your note here..."
                    rows="3"
                    value={this.state.text}
                    onChange={this.handleChangeText.bind(this)}
                ></textarea>
                <button className="textEnteringButton" onClick={this.handleNoteAdd.bind(this)}>ADD</button>
                {/*!!!*/}
            </div>

        )
    }

};

export default InputComp;