import React,{useEffect} from 'react';
import classes from './Layout.module.css';
import Toph from '../../../assets/images/toph.jpg';


const Layout = (props) =>{

    const string = props.text
    useEffect(()=>{
        console.log("[LAYOUT]useEffect is running")
    },[string])

    return(
        <div className={classes.container}>
            <div className={classes.Toolbar}>
                <div className={classes.logoboi}>
                    <h2>Braindle</h2>
                    <img src={Toph} alt="You can't see this" />
                </div>
                <div className={classes.inputDiv}>
                    <input type="text" placeholder="update and refresh" onChange={props.change}></input>
                    <button type="submit" onClick={props.click}>Save</button>
                </div>
            </div>
            <div className={classes.component}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;