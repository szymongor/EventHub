import React, { Component } from 'react';
import EventFormLayout from './event_form_layout';
import moment from 'moment';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleDateChange(date) {
    console.log(date.toString());
    this.setState({
      startDate: date
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state);
  }

  render() {
    return (
      <EventFormLayout
        selectedDate={this.state.startDate}
        handleInputChange={this.handleInputChange}
        handleDateChange={this.handleDateChange}
      />
    );
  }
}

export default EventForm;
