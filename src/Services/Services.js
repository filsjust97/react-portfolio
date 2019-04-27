import React, { Component } from 'react';
import './Services.css'

class Services extends Component {
    render() {
        return (
            <div className="services">
                <h3>Services</h3>
                <h2>What we Offer</h2>
                <div className="row">
                    {
                        iconObj.map((obj, i) => {
                            return (
                                <div key={i}>
                                    {
                                        <Icons key={i} icon={obj.icon} title={obj.title} description={obj.description} />
                                    }
                                </div>)
                        })
                    }
                </div>
            </div>
        );
    }
}

const iconObj = [
    {
        icon: <ion-icon name="phone-portrait"></ion-icon>,
        title: 'Responsive',
        description: 'Looks great on any screen'
    },
    {
        icon: <ion-icon name="create"></ion-icon>,
        title: 'Redesigned',
        description: 'Freshly redesigned for Bootstrap 4.'
    },
    {
        icon: <ion-icon name="thumbs-up"></ion-icon>,
        title: 'Favorited',
        description: `Millions of users Love Start Bootstrap!`,
    },
    {
        icon: <ion-icon name="help"></ion-icon>,
        title: 'Question',
        description: 'I mustache you a question',
    }
];

class Icons extends Component {
    render() {
        return (
            <div>
                <span>
                    {this.props.icon}
                </span>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Services;