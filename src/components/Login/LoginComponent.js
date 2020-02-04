import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Label,
  Alert
} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import {customInput} from '../../fields';
import {
  required,
} from '../../validation';
import './Login.scss'


class LoginComponent extends Component {

  render() {
    const {handleSubmit, errors} = this.props;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">

            </Col>
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      {
                        errors ?
                          <Alert color="danger">{errors}</Alert>: ''
                      }

                      <h1 className="log-in">Login</h1>
                      <p className="text-muted">
                        Enter your email & Password. If you don`t have an account please see your email invitation
                      </p>
                      <Label htmlFor="username" className="label"> Email</Label>
                      <InputGroup className="mb-3">
                        <Field
                          name="username"
                          id="username"
                          component={customInput}
                          type="text"
                          placeholder="Username"
                          validate={[required]}
                        />
                      </InputGroup>
                      <Label htmlFor="password" className="label"> Password</Label>
                      <InputGroup className="mb-4">
                        <Field
                          name="password"
                          id="password"
                          component={customInput}
                          type="password"
                          placeholder="Password"
                          validate={[required]}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">

                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="primary" className="px-5 log-btn">Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

LoginComponent = reduxForm({
  form: 'login',
})(LoginComponent);

export default LoginComponent;

