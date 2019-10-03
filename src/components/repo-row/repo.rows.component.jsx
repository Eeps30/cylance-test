import React from 'react';
import RepoRow from './repo.row.component';
import { connect } from 'react-redux';

const RepoRows = ({ results }) => {
  //use repo.row.component to create row element
  //for each entry in results array
  return (
    <div>
      {results.map((card, index) => {
        return (
          <RepoRow
            key={card.id}
            name={card.name}
            description={card.description}
            forks={card.forks}
            stars={card.stargazers_count}
            url={card.html_url}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ fetch: { results } }) => ({
  results
});

export default connect(
  mapStateToProps,
  null
)(RepoRows);
