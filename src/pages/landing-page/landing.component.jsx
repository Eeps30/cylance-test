import React, { Suspense } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Repos from '../../components/repos/repos.component';
const Overview = React.lazy(() =>
  import('../../components/overview/overview.component')
);

const Landing = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        animation='true'
        mountOnEnter={true}
        unmountOnExit={false}
      >
        <Tab eventKey='home' title='Overview'>
          <Suspense fallback={<div>Loading...</div>}>
            <Overview />
          </Suspense>
        </Tab>
        <Tab eventKey='profile' title='Repositories'>
          <Repos />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Landing;
