import React from 'react';
import './App.scss';
import { CustomDialog } from '../Dialog/CustomDialog';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'; // bootstrap/dist/css/bootstrap.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <CustomDialog />
    </div>
  );
}

export default App;
