import React,{useState} from 'react';
import classes from './Layout.module.css';
import Toph from '../../../Assets/images/toph.jpg';
import Axios from 'axios';

const Layout = (props) =>{

    const [brailleState,updateState]=useState({
        text:""
    })

    const changeHandler=(event)=>{
        updateState({
            text:event.target.value
        })
    }

    const clickHandler=(event)=>{
        console.log(event.target.value)
        const obj = {...brailleState}
        console.log(obj)
        Axios.delete("https://braindle.firebaseio.com/text.json").then(res=>{
            Axios.post("https://braindle.firebaseio.com/text.json", obj).then(res => {
                console.log(res);
                return res;
            })
        })
        .catch(error=>{
            console.log(error);
            return error;
        })
    }

    return(
        <div className={classes.container}>
            <div className={classes.Toolbar}>
                <div className={classes.logoboi}>
                    <h2>Braindle</h2>
                    <img src={Toph} alt="You can't see this" />
                </div>
                <div className={classes.inputDiv}>
                    <input type="text" placeholder="update and refresh" onChange={changeHandler}></input>
                    <button type="submit" onClick={clickHandler}>Translate</button>
                </div>
            </div>
            <div className={classes.component}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;