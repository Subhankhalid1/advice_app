import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component {
  state = {
    advice: ""
  };


  componentDidMount() {
    this.fetchAdvice();
    console.log("I'm Mounted")
  }


  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')

      .then((resolve) => {
        const { advice } = resolve.data.slip;
        console.log(advice);
        this.setState({ advice })
      })

      .catch((error) => {
        console.log(error);
      })

  }



  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button onClick={this.fetchAdvice} className="button"><span>Give me advice</span></button>
        </div>
        <div className="copyright"> Copyright © 2020 Rana Subhan, LLC dba AutoBots </div> 
      </div>
    );


  }

}



export default App;
