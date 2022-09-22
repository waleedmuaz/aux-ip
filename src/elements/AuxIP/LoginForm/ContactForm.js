import { Component } from 'react';
import {
  Form,
  FormGroup,
  FormText,
  Label,
  Button,
}  from 'react-bootstrap';
// import './App.css';
 
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validate: {
        emailState: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };
 
  validateEmail(e) {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
    const { validate } = this.state;
 
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success';
    } else {
      validate.emailState = 'has-danger';
    }
 
    this.setState({ validate });
  }
 
  submitForm(e) {
    e.preventDefault();
    // console.log(`Email: ${this.state.email}`);
    // console.log(`Password: ${this.state.password}`);

    console.log({email: this.state.email});
    console.log({password: this.state.password});
  }


//   componentDidMount() {
//     // POST request using fetch with set headers
//     const requestOptions = {
//         method: 'POST',
//         headers: { 
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer my-token',
//             'My-Custom-Header': 'foobar'
//         },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     fetch('https://reqres.in/api/posts', requestOptions)
//         .then(response => response.json())
//         .then(data => this.setState({ postId: data.id }));
// }


 
  render() {
    const { email, password } = this.state;
 
    return (
      <div className="App">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
          <FormGroup>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="emailId"
              placeholder="Enter Your Email..."
              valid={this.state.validate.emailState === "has-success"}
              invalid={this.state.validate.emailState === "has-danger"}
              value={email}
              onChange={(e) => {
                this.validateEmail(e);
                this.handleChange(e);
              }}
            />
          
            <FormText>Your username is most likely your email.</FormText>
          </FormGroup>
          <FormGroup>
            <label for="examplePassword">Password</label>
            <input
              type="password"
              name="password"
              id="passwordId"
              placeholder="********"
              value={password}
              onChange={(e) => this.handleChange(e)}
            />
          </FormGroup> 
          <div className="header-btn">
            <button type='submit' className='btn-default btn-small'>Login</button>
          </div>
          </Form>
      </div>
    );
  }
}
 
export default ContactForm;