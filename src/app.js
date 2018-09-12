class MyNotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DayNotes: []
        }
    }
    handleAddNote() {
        
    }
    render() {
        return (
            <div>
                <Header />
                <AddNote />
                <Notes />
                <TakeNote />
            </div>
        )
    }
}

function Header() {
    return (
        <div>
            <h1>My Notes</h1>
            <p>Let's quickly note new knowledge down every day</p>
        </div>
    )
}

class AddNote extends React.Component {
    onAddNote() {

    }
    render() {
        return (
            <div>
                <button onClick={this.onAddNote}>Add New Thing!</button>
            </div>
        )
    }
}

function Notes() {
    return (
        <ul>
            <li>
                <Date />
                <Note />
            </li>
        </ul>
    )
}

function Date() {
    return (
        <div>
            <p>DD/MM/YY:</p>
            <button>Detail</button>
        </div>
    )
}

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTitle: false,
            inputContent: false,
            update: false
        }
    }
    render() {
        return (
            <div>
                {this.state.inputTitle && <h4>Title</h4>}
                {this.state.inputContent && <textarea name="" id="" cols="30" rows="3" ></textarea>}
                {this.state.update && <button>Update</button>}
            </div>
        )
    }
}

function TakeNote() {
    return (
        <div>
            <button>Take A Note To Review</button>
        </div>
    )
}

ReactDOM.render(<MyNotesApp />, document.getElementById('app'));
