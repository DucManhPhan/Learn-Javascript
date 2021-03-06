import React from 'react';
import './App.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Header } from '../Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content } from '../Content/Content';


/**
 * https://react-bootstrap.github.io/layout/grid/
 * 
 */
const App: React.FC = () => {
  return (
    <Container fluid={true}>
      <Row className=''>
        <Header />
      </Row>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <Content />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
