import React from 'react';
import { Container } from 'react-bootstrap';
import HornedBeasts from './HornedBeasts';
import Example from './SelectBeast';

class Main extends React.Component {
  constructor (props){
    super(props);
    this.state={
      show: false,
      src: null,
      url: null,
      description: null,
    };
  }
  

  show = () => {
    if (this.state.show===true){
      return <Example/>;
    }
  }


  render(){
    return (
      <div>
        {this.show()}
        <Container xs lg='2' style={{ display: 'flex'}}>
          {this.props.Beastdata.map((beast)=>(
            <div onClick={ () => this.props.updateFunction()}>
              <HornedBeasts title={beast.title}
                description={beast.description}
                src={beast.image_url}/>
            </div>
          ))
          }
          
           
        </Container>
        <button onClick={this.props.updateFunction}>Click hear</button>
        <h1>Answer: {this.props.answer}</h1>
      </div>
    );
  }
}

export default Main;
