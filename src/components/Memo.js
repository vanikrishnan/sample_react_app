import React from 'react'

function Memo({name}) {
    console.log("Memo Comp render")
    return (
        <div>
            Memo Component {name}
        </div>
    )
}

export default React.memo(Memo);