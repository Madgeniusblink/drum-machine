import React, { Component } from 'react'
import '../App.css'

export class Drumpad extends Component {

    componentDidMount = () => {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount = () => {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    playAudio = (key) => {
        const audio = document.getElementById(key)
        this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
        return audio.play()
    }

    handleKeyPress = (e) => {
        if (e.keyCode === this.props.keyCode) {
            this.playAudio(this.props.keyTrigger);
        }
    }

    render() {
        return (
            <div
                className="drum-pad"
                id={this.props.clipId}
                onClick={() => this.playAudio(this.props.keyTrigger)}>
                <audio
                    className="clip"
                    id={this.props.keyTrigger}
                    src={this.props.audioClip}
                    type={this.props.type}
                />
                {this.props.keyTrigger}
            </div>
        )
    }
}

export default Drumpad