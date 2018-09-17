import React from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Notes from './Notes';
import TakeNote from './TakeNote';

export default class MyNotesApp extends React.Component {
    state = {
        dailyNotes: [{
            date: (new Date()).toLocaleDateString(),
            notes: []
        }]
    };
    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('noteData'));
        if (data) {
            this.setState(() => ({
                dailyNotes: data
            }))
        }
    }
    componentDidUpdate() {
        let data = JSON.stringify(this.state.dailyNotes);
        localStorage.setItem('noteData', data);
    }

    handleAddNewNote = newNote => {
        const today = (new Date()).toLocaleDateString(); // thời gian ngày hôm nay
        if (!newNote.title) {
            return "Enter valid title to add item"
        } else if (this.findNote(today, newNote.title).noteIndex > -1) {
            return "You shouldn't add a title twice in a day!"
        }
        const allDaysNotes = this.state.dailyNotes.length; // note của tất cả các ngày
        if (today === this.state.dailyNotes[allDaysNotes - 1].date) { // chỉ được phép tạo note mới trong ngày hôm nay
            let todayNotes = this.state.dailyNotes[allDaysNotes - 1].notes;
            if (todayNotes.findIndex(note => note.title === newNote.title) === -1) {
                this.setState(() => {
                    todayNotes.push(newNote);
                    return this.state;
                })
            }
        }
        else { // khi hôm nay chưa có note nào
            this.setState(() => {
                this.state.dailyNotes.push({
                    date: today,
                    notes: [newNote]
                })
            })
        }
    };
    handleUpdateNote = updateNote => {
        const content = updateNote.content; // nội dung mới
        const title = updateNote.title; // tiêu đề mới
        const { noteIndex, dayIndex } = this.findNote(updateNote.date, title); // chỉ số note, ngày của note
        if (noteIndex === -1 ||
            title === updateNote.oldNote.title) { // tiêu đề note mới không được phép trùng note cũ trong ngày
            const { noteIndex:oldNoteIndex } = this.findNote(updateNote.date, updateNote.oldNote.title);
            this.setState(() => {
                this.state.dailyNotes[dayIndex].notes[oldNoteIndex] = { title, content };
                return this.state;
            })
        }
    };
    handleRemoveNote = note => {
        const { noteIndex, dayIndex } = this.findNote(note.date, note.title);
        this.setState(() => {
            this.state.dailyNotes[dayIndex].notes.splice(noteIndex, 1);
            return this.state;
        })
    };
    handleRandomNote(dayIndex, noteIndex) {
        //
    }
    findNote(date, title) {
        const dayIndex = this.findDayIndex(date); // chỉ số ngày của note
        return {
            noteIndex: this.state.dailyNotes[dayIndex].notes.findIndex(note => note.title === title),
            dayIndex: dayIndex
        }
    }
    findDayIndex(date) {
        return this.state.dailyNotes.findIndex(dailyNote => dailyNote.date === date);
    }
    render() {
        return (
            <div className="app">
                <Header />
                <div>
                    <div className="container">
                        <AddNote handleAddNewNote={this.handleAddNewNote} />
                        <Notes 
                            notes={this.state.dailyNotes}
                            updateNote={this.handleUpdateNote}
                            removeNote={this.handleRemoveNote}
                        />
                        {/*<TakeNote />*/}
                    </div>
                </div>
            </div>
        )
    }
}