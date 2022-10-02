import React, { Component } from 'react';

class RefsClass extends Component {
    constructor(props) {
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
}
focustextInput(){
    this.textInput.current.focus();
}
    render() {
        return (
            <div>
                <input type="text" ref={this.textInput}/>
                <button onClick={this.focusTextInput}>Focus on the text input</button>
            </div>
        );
        
    }
}
export default RefsClass;
