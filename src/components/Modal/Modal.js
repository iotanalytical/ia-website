import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import axios from "axios";

const IOTModal = ({
  itemName,
  deleteId,
  deleteItemSuccess,
  show,
  handleClose,
}) => {

  const handleDeleteItem = () => {
    axios.delete(`http://localhost:5050/logs/${deleteId}`).then(() => {
      handleClose();
      deleteItemSuccess((prevState) => !prevState);
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Delete ${itemName} log?`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Please confirm that you’d like to delete the ${itemName} log from the node logs. You won’t be able to undo this action.`}</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteItem}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default IOTModal;
