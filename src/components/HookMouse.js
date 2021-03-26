import React, {useState, useEffect} from 'react';

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("Mouse Position")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("UseEffect")
        window.addEventListener('mousemove', logMousePosition)

        return (() => {
            console.log("Component Unmounting code");
            window.removeEventListener('mousemove', logMousePosition)
        })
    }, [])

    return (
        <div>
            <h1>X -{x} Y - {y}</h1>
        </div>
    )
}

export default HookMouse