import React, { Component } from 'react'

export default class ToggleButton extends Component {
    render() {
        return (
            <button onClick={this.props.clickMe}>Click me</button>
        )
    }
}
