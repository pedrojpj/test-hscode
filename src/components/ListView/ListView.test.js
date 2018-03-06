import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import ListView from '.';

const items = [
  {
    id: '1',
    text: 'Example1'
  },
  {
    id: '2',
    text: 'Example2'
  }
];

describe('ListView Component', () => {
  it('render without crashing', () => {
    shallow(<ListView />);
  });

  it('should render with items', () => {
    const wrapper = mount(<ListView items={items} />);
    expect(wrapper.find('ul').children().length).toBe(2);
  });

  it('should be able to click on an item', () => {
    const myMock = jest.fn();
    const wrapper = mount(<ListView items={items} onChange={myMock} />);
    wrapper
      .find('ul')
      .children()
      .first()
      .simulate('click');

    expect(myMock.mock.calls.length).toBe(1);
  });
});
