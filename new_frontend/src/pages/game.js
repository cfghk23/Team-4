import { useState, useEffect } from "react";
import ChromeDinoGame from "react-chrome-dino";
import React from "react";
import Layout from "@theme/Layout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function game() {
  const [count, setCount] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [questions, setQuestions] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00"
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
    return () => {
      document.removeEventListener("keydown", detectKeyDown, true);
    };
  }, []);

  const detectKeyDown = (e) => {
    console.log(e.key);

    if (e.key === " ") {
      setLgShow(true);
    }
  };

  return (
    <Layout>
      <ChromeDinoGame />

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {!questions ? "Watch Video" : "Answer Question"}
          </Modal.Title>
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
                <Button type="submit" onClick={() => setQuestions(true)}>
                  Skip to Question
                </Button>
              </div>
            </>
          )}
          {questions && (
            <div>
              <div className="text-lg my-2">
                What does it mean to have limited resources?
              </div>
              <form>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    you have too much money
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    you can't have everything
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    you have saved enough money
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    you can spend more money than you have
                  </label>
                </div>
                <Button type="submit" className="mt-2">
                  Submit Answer
                </Button>
              </form>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Layout>
  );
}

export default game;