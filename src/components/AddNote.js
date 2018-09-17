import React from 'react';

export default class AddNote extends React.Component {
    state = {
        inputOn: false,
        error: undefined
    };
    onAddNoteClick = () => {
        this.setState(() => ({
            inputOn: !this.state.inputOn
        }))
    };
    onAddNewNote = event => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        this.setState(() =>  {
            const error = this.props.handleAddNewNote({ title, content });
            if (!error) this.onAddNoteClick();
            return { error }
        });
    };
    render() {
        return (
            <div>
                <button 
                    className="big-button"
                    onClick={this.onAddNoteClick}
                >
                    {this.state.inputOn ? "Cancel" : "Add New Thing!"}
                </button>
                {this.state.inputOn && (
                    <form
                        className="form"
                        onSubmit={this.onAddNewNote}
                    >
                        <input 
                            className="form__title"
                            type="text" 
                            name="title"
                            placeholder="Enter your title"
                         />
                        <textarea
                            className="form__content"
                            cols="30" rows="6"
                            name="content"
                            placeholder="Content goes here!"
                        />
                        {this.state.error && <p className="form__error">{this.state.error}</p>}
                        <button className="button">Add note</button>
                    </form>
                )}
            </div>
        )
    }
}