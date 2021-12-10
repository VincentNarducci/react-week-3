import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const RecordForm = (props) => {
  const [record, setRecord] = useState(() => {
    return {
      recordname: props.record ? props.record.recordname : '',
      album: props.record ? props.record.album : '',
      year: props.record ? props.record.year : '',
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { recordname, album, year } = record;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [recordname, album, year];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const record = {
        id: uuidv4(),
        recordname,
        album,
        year
      };
      props.handleOnSubmit(record);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'year':
        if (value === '' || parseInt(value) === +value) {
          setRecord((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setRecord((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Band / Artist</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="recordname"
            value={recordname}
            placeholder="...Fiona Apple, Fugazi, Fleet Foxes"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="album">
          <Form.Label>Album Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="album"
            value={album}
            placeholder="...Surfer Rosa, Sea Change, Salad Days "
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="year">
          <Form.Label>Release Year</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="year"
            value={year}
            placeholder="...1967, 1994, 2013"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RecordForm;
