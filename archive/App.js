import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class App extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);

      this.state = {
        message: null,
        isOpen: false,
        fetching: true
      };
  }
  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        console.log(response)
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }
  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }
  render() {
      return (
          <div>
              <Navbar color="inverse" light expand="md">
                  <NavbarBrand href="/">reactstrap</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink href="/components/">Components</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </Navbar>
              <Jumbotron>
                  <Container>
                      <Row>
                          <Col>
                              <h1>Welcome to React</h1>
                              <p>
                                  <Button
                                      tag="a"
                                      color="success"
                                      size="large"
                                      href="http://reactstrap.github.io"
                                      target="_blank"
                                  >
                                      View Reactstrap Docs
                                  </Button>
                              </p>
                          </Col>
                      </Row>
                  </Container>
              </Jumbotron>
              <p className="App-intro">
              {this.state.fetching ? 'Fetching message from API' : this.state.message}
            </p>
          </div>
      );
  }
}

export default App;
