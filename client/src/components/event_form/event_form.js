import React from 'react';
import DatePicker from 'react-datepicker';
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import './event_form.css';

const EventForm = props => {
  return (
    <Form horizontal>
      <FormGroup controlId="formHorizontalFirstName">
        <Col componentClass={ControlLabel} sm={3}>
          First Name
        </Col>
        <Col sm={9}>
          <FormControl type="email" placeholder="First Name" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalLastName">
        <Col componentClass={ControlLabel} sm={3}>
          Last Name
        </Col>
        <Col sm={9}>
          <FormControl type="email" placeholder="Last Name" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={3}>
          Email
        </Col>
        <Col sm={9}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalDate">
        <Col componentClass={ControlLabel} sm={3}>
          Date
        </Col>
        <Col sm={9}>
          <DatePicker
            customInput={<FormControl />}
            selected={props.selectedDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="LLL"
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export default EventForm;
