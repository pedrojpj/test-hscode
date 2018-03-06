import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import Code from '.';

describe('Code Component', () => {
  it('render without crashing', () => {
    shallow(<Code name="code" />);
  });

  it('Should output the onChange event when you receive a value', () => {
    const mockValue = '121212';
    const myMock = jest.fn();
    const wrapper = mount(<Code name="code" value={mockValue} name="code" onChange={myMock} />);
    expect(myMock.mock.calls.length).toBe(1);
  });

  it('Should not emit the onChange event without value', () => {
    const mockValue = '';
    const myMock = jest.fn();
    const wrapper = mount(<Code name="code" value={mockValue} name="code" onChange={myMock} />);
    expect(myMock.mock.calls.length).toBe(0);
  });

  it('Should output the onChange event when testing by setting the props onChange', () => {
    const mockValue = '';
    const myMock = jest.fn();
    const wrapper = mount(<Code name="code" value={mockValue} name="code" onChange={myMock} />);

    wrapper.setProps({ value: '11111' });

    expect(myMock.mock.calls.length).toBe(1);
  });
});
