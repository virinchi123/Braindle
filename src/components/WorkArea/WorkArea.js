import React from 'react'
import classes from './WorkArea.module.css';
import Cells from '../../containers/Cells/Cells'

const WorkArea = (props ) =>{
    return(
        <div className={classes.bots}>
            <p id= {classes.text}>TEXT TO BRAILLE</p>
            <h1>How We Do It</h1>
            <textarea placeholder="Enter text" onChange={props.change}></textarea>
            <button type="button" onClick={props.click}>Convert Text</button>
            <Cells text={props.text}/>
        </div>
    )
}

export default WorkArea;