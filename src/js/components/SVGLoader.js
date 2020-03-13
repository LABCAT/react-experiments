import React, { Component } from 'react'
import AnimatedCircle from './AnimatedCircle';

class SVGLoader extends Component {
    createCircles = () => {
        let circles = []

        for (let i = 1; i <= 40; i++) {
            circles.push(
                <AnimatedCircle 
                    index={i}
                    key={i}
                />
            );
        }
        return circles;
    }

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600px" height="600px" class="loader">
                <defs>
                    <linearGradient id='gradient-1'>
                        <stop stopColor='#077df8' />
                        <stop offset='1' stopColor='#74baff' />
                    </linearGradient>
                    <linearGradient id='gradient-2'>
                        <stop stopColor='#fff' />
                        <stop offset='1' stopColor='#74baff' />
                    </linearGradient>
                </defs>
                <g transform="translate(100,100)">
                    {this.createCircles()}
                </g>
            </svg>
        );
    }
}   

export default SVGLoader;