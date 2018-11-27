import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';
import './NewCall.css';

class NewCall extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader><strong>NEW</strong> Call</CardHeader>
              <CardBody>
                <Formik
                  initialValues={{ email: '', id: '' }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 500);
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email()
                      .required('Required'),
                  })}
                >
                  {props => {
                    const {
                      values,
                      touched,
                      errors,
                      dirty,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      handleReset,
                    } = props;
                    return (
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="id" style={{ display: 'block' }}>ID</label>
                        <input
                          id="id"
                          placeholder="ID"
                          type="text"
                          value={values.id}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.id && touched.id ? 'text-input error' : 'text-input'}
                        />
                        <label htmlFor="email" style={{ display: 'block' }}>Email</label>
                        <input
                          id="email"
                          placeholder="Enter your email"
                          type="text"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                        />
                        {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                        <button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}>Reset</button>
                      </form>
                    );
                  }}
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewCall;
