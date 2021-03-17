import React from 'react';
import './myStyles.css'
import styles from './appStyles.module.css';
import Inline from './Inline';
function StyleSheets(props) {
    let className = props.primary ? 'primary': ''
    // return (
    //     <div>
    //         <h1 className={className}>StyleSheets</h1>
    //     </div>
    // )

    // if need to use multiple classes use template literals

    return (
        <div>
            <h1 className={`${className} font-xl`}>StyleSheets</h1>
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>
            <Inline />
        </div>
    )

}
export default StyleSheets;