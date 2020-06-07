import React from 'react'
import classes from './Token.module.css'

const Token = (props) =>{


    return (
        <div className={classes.flexboi} id={props.ID}>
            <h3>{props.head}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export default Token;