import React from 'react';
import { Container } from 'react-bootstrap';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render(){
    return (
      <div>
        <Container xs lg='2' style={{ display: 'flex'}}>
          <HornedBeasts title={'Longhorn'}
            description={'This is a Longhorn.'}
            src={'https://upload.wikimedia.org/wikipedia/commons/f/fb/Texas_longhorn.jpg'}/>


          <HornedBeasts title={'Rhino'}
            description={'This is a Rhino which is a big dangerous horned animal.'}
            src={'https://upload.wikimedia.org/wikipedia/commons/8/82/White_Baby_Rhino.jpg'}/>

          <HornedBeasts title={'Impala'}
            description={'This is a impala.'}
            src={'https://upload.wikimedia.org/wikipedia/commons/3/34/Serengeti_Impala3.jpg'}/>
        </Container>
      </div>
    );
  }
}

export default Main;
