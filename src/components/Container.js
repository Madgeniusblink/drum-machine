import React from 'react'
import DrumPad from './Drumpad'
import Display from './Display'
import "../App.css"

export const Container = ({displayName, updateDisplay, data}) => {
    return (
        <div className="drum-pad-container">
            <Display
                display={displayName}
            />
            <div className="drum-pad-row">
            {
                data.map(({ keyTrigger, audioClip, type, id, keyCode }, i) => {
                    return (
                        <div key={i}>
                            <DrumPad
                                clipId={id}
                                keyTrigger={keyTrigger}
                                audioClip={audioClip}
                                type={type}
                                keyCode={keyCode}
                                updateDisplay={updateDisplay}
                            />
                        </div>

                    )
                })
            }
            </div>
        </div>
    )
}

export default Container;