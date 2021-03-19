'use strict';
import React from 'react';
import Header from './header';
import Main from './main.js';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import rawData from './data.json';
import Example from './SelectBeast';
import Dropdown from './Dropdown';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      rawData: rawData,
      show: false,
      currentIndex: null,
    };
  }


  //Modal
  updateInfo = (arr) =>{
    this.setState({currentIndex: arr, show: true});
  }
  closeModal = () =>{
    this.setState({show: false});
  }

  showor = () => {
    if(this.state.show===true) {
      return (<Example rawData={this.state.rawData[this.state.currentIndex]}
        closeModal={this.closeModal}/>);
    }
  }
  //endModal

  updateDate = (event) => {
    let hornNum=parseInt(event.target.value);
    var newOBJ=rawData.filter( function(beast) {
      return beast.horns===hornNum;
    });
    console.log(newOBJ);
    this.setState({rawData: newOBJ});
  };


  render(){
    return (
      <div>
        <Header/>
        <Dropdown updateDate={this.updateDate}/>
        {this.showor()}
        <Main Beastdata={this.state.rawData} updateFunction={this.updateInfo}
          answer={this.state.updateI} />
        <Footer/>
      </div>
    );
  }
}

export default App;
