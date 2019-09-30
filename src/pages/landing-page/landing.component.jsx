import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Overview from '../../components/overview/overview.component';
import Repos from '../../components/repos/repos.component';

const Landing = () => {
  return (
    <Container>
      <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
        <Tab eventKey='home' title='Overview'>
          <Overview />
        </Tab>
        <Tab eventKey='profile' title='Repositories'>
          <Repos />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Landing;
