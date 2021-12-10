import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddRecord from '../components/AddRecord';
import RecordsList from '../components/RecordsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditRecord from '../components/EditRecord';
import RecordsContext from '../context/RecordsContext';

const AppRouter = () => {
  const [records, setRecords] = useLocalStorage('records', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <RecordsContext.Provider value={{ records, setRecords }}>
            <Switch>
              <Route component={RecordsList} path="/" exact={true} />
              <Route component={AddRecord} path="/add" />
              <Route component={EditRecord} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </RecordsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
