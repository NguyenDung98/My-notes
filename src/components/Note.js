import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onUpdate: false
        }
        this.onChangeUpdateState = this.onChangeUpdateState.bind(this);
        this.onUpdateNote = this.onUpdateNote.bind(this);
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
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <p>{this.props.content}</p>
                {!this.state.onUpdate && <button onClick={this.onChangeUpdateState}>Edit</button>}
                {this.state.onUpdate &&
                    <form onSubmit={this.onUpdateNote}>
                        <input
                            name='title'
                            type="text"
                            defaultValue={this.props.title}
                        />
                        <textarea
                            name="content"
                            cols="30" rows="3"
                            defaultValue={this.props.content}>
                        </textarea>
                        <button>Update</button>
                    </form>
                }
            </div>
        )
    }
}