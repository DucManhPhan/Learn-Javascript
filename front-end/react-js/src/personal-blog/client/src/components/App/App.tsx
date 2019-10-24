import React from 'react';
import logo from '../../logo.svg';
import './App.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Header } from '../Header/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
