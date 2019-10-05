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

  it('It should render without errors', () => {
    const card = component.find('#card');
    expect(card.length).toBe(1);
  });

  it('Should contain two icons', () => {
    const icon = component.find('.icon');
    expect(icon.length).toBe(2);
  });
});
