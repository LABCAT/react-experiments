import React, { Component } from 'react'

class CSSLoader extends Component {
    createCircles = () => {
        let circles = []

        for (let i = 1; i <= 20; i++) {
            circles.push(
                <b></b>
            );
        }
        return circles;
    }

    render() {
        return (
            <div id="css-loader">
                {this.createCircles()}
            </div>
        );
        }
}

export default CSSLoader;

