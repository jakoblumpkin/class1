import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import useState from 'react';
//import setState from 'react';


function Example(props) {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.rawData.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={props.rawData.image_url} height='300px;'></img>
          <p>{props.rawData.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <div onClick={props.closeModal}><Button variant="secondary">Close</Button></div>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

//render(<Example />);
export default Example;
