import React, { useContext } from 'react';
import _ from 'lodash';
import Record from './Record';
import RecordsContext from '../context/RecordsContext';

const RecordsList = () => {
  const { records, setRecords } = useContext(RecordsContext);

  const handleRemoveRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <React.Fragment>
      <div className="album-list">
        {!_.isEmpty(records) ? (
          records.map((record) => (
            <Record key={record.id} {...record} handleRemoveRecord={handleRemoveRecord} />
          ))
        ) : (
          <p className="message">No records available. Press [+] to add some.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default RecordsList;
