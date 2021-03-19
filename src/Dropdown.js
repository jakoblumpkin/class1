import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class Dropdown extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
        <Form >
          <h6>Filter through animals by how many horns they have.</h6>
          <Form.Row className="align-items-center">
            <Col xs="auto" className="my-1">
              <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                Preference
              </Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                onChange={this.props.updateDate.bind(this)}
              >
                <option name= "0" value="0">Choose...</option>
                <option name= "1" value="1">One Horn</option>
                <option name= "2" value="2">Two Horns</option>
                <option name= "3" value="3">three Horns</option>
              </Form.Control>
            </Col>
            <Col xs="auto" className="my-1">
            </Col>
            <Col xs="auto" className="my-1">
            </Col>
          </Form.Row>
        </Form>
      </>
    );
  }
}

export default Dropdown;
