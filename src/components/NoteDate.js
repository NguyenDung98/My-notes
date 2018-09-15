import React from 'react';

export default function NoteDate(props) {
    return (
        <div className="date">
            <p className="date__time">{props.date}</p>
            <button
                className="button button--detail"
                onClick={() => props.onToggleDetail(props.date)}
            >
                {props.textDisplay ? "Hide Detail" : "Show Detail" }
            </button>
        </div>
    )
}