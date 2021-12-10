import React, { useContext } from 'react';
import RecordForm from './RecordForm';
import { useParams } from 'react-router-dom';
import RecordsContext from '../context/RecordsContext';

const EditRecord = ({ history }) => {
  const { records, setRecords } = useContext(RecordsContext);
  const { id } = useParams();
  const recordToEdit = records.find((record) => record.id === id);

  const handleOnSubmit = (record) => {
    const filteredRecords = records.filter((record) => record.id !== id);
    setRecords([record, ...filteredRecords]);
    history.push('/');
  };

  return (
    <div>
      <RecordForm record={recordToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditRecord;
