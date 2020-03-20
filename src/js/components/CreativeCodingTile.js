import React, { Component } from 'react'

export default class CreativeCodingTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
    }

    handleImageLoaded() {
        this.setState({ loaded: true });
    }

    render() {
        const { title, featuredImage } = this.props;

        return (
            <div className={['creative-coding-project' + (this.state.loaded ? ' loaded' : ' loading')]}>
                <div
                    className={(this.state.loaded ? 'bg-image loaded' : 'bg-image')}
                    style={{ backgroundImage: "url(" + featuredImage + ")" }}
                >
                    {!this.state.loaded > 0 &&
                        <img
                            src={featuredImage}
                            onLoad={this.handleImageLoaded.bind(this)}
                        />
                    }
                </div>
                <div className="overlay">
                    <h3 dangerouslySetInnerHTML={{ __html: title.rendered }}>

                    </h3>
                </div>
            </div>
        )
    }
}
