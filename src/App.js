import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { userData } from './redux/actions/useraction';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();

    this.state = {
      uname: '',
      email: '',
      password: ''
    }
  }

  submitData = (e) => {
    e.preventDefault();

    const data = {
      uname: this.state.uname,
      email: this.state.email,
      password: this.state.password
    }

    console.log("sendingdata", data);

    this.props.userData(data);
  }


  handleChange(e) {
    e.preventDefault();
    //console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className="App" style={{ margin: '20px', height: '1000px' }}>
        <Form onSubmit={this.submitData}>
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input type="text" name="uname" placeholder="Enter Your Name" onChange={(e) => this.handleChange(e)} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" placeholder="Enter your Email" onChange={(e) => this.handleChange(e)} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" placeholder="Enter password " onChange={(e) => this.handleChange(e)} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>

        <h1> {this.props.data.user.uname} <br />{this.props.data.user.email} </h1>
      </div>
    );
  }
}


function mapStateToProps(state) {

  console.log("propsdata", state);
  return { data: state.users };

}

export default connect(mapStateToProps, { userData })(App);
