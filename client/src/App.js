import React, { Component } from 'react';
import './App.css';
import EventForm from './components/event_form/event_form';
import { Grid, Col, Well } from 'react-bootstrap';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
  }

  render() {
    return <AppLayout selectedDate={this.state.startDate} />;
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
            <EventForm selectedDate={props.selectedDate} />
          </Well>
        </Col>
      </Grid>
    </div>
  );
};
