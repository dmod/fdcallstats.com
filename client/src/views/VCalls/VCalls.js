import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Table } from 'reactstrap';

class VCalls extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api/v1/db_q')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Incident Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!this.state.fetching && this.state.message.map((listValue, index) => {
                      return (
                        <tr key={index}>
                          <td>{listValue.id}</td>
                          <td>{listValue.incident_num}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default VCalls;
