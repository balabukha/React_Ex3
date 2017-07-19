import React from 'react';
import ReactDOM from 'react-dom';

function Note(props){
    let style = {backgroundColor: props.style};

    // onDelete(event){
    //     console.log(event.target);
    // }
return(
    <div className="note" style={style}>
        <p>{props.date}</p>
        <p>{props.children}</p>
        <span onClick={props.onDelete}>delete</span>
    </div>

)


}

export default Note;