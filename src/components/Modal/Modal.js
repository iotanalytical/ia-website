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

  const API_URL = process.env.REACT_APP_API_URL;

  const handleDeleteItem = () => {
    axios.delete(`${API_URL}/logs/${deleteId}`).then(() => {
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
