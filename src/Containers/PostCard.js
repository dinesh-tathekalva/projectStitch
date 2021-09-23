import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, FormGroup, Input, Form
} from 'reactstrap';

const PostCard = (props) => {
  const { name, email, body, id, handleDeleteClick, handleUpdateClick, updateEmailId } = props
  const [updateEmail, setUpdateEmail] = useState()
  return (
    <Card className="m-4" style={{ width: '24em', height: '35em' }}>
      <CardBody>
        <CardText className="mx-auto">Post No: {id}</CardText>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-5 text-muted">{email}</CardSubtitle>
        <Form>
          <FormGroup>
            <Input type="email" value={updateEmail} onChange={e => {
              updateEmailId(e.target.value)
              setUpdateEmail(e.target.value)
            }} name="email" id="exampleEmail" placeholder="Enter new Email" />
            <Button id={id} className="mt-3" color="secondary" onClick={(e) => handleUpdateClick(e)}>Update Email</Button>
          </FormGroup>
        </Form>
      </CardBody>
      <CardBody>
        <CardText>{body}</CardText>
        <Button id={id} className="ml-2" color="danger" onClick={(e) => handleDeleteClick(e)}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default PostCard;
