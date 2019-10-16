import React from 'react';
import { shallow } from 'enzyme';
import Overview from './overview.component';

const setUp = (props = {}) => {
  const component = shallow(<Overview {...props} />);
  return component;
};

describe('Overview Tab Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    expect(component.exists()).toBe(true);
  });

  it('Should contain text inside tab', () => {
    expect(component.find('#popular_repositories').text()).toEqual(
      'Popular Repositories'
    );
  });
});
