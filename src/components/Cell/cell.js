import React from 'react';
import classes from './cell.module.css'
import classnames from 'classnames/bind';

let cx= classnames.bind(classes);

const cell = (props) =>{

    let dot1=cx(
        {
            activated:props.activations[0],
            dot:true
        }
    )
    
    let dot2 = cx(
        {
            activated: props.activations[1],
            dot:true
        }
    )

    let dot3 = cx(
        {
            activated: props.activations[2],
            dot:true
        }
    )

    let dot4 = cx(
        {
            activated: props.activations[3],
            dot:true
        }
    )

    let dot5 = cx(
        {
            activated: props.activations[4],
            dot:true
        }
    )

    let dot6 = cx(
        {
            activated: props.activations[5],
            dot:true
        }
    )
    return(
        <div className={classes.container}>
            <div className={classes.row} id="1">
                <div className={dot1} id="dot1">
                    <p>.</p>
                </div>
                <div className={dot2} id="dot2">
                    <p>.</p>
                </div>
            </div>
            <div className={classes.row} id="2">
                <div className={dot3} id="dot3">
                    <p>.</p>
                </div>
                <div className={dot4} id="dot4">
                    <p>.</p>
                </div>
            </div>
            <div className={classes.row} id="3">
                <div className={dot5} id="dot5">
                    <p>.</p>
                </div>
                <div className={dot6} id="dot6">
                    <p>.</p>
                </div>
            </div>
        </div>   
    )
}

export default cell;