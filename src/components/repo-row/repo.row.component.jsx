import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Octicon, { RepoForked, Star } from '@primer/octicons-react';
import './repo.row.component.css';
import '../repo-card/repo.card.component.css';

const RepoRow = props => {
  const { name, description, forks, stars, url, updated } = props;

  return (
    <Jumbotron id='row'>
      <Container>
        <Row>
          <Col lg={10} md={9} sm={8} id='column'>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='header_color'
            >
              <h3>{name}</h3>
            </a>
          </Col>
          <Col>
            <Button variant='light'>
              <Octicon icon={Star} ariaLabel='Starred' className='row_icon' />
              Star
            </Button>
          </Col>
        </Row>
        <Row>
          <p>{description}</p>
        </Row>
        <Row>
          <div id='padding_top'>
            <Octicon icon={Star} ariaLabel='Starred' className='row_icon' />
            <span className='margin'>{stars}</span>
            <Octicon icon={RepoForked} ariaLabel='Forks' className='row_icon' />
            <span className='margin'>{forks}</span>
            <span>Updated On {updated}</span>
          </div>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default RepoRow;
