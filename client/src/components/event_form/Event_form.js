import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formSubmit, clearMessage } from '../../actions/form_actions';
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
    this.props.clearMessage();
    this.setState({
      startDate: date
    });
  }

  handleInputChange(event) {
    this.props.clearMessage();
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
  }

  render() {
    return (
      <EventFormLayout
        selectedDate={this.state.startDate}
        handleInputChange={this.handleInputChange}
        handleDateChange={this.handleDateChange}
        handleSubmit={this.handleSubmit}
        status={this.props.status}
        message={this.props.message}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.formStatus.status,
    message: state.formStatus.message
  };
}

export default connect(mapStateToProps, { formSubmit, clearMessage })(
  EventForm
);
