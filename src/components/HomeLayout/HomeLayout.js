import React from 'react';
import classes from './HomeLayout.module.css'
import Whitebar from '../Whitebar/Whitebar'
import blurbraille from '../../Braindle/static/images/blind3.jpg'
import Token from '../Token/Token'

const HomeLayout = (props) => {
    let code=null
    if(props.mode==="epub"){
        code = <div className={classes.centerpiece}>
            <h1>EPUB to Text</h1>
            <p>Braindle is capable of converting any epub file to text, which will subsequently be converted to Braille.</p>
        </div>
    }
    else{
        code=<div className={classes.mantlePiece}>
            <div className={classes.fist}>
                <div className={classes.leftboi}>
                    <h1>
                        A Smart Way to Read Braille
                    </h1>
                    <p>Assistive technology for today, bringing stories of success tomorrow.</p>
                </div>
                <div className={classes.rightboi}>
                    <img src={blurbraille} alt="blurbraille.jpg"/>
                </div>
            </div>
            <div className={classes.next}>
                <Token head="Financially Feasible"
                    ID={classes.one}
                    body="Our product is financially feasible, meets supply-demand ratios, and cuts overhead costs due to manual labour"
                    />
                <Token head="Hardware"
                    ID={classes.two}
                    body="Our use of simple but efficient hardware provides an effective solution to the imminent problem."
                />
                <Token head="Accuracy"
                    ID={classes.three}
                    body="Our hardware and software provide an accurate solution"
                />
                <Token head="Environmentally Sound"
                    ID={classes.four}
                    body="Our product doesn't contribute negatively to the environment"
                />
                <Token head="Facilitates Management"
                    ID={classes.five}
                    body="Due to the well developed software with ease of updates, management of the database, and model is uncomplicated."
                />
                <Token head="Global Potential"
                    ID={classes.six}
                    body="There is a potential market for our product all over the world, due to its accessibility and novelty"
                />
            </div>
        </div>
    }
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
                <Whitebar/>
                {code}
            </div>
            {props.children}
        </div>
    )
}

export default HomeLayout;