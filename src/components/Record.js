import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import { FaRecordVinyl } from "react-icons/fa";

const Record = ({
  id,
  recordname,
  album,
  year,
  handleRemoveRecord
}) => {
  const history = useHistory();

  return (
    <Container>
    <Card className="album">
      <Card.Body>
        
        <div className="album-details">
        <Card.Title className="album-title">{recordname}</Card.Title>
          <div><strong>{album}</strong> • <em>{year}</em></div>
        </div>
        <div className="action-buttons">
        <Button className="edit-btn" variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          <FaPencilAlt />
        </Button>
        <Button className="trash-btn" variant="danger" onClick={() => handleRemoveRecord(id)}>
        <FaTrashAlt />
        </Button>
        </div>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default Record;
