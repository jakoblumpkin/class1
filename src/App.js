import React from 'react';
import Header from './header';
import Main from './main.js';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import rawData from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      updateI: 1,
    };
  }

  updateInfo = (arr) =>{
    this.setState({updateI: arr});
  }

  render(){ 
    return (
      <div>
        <p>{this.state.updateI}</p>
        <Header/>
        <Main Beastdata={rawData} updateFunction={() => this.updateInfo()} 
          answer={this.state.updateI} />
        <Footer/>
      </div>
    ); 
  }
}

export default App;
