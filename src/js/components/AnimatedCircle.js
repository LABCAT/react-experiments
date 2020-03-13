import React, { Component } from 'react'

class AnimatedCircle extends Component {
    render() {
        const translate = 200 - (5 * this.props.index); 
        const delay = this.props.index / -10; 
        const zindex = -1 * this.props.index; 
        const widthHeight = (10 * this.props.index); 
        const halfWidthHeight = widthHeight / 2; 
        const startAnimationValue = "0 " + halfWidthHeight + " " + halfWidthHeight + "; "
        const endAnimationValue = "360 " + halfWidthHeight + " " + halfWidthHeight + "; "
        
        return (
            <g transform={"translate(" + translate + " " + translate + ")"}>
                <g class="circle">
                    <path 
                        d={"M0," + halfWidthHeight + " a1 1, 0, 0 1, " + widthHeight + " 0"} 
                        stroke="url(#gradient-1)" 
                        strokeWidth="3" 
                        fill="transparent"
                    />
                    <path 
                        d={"M0," + halfWidthHeight + " a1 1, 0, 0 0, " + widthHeight + " 0"} 
                        stroke="url(#gradient-2)" 
                        strokeWidth="3"
                        fill="transparent" 
                        style={{ zIndex: zindex, position: "relative" }}
                    />
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={"0 " + halfWidthHeight + " " + halfWidthHeight}
                        to={"360 " + halfWidthHeight + " " + halfWidthHeight}
                        begin={delay + "s"}
                        dur="8s"
                        repeatCount="indefinite"
                        keyTimes="0;0.25;0.5;1"
                        values={startAnimationValue + endAnimationValue + startAnimationValue + startAnimationValue}
                    />
                </g>
            </g>
        );
    }
}

export default AnimatedCircle;