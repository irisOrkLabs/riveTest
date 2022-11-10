import React from "react";
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

function RiveAnimation00 (){
    const { rive, RiveComponent } = useRive({
        src: "monster-game.riv",
        autoplay: true,
        stateMachines: "Motion",
    })

    const pressedInput = useStateMachineInput(rive, "Motion", "jumping");

    return (
        <div className="RiveContainer">
            <RiveComponent onClick={() => pressedInput.fire()} />
        </div>

    );
}

export default RiveAnimation00