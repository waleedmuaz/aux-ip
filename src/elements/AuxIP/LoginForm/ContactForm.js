import { Component } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  FormText,
} from 'react-bootstrap';
import Dashboard from '../Dasboard';
import Home from '../../../pages/AuxIP/Home';
import { Navigate } from "react-router-dom";
import { Redirect,Link,  Route ,useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class ContactForm extends Component {

  constructor(props) {

    super(props);
    this.state = {
      email: '',
      password: '',
      toast: false,
      validate: {
        emailState: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    console.log();
  
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

    console.log({ email: this.state.email });
    console.log({ password: this.state.password });

    axios.post(`${process.env.REACT_APP_BASEURL}login`, {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log("🚀 ~ file: ContactForm.js ~ line 62 ~ ContactForm ~ .then ~ response", response.data)
        if (response.data.status == 419) {
          toast.error('Oppes! You have entered invalid credentials!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (response.data.status == 200) {
          localStorage.setItem("auth", JSON.stringify(response.data.data));
          // history.push("/dashboard");
          <Link  to="/dashboard" />
        }
      })
      .catch((error) => {
        console.log("🚀 ~ file: ContactForm.js ~ line 64 ~ ContactForm ~ submitForm ~ error", error);
      })
  }


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
              required
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
              required
              placeholder="********"
              value={password}
              onChange={(e) => this.handleChange(e)}
            />
          </FormGroup>
          <div className="header-btn">
            <button type='submit' className='btn-default btn-small'>Login</button>
          </div>
        </Form>

        {/* Toast Login Error Notification show on screen */}

        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />     {/* Close Toast Login Error Notification show on screen */}
      </div>
    );
  }
}

export default ContactForm;