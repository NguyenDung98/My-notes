import React from 'react';

export default class TakeNote extends React.Component{
    onTakeNote() {
        alert("Hello")
    }
    render() {
        return (
            <div>
                <button
                    className="big-button"
                    onClick={this.onTakeNote}
                >
                    Random A Note To Review
                </button>
            </div>
        )
    }
}