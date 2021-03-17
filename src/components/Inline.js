import React from 'react';

function Inline() {
    const heading ={
        color: 'blue',
        fontSize: '35px'
    }
    return (
        <div>
            <h2 style={heading}>Inline</h2>
            <h1 className='error'>Error</h1>
            {/* <h1 className={styles.success}>Success</h1> */}
        </div>
    )
}

export default Inline;