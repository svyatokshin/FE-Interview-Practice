import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Svyat',
      occupation: 'Web Developer',
      startDateTime: 0
    }
  }
  
  componentDidMount = () => {
    console.log(this.state.name);
    console.log('mounting');
    this.setState({...this.state, name: 'Svyatoslav'})
  }

  componentDidUpdate = () => {
    console.log('Updating');
  }

  handleOccupationButtonClick = (e) => {
    console.log("Clicked");
    this.setState({
      ...this.state,
      occupation: "Front End Web Dev"
    })
  }

  handleNameButtonClick = (e) => {
    console.log('clicked on name one');
    this.setState({
      ...this.state,
      name: 'Svyat'
    })
  }


  componentDidMount = (e) => {
    this.interval = setInterval(this.fetchWeather, 15000);
    console.log('did mount: ', this.state);

  }

  componentWillUnmount = (e) => {
    clearInterval(this.interval);
    console.log('willunmount: ', this.state);

  }

  render(){
    return (
    <div className="App">
     <h1>{this.state.name} works as a {this.state.occupation}</h1>
     <button onClick={this.handleOccupationButtonClick}>Click Me To Change Occupation</button>
     <br></br>
     <br></br>
     <button onClick={this.componentWillUnmount}>unMount</button>
     <br></br>
     <br></br>
     <button onClick={this.componentWillMount}>Mount</button>
     <br></br>
     <br></br>
     <button onClick={this.handleNameButtonClick}>Click Me To Change Name</button>
    </div>
  );
  }
  
}

export default App;
