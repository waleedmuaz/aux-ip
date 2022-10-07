import { Component } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  FormText,
} from 'react-bootstrap';
import {Link } from 'react-router-dom';
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
    axios.post(`${process.env.REACT_APP_BASEURL}login`, {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        if (response.data.status == 419) {
          toast.error('Oops! You have entered wrong credentials', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (response.data.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data.data));
          localStorage.setItem("auth", "Bearer "+JSON.stringify(response.data.data.token).replaceAll('"', ''));
          this.props.history.push("/parent-dashboard");
          // <Link  to="/dashboard" />
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {

    const { email, password } = this.state;

    return (
      <div className="App">

        <div className="my-5 card-header">
          <span className='signInText'>Sign In</span>
        </div>
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
            <FormText><Link>Forgot your password?</Link></FormText>
          </FormGroup>
          <div>
          </div>

          <div className="header-btn">
            <button type='submit' className='btn-default btn-small'>Login</button>
          </div>
        </Form>

        {/* Toast Login Error Notification show on screen */}

            {/* Close Toast Login Error Notification show on screen */}
      </div>
    );
  }
}

export default ContactForm;