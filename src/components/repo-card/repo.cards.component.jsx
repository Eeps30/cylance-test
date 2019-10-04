import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import RepoCard from './repo.card.component';
import { fetchApiData } from '../../redux/fetch/fetch.action';
import './repo.cards.component.css';

const RepoCards = ({ fetchApiData, results }) => {
  //fetch the data used for each repo card using
  //an action from Redux
  useEffect(() => {
    fetchApiData();
  }, [fetchApiData]);

  //get first 6 entries of the API call results,
  //and sort them by stargazers_count
  const sortedResults = results.slice(0, 6).sort((a, b) => {
    if (a.stargazers_count > b.stargazers_count) {
      return -1;
    } else {
      return 1;
    }
  });

  //use repo.card.component to create elements
  //needed on Overview tab
  return (
    <Row id='repo_row'>
      {sortedResults.map((card, index) => {
        return (
          <RepoCard
            key={card.id}
            name={card.name}
            description={card.description}
            forks={card.forks}
            stars={card.stargazers_count}
            url={card.html_url}
          />
        );
      })}
    </Row>
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
