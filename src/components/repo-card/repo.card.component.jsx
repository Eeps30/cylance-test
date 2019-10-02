import React from 'react';
import Card from 'react-bootstrap/Card';

const RepoCard = props => {
  const { name, description } = props;

  return (
    <Card text='white' bg='secondary' style={{ width: '21rem' }}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>
          {description !== null ? description : 'No Description...'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RepoCard;
