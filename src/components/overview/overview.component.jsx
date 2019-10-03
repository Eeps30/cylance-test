import React from 'react';
import RepoCards from '../repo-card/repo.cards.component';
import Container from 'react-bootstrap/Container';
import './overview.component.css';

const Overview = () => {
  return (
    <Container>
      <h4 id='popular_repositories'>Popular Repositories</h4>
      <RepoCards />
    </Container>
  );
};

export default Overview;
