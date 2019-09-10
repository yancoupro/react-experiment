import React, {Component} from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

const LoginForm = () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return <Container className="App col-6">
    <h2>Sign In</h2>
    <Form className="form">
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="myemail@email.com"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="********"
        />
      </FormGroup>
      <FormGroup className="float-right">
        <Button onClick={onSubmit}>Submit</Button>
      </FormGroup>
    </Form>
  </Container>
}

export default LoginForm;
