import React from 'react'
import classes from './Whitebar.module.css'

const Whitebar = (props) =>{
    return(
        <div className={classes.whiteBar}>
            <div className={classes.left}>
                <p>Home</p>
                <p>Text to Braille</p>
                <p>EPUB to Text</p>
            </div>
            <div className={classes.right}>

            </div>
        </div>
    )
}

export default Whitebar