import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Sign from "../Molecules/Course/Sign";
 
const PopUp = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(() => {
      handleShow()
     }, 4000)
}, [props.urlpath]);


  return (
    <>
      <Modal className="student-coursepopup modal-width" show={show} onHide={handleClose}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="p-0"> 
          <Sign title={props.title} Downloadprospectus={props.Downloadprospectus}/>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default PopUp;