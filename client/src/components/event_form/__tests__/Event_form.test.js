import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import EventFormLayout from '../event_form_layout';

Enzyme.configure({ adapter: new Adapter() });

describe('EventFormLayout', () => {
  it('renders 3 inputs', () => {
    const eventForm = shallow(<EventFormLayout />);
    expect(eventForm.find('FormControl').length).toEqual(3);
  });

  it('renders 1 form', () => {
    const eventForm = shallow(<EventFormLayout />);
    expect(eventForm.find('Form').length).toEqual(1);
  });

  it('renders 1 date picker', () => {
    const eventForm = shallow(<EventFormLayout />);
    expect(eventForm.find('DatePicker').length).toEqual(1);
  });

  it('renders 1 button bar', () => {
    const eventForm = shallow(<EventFormLayout />);
    expect(eventForm.find('FormButtonsLayout').length).toEqual(1);
  });

  it('calls handleSubmit once', () => {
    let handleSubmit = spy();
    const eventForm = shallow(<EventFormLayout handleSubmit={handleSubmit} />);
    eventForm.find('Form').simulate('submit');
    console.log(handleSubmit.calledOnce);
    expect(handleSubmit.calledOnce).toEqual(true);
  });
});
