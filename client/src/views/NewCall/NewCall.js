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

import { withRouter } from 'react-router-dom'

const AddANewCallForm = withRouter(({ history }) =>
  (<Formik
    initialValues={{ id: '', address: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        fetch('api/v1/add_call', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values, null, 2)
        })
        setSubmitting(false);

        history.push('/vcalls')

      }, 500);
    }}
    validationSchema={Yup.object().shape({
      id: Yup.string().required('Required'),
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
          <label htmlFor="address" style={{ display: 'block' }}>Address</label>
          <input
            id="address"
            placeholder="Address"
            type="text"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.address && touched.address ? 'text-input error' : 'text-input'}
          />
          {errors.address && touched.address && <div className="input-feedback">{errors.address}</div>}
          <button type="submit" disabled={isSubmitting}>Submit</button>
          <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}>Reset</button>
        </form>
      );
    }}
  </Formik>))

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
                <AddANewCallForm></AddANewCallForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewCall;
