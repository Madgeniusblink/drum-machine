import React, { Component } from 'react';
import './App.css';
import drumPadData from './data'
import Container from './components/Container'




class App extends Component {
    state = {
        data: [],
        display: 'John smith',
    }

    componentDidMount = () => {
        this.setState({
            data: drumPadData
        })
    }
    componentWillUnmount = () => {
        this.setState({
            data: []
        })
    }

    displayClipName = (name) => {
        this.setState({
            display: name
        });
    }



    render() {

        return (
            <div className="layout-container">
                <div id="drum-machine">
                    <div id="display">
                        <h2>DjBooth</h2>
                        <Container 
                            data={this.state.data}
                            displayName={this.state.display}
                            updateDisplay={this.displayClipName} />
                    </div>
                </div>
            </div>
        );
    };
};

export default App;
