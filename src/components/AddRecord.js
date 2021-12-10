import React, { useContext } from 'react';
import RecordForm from './RecordForm';
import RecordsContext from '../context/RecordsContext';

const AddRecord = ({ history }) => {
  const { records, setRecords } = useContext(RecordsContext);

  const handleOnSubmit = (record) => {
    setRecords([record, ...records]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <RecordForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddRecord;
