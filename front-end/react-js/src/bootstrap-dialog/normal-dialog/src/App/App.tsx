import React from 'react';
import logo from '../logo.svg';
import './App.scss';
import { CustomDialog } from '../Dialog/CustomDialog';

const App: React.FC = () => {
  return (
    <div className="App">
        <CustomDialog />
    </div>
  );
}

export default App;
