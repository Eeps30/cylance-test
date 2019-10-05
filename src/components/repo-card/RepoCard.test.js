import React from 'react';
import { shallow } from 'enzyme';
import RepoCard from './repo.card.component';

describe('RepoCard Component', () => {
  it('It should render without errors', () => {
    const component = shallow(<RepoCard />);
    console.log(component.debug());
  });
});
