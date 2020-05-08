import React,{Component, Fragment} from 'react';
import convert from '../../functions/converter';
import Cell from '../../components/Cell/cell';
import axios from 'axios';
import ErrorHandler from '../../components/HOC/ErrorHandler/ErrorHandler';
import classes from './Cells.module.css';

class Cells extends Component{

    state={
        text:"Hello there"
    }

    componentDidMount=()=>{
        axios.get("https://braindle.firebaseio.com/text.json").then(response => {
            console.log(Object.keys(response.data))
            console.log(response)
            const number=Object.keys(response.data).length - 1;
            console.log(number)
            console.log(response.data[Object.keys(response.data)[number]])

            this.setState({
                text: response.data[Object.keys(response.data)[number]].text
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render(){
        let cells=null;
        
        cells=Array.from(this.state.text.toLowerCase()).map((letter,index)=>{
            //console.log(letter)
            if(isNaN(letter) || letter===" ")
            {
                return <Cell 
                    key={index}
                    activations={convert(letter)}
                />
            }
            else{
                return <Fragment>
                    <Cell
                        key={"hash"+index}
                        activations={convert("#")}
                    />
                    <Cell
                        key={index}
                        activations={convert(letter)}
                    />
                </Fragment>
            }
        })
        return(
            <div className={classes.container}>
                {cells}
            </div>
        )
    }
}

export default ErrorHandler(Cells,axios);