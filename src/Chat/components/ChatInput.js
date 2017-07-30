import React, { Component } from 'react';

class ChatInput extends Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
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
        if(this.props.form.get('message') === '') {
            alert("내용을 입력해주세요!");
        } else {
            this.props.socket.emit('postChat', {msg: this.props.form.get('message'), name: this.props.beerInfo !== null ? this.props.beerInfo.name : '카스'});
            FormActions.formChange({
                formName: 'chat',
                name: 'message',
                value: ''
            });
        }
    }

    enterPressed(e) {
        if(e.key === 'Enter') {
            this.handleSubmit();
        }
    }

    render() {
        const {
            changeHandler,
            handleSubmit,
            enterPressed
        } = this;

        return (
            <div className="input-wrapper">
                <input
                    type="text"
                    name="message"
                    value={this.props.form.get('message')}
                    onChange={changeHandler}
                    onKeyPress={enterPressed}
                />
                <button type="button" onClick={handleSubmit}>전송</button>
            </div>
        );
    }
}

export default ChatInput;