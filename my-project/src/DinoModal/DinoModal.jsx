import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function DinoModal() {
  const [lgShow, setLgShow] = useState(false);
  const [questions, setQuestions] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>btn</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Watch Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!questions && (
            <>
              <iframe
                id="Geeks3"
                width="450"
                height="350"
                src="https://www.youtube.com/embed/V5he1JXiQbg?autoplay=1"
                frameBorder="0"
                allowFullScreen
                className="mx-auto my-3"
              ></iframe>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setQuestions(true)}
                >
                  Skip to Question
                </button>
              </div>
            </>
          )}
          {questions && (
            <div>
              <div className='text-lg my-2'>What does it mean to have limited resources?</div>
              <form>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                  you have too much money
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  you can't have everything
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  you have saved enough money
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                  you can spend more money than you have
                  </label>
                </div>
                <Button type="submit">Submit Answer</Button>
              </form>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DinoModal;