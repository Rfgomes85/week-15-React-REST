import React, {useState, useEffect}  from "react";

export default function sampleHook() {
    const [isOn, setIsOn] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        document.title = isOn ? 'ON' : 'OFF';
    });
    return(
        <div>
            <p>{isOn ? 'Yes, it is on!' : 'OFF'}</p>
            <p>Times Clicked {clickCount} </p>
            <button onClick={() => {
                setIsOn(!isOn);
                setClickCount(clickCount + 1);
            }
            }>Switch</button>

        </div>
    );
}