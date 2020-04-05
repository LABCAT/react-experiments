import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        const { title } = this.props;
        
        return (
            <div>
                <h1>{title.rendered}</h1>
                <h2>Component Type: Home</h2>
            </div>
        )
    }
}