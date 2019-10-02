import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import RepoCard from './repo.card.component';
import { fetchApiData } from '../../redux/fetch/fetch.action';

const RepoCards = ({ fetchApiData, results }) => {
  useEffect(() => {
    fetchApiData();
  }, [fetchApiData]);

  console.log('results: ', results);

  return (
    <Container>
      {/* <RepoCard /> */}
      {results.map((card, index) => {
        return <RepoCard />;
      })}
    </Container>
  );
};

const mapStateToProps = ({ fetch: { results } }) => ({
  results
});

export default connect(
  mapStateToProps,
  {
    fetchApiData
  }
)(RepoCards);
