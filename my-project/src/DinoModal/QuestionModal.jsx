import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


function QuestionModal({setDinoModal, lgShow, setLgShow}) {

  return (
    <>

      

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Questions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <fieldset>
          <legend>Select a maintenance drone:</legend>

          <div>
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label >Huey</label>
          </div>

          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label >Dewey</label>
          </div>

          <div>
            <input type="radio" id="louie" name="drone" value="louie" />
            <label >Louie</label>
          </div>
        </fieldset>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default QuestionModal;