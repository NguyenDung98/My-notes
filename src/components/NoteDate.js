import React from 'react';

export default function NoteDate(props) {
    return (
        <div>
            <p>{props.date}</p>
            <button onClick={() => props.onToggleDetail(props.date)}>
                {props.textDisplay ? "Hide Detail" : "Show Detail" }
            </button>
        </div>
    )
}