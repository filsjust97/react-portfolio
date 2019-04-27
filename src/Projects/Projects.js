import React, { Component } from 'react';

import './Projects.css';

import Project from './Project';

import Background from '../img/portfolio-1.jpg';

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <div className="information">
                    <h3>
                        Portfolio
                    </h3>
                    <h2>
                        Recent Projects
                    </h2>
                </div>
                <div className="recent">
                    <Project image={'url(' + Background + ')'}></Project>
                </div>
            </div>
        );
    }
}

export default Projects;