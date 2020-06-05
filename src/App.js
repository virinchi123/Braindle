import React,{Component} from 'react';
import './App.css';
import Axios from 'axios'
import Cells from './containers/Cells/Cells';
import Layout from './components/UI/Layout/Layout';
import HomeLayout from './components/HomeLayout/HomeLayout';


class App extends Component {
  state={
    text:"hello there"
  }

  componentDidMount = () => {
      Axios.get("https://braindle.firebaseio.com/text.json").then(response => {
      console.log(Object.keys(response.data))
      console.log(response)
      const number = Object.keys(response.data).length - 1;
      console.log(number)
      console.log(response.data[Object.keys(response.data)[number]])
      console.log("[APP]Component is mounted")
        console.log(response.data[Object.keys(response.data)[number]].join(""))
      this.setState({
        text: response.data[Object.keys(response.data)[number]].join("")
      })
    }).catch(error => {
      console.log(error)
    })
  }

  clickHandler = (event) => {
    console.log(event.target.value)
    console.log("hello")
    const obj = { ...this.state.text }
    console.log(obj)
    Axios.delete("https://braindle.firebaseio.com/text.json").then(res => {
      Axios.post("https://braindle.firebaseio.com/text.json", obj).then(res => {
        console.log(res);
        return res;
      })
    })
      .catch(error => {
        console.log(error);
        return error;
      })
  }

  changeHandler = (event) => {
    this.setState(
      { text:event.target.value }
    )
  }

  render(){
  /*return (
    <div className="App">
      <Layout text={this.state.text} click={this.clickHandler} change={this.changeHandler}>
        <Cells text={this.state.text}/> 
      </Layout>
    </div>
  );*/

  return(
    <div className="App">
      <HomeLayout></HomeLayout>
    </div>
  )
}
}

export default App;
