import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
    };
  }
  addOne = () =>{
    this.setState({number: this.state.number+1});
  } 

  render(){
    return ( 
      <div>
        <Card style={{ width: '24rem', backgroundColor: 'A0BAB2' }}>
          <h2>{this.props.title}</h2>
          <Image height="250px" rounded src={this.props.src}></Image>
          <button onClick={this.addOne} ><i class="fas fa-thumbs-up" ></i></button>
          <h3>Likes: {this.state.number}</h3>
          <p>{this.props.description}</p>
        </Card>

      </div>
    );
  }
}

export default HornedBeasts;
