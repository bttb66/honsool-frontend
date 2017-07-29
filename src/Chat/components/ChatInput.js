import React, { Component } from 'react';

class ChatInput extends Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeHandler(ev) {
        const { FormActions } = this.props;

        FormActions.formChange({
            formName: 'chat',
            name: ev.target.name,
            value: ev.target.value
        });
    }

    handleSubmit() {
        console.log(this.props.form.get('message'));
        const { FormActions } = this.props;
        this.props.socket.emit('postChat', this.props.form.get('message'));
        // FormActions.formChange({
        //     formName: 'chat',
        //     name: 'message',
        //     value: ''
        // });
    }

    render() {
        const {
            changeHandler,
            handleSubmit
        } = this;

        return (
            <div>
                <input
                    type="text"
                    name="message"
                    onChange={changeHandler}
                />
                <button type="button" onClick={handleSubmit}>전송</button>
            </div>
        );
    }
}

export default ChatInput;