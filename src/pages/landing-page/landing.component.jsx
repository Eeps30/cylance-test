import React, { Suspense } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Overview from '../../components/overview-tab/overview.component';
import { connect } from 'react-redux';
import './landing.component.css';
//lazy load Repos component
const Repos = React.lazy(() =>
  import('../../components/repos-tab/repos.component')
);

const Landing = ({ results }) => {
  return (
    <Container>
      <Tabs
        defaultActiveKey='home'
        id='uncontrolled-tab-example'
        animation='true'
        mountOnEnter={true}
        unmountOnExit={false}
      >
        <Tab eventKey='home' title='Overview'>
          <Overview />
        </Tab>
        <Tab
          eventKey='profile'
          title={
            <span>
              Repositories
              <Badge variant='light' id='margin_left'>
                {results.length}
              </Badge>
            </span>
          }
        >
          <Suspense fallback={<div id='loading'>Loading...</div>}>
            <Repos />
          </Suspense>
        </Tab>
      </Tabs>
    </Container>
  );
};

//pull in results state from Redux
const mapStateToProps = ({ fetch: { results } }) => ({
  results
});

export default connect(
  mapStateToProps,
  null
)(Landing);
