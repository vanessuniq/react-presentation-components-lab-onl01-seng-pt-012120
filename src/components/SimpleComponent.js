import React, { Component } from 'react';

class SimpleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {mood: 'happy'}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let mood;
        this.state.mood === 'happy' ? mood = 'sad' : mood = 'happy'
        this.setState({mood: mood})
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent;
