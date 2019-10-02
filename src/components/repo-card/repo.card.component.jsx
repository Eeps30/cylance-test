import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const RepoCard = props => {
  console.log('props in repoCARD: ', props.repos);

  return (
    <Col lg={6} md={6} sm={10}>
      <Card className='p4 shadow'>
        <Card.Body>
          <h4>Title</h4>
          <p>Text</p>
          <p>First Paragraph</p>
          <p>Second Paragraph</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RepoCard;
