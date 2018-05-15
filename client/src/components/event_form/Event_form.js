import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formSubmit } from '../../actions/form_actions';
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
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.formSubmit(this.state);
    //console.log(this.state);
    //this.props.onSubmit(this.state);
  }

  render() {
    return (
      <EventFormLayout
        selectedDate={this.state.startDate}
        handleInputChange={this.handleInputChange}
        handleDateChange={this.handleDateChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, { formSubmit })(EventForm);
