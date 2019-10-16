import React from 'react';
import { shallow } from 'enzyme';
import RepoCard from './repo.card.component';

const setUp = (props = {}) => {
  const component = shallow(<RepoCard {...props} />);
  return component;
};

describe('RepoCard Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    expect(component.exists()).toBe(true);
  });

  it('Should contain two icons', () => {
    const icon = component.find('.icon');
    expect(icon.length).toBe(2);
  });
});
