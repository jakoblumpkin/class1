import React from 'react';
import { Container } from 'react-bootstrap';
import HornedBeasts from './HornedBeasts';

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
  render(){
    return (
      <div>
        <Container xs lg='2' style={{ display: 'flex'}}>
          {this.props.Beastdata.map((beast, index)=>(
            <div onClick={() => this.props.updateFunction(index)}>
              <HornedBeasts title={beast.title}
                description={beast.description}
                src={beast.image_url}/>
            </div>
          ))
          }
        </Container>
      </div>
    );
  }
}

export default Main;
