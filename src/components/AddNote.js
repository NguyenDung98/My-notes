import React from 'react';

export default class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputOn: false
            // error state
        }
        this.onAddNoteClick = this.onAddNoteClick.bind(this);
        this.onAddNewNote = this.onAddNewNote.bind(this);
    }
    onAddNoteClick() {
        this.setState(() => ({
            inputOn: !this.state.inputOn
        }))
    }
    onAddNewNote(event) {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        this.props.handleAddNewNote({ title, content })
        this.onAddNoteClick();
    }
    render() {
        return (
            <div>
                <button onClick={this.onAddNoteClick}>
                    {this.state.inputOn ? "Cancel" : "Add New Thing!"}
                </button>
                {this.state.inputOn && (
                    <form onSubmit={this.onAddNewNote}>
                        <input type="text" name="title" />
                        <textarea name="content" id="" cols="30" rows="3"></textarea>
                        <button>Add note</button>
                    </form>
                )}
            </div>
        )
    }
}