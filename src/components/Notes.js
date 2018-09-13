import React from 'react';
import Note from './Note';
import NoteDate from './NoteDate'

export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onDetails: [this.props.notes.map(() => true)] 
        }
        this.onToggleDetail = this.onToggleDetail.bind(this);
    }
    onToggleDetail(date) {
        const index = this.props.notes.findIndex(notes => notes.date === date)
        const currentState = this.state.onDetails[index];
        this.setState(() => { 
            this.state.onDetails[index] = !currentState;
            return this.state;
        })
        return !currentState;
    }
    render() {
        let allNotes = [];
        for (let i = 0; i <  this.props.notes.length; i++) {
            const { date, notes } = this.props.notes[i];
            let dayNotes = [];
            if (notes.length) {
                dayNotes = notes.map(note => (
                    <Note
                        key={note.title}
                        date={date}
                        title={note.title}
                        content={note.content}
                        updateNote={this.props.updateNote}
                    />
                ));
                allNotes.push((
                    <div key={date} >
                        <NoteDate 
                            date={date} 
                            onToggleDetail={this.onToggleDetail}
                            textDisplay={this.state.onDetails[i]}
                        />
                        {this.state.onDetails[i] && dayNotes}
                    </div>
                ))
            }
        }
        return (
            <div>
                {allNotes}
            </div>
        )    
    }
}