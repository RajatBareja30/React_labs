import React from 'react';
import { shallow } from 'enzyme';
import Student from './Student';

describe('<Student />', () => {
  test('renders', () => {
    const wrapper = shallow(<Student />);
    expect(wrapper).toMatchSnapshot();
  });
});
