import React, { Component } from 'react';

import './Project.css'

class Project extends Component {
    render() {
        return (
            <div className="container">
                <div className="container--img" style={{ backgroundImage: this.props.image }}>
                    hello
                </div>
            </div>
        );
    }
}

export default Project;