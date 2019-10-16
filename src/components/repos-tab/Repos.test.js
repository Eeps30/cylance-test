import React from 'react';
import { shallow } from 'enzyme';
import Repos from './repos.component';

const setUp = (props = {}) => {
  const component = shallow(<Repos {...props} />);
  return component;
};

describe('Repos Tab Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    expect(component.exists()).toBe(true);
  });
});
