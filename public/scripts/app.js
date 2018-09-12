"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyNotesApp = function (_React$Component) {
    _inherits(MyNotesApp, _React$Component);

    function MyNotesApp(props) {
        _classCallCheck(this, MyNotesApp);

        var _this = _possibleConstructorReturn(this, (MyNotesApp.__proto__ || Object.getPrototypeOf(MyNotesApp)).call(this, props));

        _this.state = {
            DayNotes: []
        };
        return _this;
    }

    _createClass(MyNotesApp, [{
        key: "handleAddNote",
        value: function handleAddNote() {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(AddNote, null),
                React.createElement(Notes, null),
                React.createElement(TakeNote, null)
            );
        }
    }]);

    return MyNotesApp;
}(React.Component);

function Header() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "My Notes"
        ),
        React.createElement(
            "p",
            null,
            "Let's quickly note new knowledge down every day"
        )
    );
}

var AddNote = function (_React$Component2) {
    _inherits(AddNote, _React$Component2);

    function AddNote() {
        _classCallCheck(this, AddNote);

        return _possibleConstructorReturn(this, (AddNote.__proto__ || Object.getPrototypeOf(AddNote)).apply(this, arguments));
    }

    _createClass(AddNote, [{
        key: "onAddNote",
        value: function onAddNote() {}
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.onAddNote },
                    "Add New Thing!"
                )
            );
        }
    }]);

    return AddNote;
}(React.Component);

function Notes() {
    return React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            React.createElement(Date, null),
            React.createElement(Note, null)
        )
    );
}

function Date() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "DD/MM/YY:"
        ),
        React.createElement(
            "button",
            null,
            "Detail"
        )
    );
}

var Note = function (_React$Component3) {
    _inherits(Note, _React$Component3);

    function Note(props) {
        _classCallCheck(this, Note);

        var _this3 = _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));

        _this3.state = {
            inputTitle: false,
            inputContent: false,
            update: false
        };
        return _this3;
    }

    _createClass(Note, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.inputTitle && React.createElement(
                    "h4",
                    null,
                    "Title"
                ),
                this.state.inputContent && React.createElement("textarea", { name: "", id: "", cols: "30", rows: "3" }),
                this.state.update && React.createElement(
                    "button",
                    null,
                    "Update"
                )
            );
        }
    }]);

    return Note;
}(React.Component);

function TakeNote() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            null,
            "Take A Note To Review"
        )
    );
}

ReactDOM.render(React.createElement(MyNotesApp, null), document.getElementById('app'));
