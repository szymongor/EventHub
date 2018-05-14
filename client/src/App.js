import React, { Component } from 'react';
import './App.css';
import EventForm from './components/event_form/Event_form';
import { Grid, Col, Well } from 'react-bootstrap';

class App extends Component {
  render() {
    return <AppLayout />;
  }
}

export default App;

const AppLayout = props => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">EventHub</h1>
      </header>
      <p className="App-intro">Event form</p>
      <Grid fluid={true}>
        <Col xs={12} mdOffset={3} md={6}>
          <Well>
            <EventForm />
          </Well>
        </Col>
      </Grid>
    </div>
  );
};
