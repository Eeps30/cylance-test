import React, { useState } from 'react';
import RepoRow from './repo.row.component';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import './repo.rows.component.css';

const RepoRows = ({ results }) => {
  const [input, setInput] = useState('');

  const filteredResults = results.filter(object => object.name.includes(input));

  //use repo.row.component to create row element
  //for each entry in results array
  return (
    <div>
      <Form id='form_margin'>
        <Form.Group>
          <Form.Control
            placeholder='Find a repository...'
            onChange={event => setInput(event.target.value)}
          />
        </Form.Group>
      </Form>
      {filteredResults.map((card, index) => {
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
