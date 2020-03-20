import React, { Component } from 'react'
import CreativeCodingTile from '../components/CreativeCodingTile';
import projects from "../../data/creative-coding.json"


export default class Home extends Component {
    render() {
        return (
            <div class="creative-coding">
                {
                    projects.map(
                        project => 
                        <CreativeCodingTile 
                            title={project.title} 
                            featuredImage={project.featuredImage} 
                        />
                    )
                }
            </div>
        )
    }
}