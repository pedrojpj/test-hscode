import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import Modal from '.';

describe('Modal Component', () => {
  it('render without crashing', () => {
    shallow(<Modal />);
  });

  it('should launch the close modal event', () => {
    const myMock = jest.fn();

    const props = {
      chapter: {
        value: '00'
      },
      heading: {
        value: '00'
      },
      subheading: {
        value: '00'
      },
      activeButton: jest.fn()
    };

    const wrapper = mount(<Modal {...props} onCloseModal={myMock} />);
    wrapper.find('button#close-button').simulate('click');
    expect(myMock.mock.calls.length).toBe(1);
  });

  it('should launch the save modal event', () => {
    const myMock = jest.fn();

    const props = {
      chapter: {
        value: '00'
      },
      heading: {
        value: '00'
      },
      subheading: {
        value: '00'
      },
      activeButton: jest.fn()
    };

    const wrapper = mount(<Modal {...props} onSaveModal={myMock} />);
    wrapper.find('button#save-button').simulate('click');
    expect(myMock.mock.calls.length).toBe(1);
  });
});
