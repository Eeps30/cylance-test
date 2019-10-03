import React, { Suspense } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Overview from '../../components/overview/overview.component';
const Repos = React.lazy(() =>
  import('../../components/repos-tab/repos.component')
);

const Landing = () => {
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
        <Tab eventKey='profile' title='Repositories'>
          <Suspense fallback={<div>Loading...</div>}>
            <Repos />
          </Suspense>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Landing;
