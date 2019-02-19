import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { withRouter } from 'react-router-dom'

const NewButton = withRouter(({ history }) => (
  <button className="btn block" type="button" onClick={() => { history.push('/newcall') }}>
    New Call
  </button>
))

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
      <NewButton></NewButton>
      </div>
    );
  }
}

export default Dashboard;
