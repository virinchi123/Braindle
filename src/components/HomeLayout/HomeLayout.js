import React from 'react';
import classes from './HomeLayout.module.css'

const HomeLayout = (props) => {
    return (
        <div className={classes.body}>
            <div className={classes.first}>
                <div className={classes.topBar}>
                    <h1>Braindle<span id={classes.dot}>.</span></h1>
                    <div className={classes.VIT}>
                        <p>VIT University, Chennai,</p>
                        <p>India</p>
                    </div>
                </div>
                <div className={classes.whiteBar}>
                    <div className={classes.left}>
                        <p>Home</p>
                        <p>Text to Braille</p>
                        <p>EPUB to Text</p>
                    </div>
                    <div className={classes.right}>

                    </div>
                </div>
                <div className={classes.centerpiece}>
                    <h1>EPUB to Text</h1>
                    <p>Braindle is capable of converting any epub file to text, which will subsequently be converted to Braille.</p>
                </div>
            </div>
            <div className = { classes.bots }>
                <p>TEXT TO BRAILLE</p>
                <h1>How We Do It</h1>
                <textarea placeholder="Enter text"></textarea>
                <button type="button">Convert Text</button>
            </div>
        </div>
    )
}

export default HomeLayout;