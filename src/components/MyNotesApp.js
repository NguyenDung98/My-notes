import React from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Notes from './Notes';
import TakeNote from './TakeNote';

export default class MyNotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyNotes: [{
                date: (new Date()).toLocaleDateString(),
                notes: []
            }]
        }
        this.handleAddNewNote = this.handleAddNewNote.bind(this);
        this.handleUpdateNote = this.handleUpdateNote.bind(this);
    }
    handleAddNewNote(newNote) {
        const today = (new Date()).toLocaleDateString();
        const allDaysNotes = this.state.dailyNotes.length;
        if (today === this.state.dailyNotes[allDaysNotes - 1].date) {
            let todayNotes = this.state.dailyNotes[allDaysNotes - 1].notes;
            if (todayNotes.findIndex(note => note.title === newNote.title) === -1) {
                this.setState(() => {
                    todayNotes.push(newNote);
                    return this.state;
                })
            }
        }
        else {
            this.setState(() => {
                this.state.dailyNotes.push({
                    date: today,
                    notes: [newNote]
                })
            })
        }
    }
    handleUpdateNote(updateNote) {
        const content = updateNote.content;
        const title = updateNote.title;
        const dayIndex = this.state.dailyNotes.findIndex(dailyNote => dailyNote.date === updateNote.date);
        if (this.state.dailyNotes[dayIndex].notes.findIndex(note => note.title === updateNote.title) === -1 ||
            title == updateNote.oldNote.title) {
            const noteIndex = this.state.dailyNotes[dayIndex].notes.findIndex(note => note.title == updateNote.oldNote.title);
            this.setState(() => {
                this.state.dailyNotes[dayIndex].notes[noteIndex] = { title, content }
                return this.state;
            })
        }
    }
    render() {
        return (
            <div>
                <Header />
                <AddNote handleAddNewNote={this.handleAddNewNote} />
                <Notes 
                    notes={this.state.dailyNotes}
                    updateNote={this.handleUpdateNote}     
                />
                <TakeNote />
            </div>
        )
    }
}