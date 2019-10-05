import React from 'react';
import { shallow } from 'enzyme';
import RepoRow from './repo.row.component';

const setUp = (props = {}) => {
  const component = shallow(<RepoRow {...props} />);
  return component;
};

describe('RepoRow Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const row = component.find('#row');
    expect(row.length).toBe(1);
  });
});
