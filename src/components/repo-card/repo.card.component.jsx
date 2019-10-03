import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Octicon, { RepoForked, Star } from '@primer/octicons-react';
import './repo.card.component.css';

const RepoCard = props => {
  const { name, description, forks, stars, url } = props;

  return (
    <Card text='white' bg='secondary' id='card'>
      <Card.Header>
        <a href={url} target='_blank' id='header_color'>
          {name}
        </a>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {description !== null ? description : 'No Description...'}
        </Card.Text>
        <Row>
          <Card.Text className='margin'>
            <Octicon icon={Star} ariaLabel='Starred' className='icon' />
            {stars}
          </Card.Text>
          <Card.Text className='margin'>
            <Octicon icon={RepoForked} ariaLabel='Forks' className='icon' />
            {forks}
          </Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RepoCard;
