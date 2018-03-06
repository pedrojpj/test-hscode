import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import App from '.';

describe('App Component', () => {
  it('render without crashing', () => {
    shallow(<App />);
  });
});
