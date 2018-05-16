import React from 'react';
import DatePicker from 'react-datepicker';
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel,
  ButtonToolbar,
  Button,
  Glyphicon,
  Alert
} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import './event_form.css';

const EventFormLayout = ({
  selectedDate,
  handleDateChange,
  handleInputChange,
  handleSubmit,
  status,
  message
}) => {
  return (
    <Form horizontal onSubmit={handleSubmit}>
      <FormGroup controlId="formHorizontalFirstName">
        <Col componentClass={ControlLabel} sm={3}>
          First Name
        </Col>
        <Col sm={9}>
          <FormControl
            type="text"
            placeholder="First Name"
            name={'firstName'}
            onChange={handleInputChange}
          />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalLastName">
        <Col componentClass={ControlLabel} sm={3}>
          Last Name
        </Col>
        <Col sm={9}>
          <FormControl
            type="text"
            placeholder="Last Name"
            name={'lastName'}
            onChange={handleInputChange}
          />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={3}>
          Email
        </Col>
        <Col sm={9}>
          <FormControl
            type="email"
            placeholder="Email"
            name={'email'}
            onChange={handleInputChange}
          />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalDate">
        <Col componentClass={ControlLabel} sm={3}>
          Date
        </Col>
        <Col sm={9}>
          <DatePicker
            customInput={<FormControl />}
            selected={selectedDate}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="DD-MM-YYYY HH:mm"
          />
        </Col>
      </FormGroup>
      <Message status={status} message={message} />
      <FormButtonsLayout />
    </Form>
  );
};

export default EventFormLayout;

const FormButtonsLayout = props => {
  return (
    <ButtonToolbar>
      <Button xs={3} type="submit" bsStyle="success">
        <Glyphicon glyph="ok" />
        <span> Save</span>
      </Button>
    </ButtonToolbar>
  );
};

const Message = ({ status, message }) => {
  if (status) {
    return <Alert bsStyle={status}>{message}</Alert>;
  } else {
    return <div />;
  }
};
