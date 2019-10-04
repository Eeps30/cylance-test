import React, { useState } from 'react';
import RepoRow from './repo.row.component';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import './repo.rows.component.css';

const RepoRows = ({ results }) => {
  //use repo.row.component to create row element
  //for each entry in results array
  return (
    <div>
      <Form id='form_margin'>
        <Form.Group>
          <Form.Control placeholder='Find a repository...' />
        </Form.Group>
      </Form>
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
