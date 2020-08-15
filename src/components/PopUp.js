import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import React, {useState} from 'react'

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
          Click Me
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input type="text" placeholder="Username" />
              <input type="pass" placeholder="Password" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Login
            </Button>
            <Button variant="primary" onClick={handleClose}>
              SignUp
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Example;