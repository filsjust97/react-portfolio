import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Services from './Services/Services';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation logoTitle="Filipe's Portfolio" />
                <Header title="Stylish Portfolio" button="Find Out More"/>
                <Services />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
