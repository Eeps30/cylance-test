import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import { fetchApiData } from '../../redux/fetch/fetch.action';

const Overview = ({ fetchApiData, results }) => {
  useEffect(() => {
    fetchApiData();
  }, [fetchApiData]);

  return (
    <Container>
      <br />
      <Row>Popular Repositories</Row>
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
)(Overview);
