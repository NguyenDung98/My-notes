import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onUpdate: false
        };
        this.onChangeUpdateState = this.onChangeUpdateState.bind(this);
        this.onUpdateNote = this.onUpdateNote.bind(this);
        this.onRemoveNote = this.onRemoveNote.bind(this);
    }
    onChangeUpdateState() {
        this.setState(() => ({
            onUpdate: !this.state.onUpdate
        }))
    }
    onUpdateNote(event) {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        this.props.updateNote({
            oldNote: {
                title: this.props.title,
                content: this.props.content
            },
            date: this.props.date,
            title, content
        });
        this.onChangeUpdateState();
    }
    onRemoveNote() {
        this.props.removeNote({
            date: this.props.date,
            title: this.props.title
        })
    }
    render() {
        return (
            <div className="note">
                <h4 className="note__title">{this.props.title}</h4>
                {!this.state.onUpdate &&
                <button
                    className="button button--link"
                    onClick={this.onChangeUpdateState}
                >
                    Edit
                </button>
                }
                {!this.state.onUpdate &&
                <button
                    className="button button--link"
                    onClick={this.onRemoveNote}
                >
                    Remove
                </button>
                }
                <p className="note__content">{this.props.content}</p>
                {this.state.onUpdate &&
                    <form onSubmit={this.onUpdateNote}>
                        <input
                            className="form__title"
                            defaultValue={this.props.title}
                            name='title'
                            placeholder="Update your title"
                            type="text"
                        />
                        <textarea
                            className="form__content"
                            defaultValue={this.props.content}
                            cols="30" rows="6"
                            name="content"
                            placeholder="Update your content"
                        />
                        <button className="button">Update</button>
                    </form>
                }
            </div>
        )
    }
}