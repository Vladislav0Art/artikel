import React from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
// components
import { FormInput, Button, CustomLink } from '../index';
// api
import { registerUser } from '../../api/users';
// styles
import './RegisterForm.scss';
import './RegisterForm-media.scss';


class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        passwordCopy: ''
      },
      submitted: false,
      error: null
    };

    this.registerUser = registerUser;
  }



  // handle state of each input
  handleInput = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;

    this.setState({
      user
    });
  };



  // submit form
  submitForm = (e) => {
    e.preventDefault();

    const { user } = this.state;
    
    this.setState({
      submitted: true
    });

    this.registerUser(user)
      .then(() => {
        // redirect to dashboard
        this.props.history.push('/login');
      })
      .catch(err => {
        this.setState({ error: err.message })
      });

  };



  // deleting error from state
  componentDidUpdate() {
    if(this.state.error) {
      setTimeout(() => this.setState({ error: null }), 3000);
    }
  }



  render() {
    const {
      submitted,
      error,
      user: { name, email, password, passwordCopy }
    } = this.state;

    return (
      <React.Fragment>
        <div className="register">
          <form className="form">
            <h2 className="register__title form__title">{ this.props.title }</h2>

            {
            error ? <p>{error}</p> : null 
            }

            <div className="register__content form__content">
              <FormInput 
                name="name"
                type="text"
                placeholder="Type your name"
                label="Name:"
                onChange={this.handleInput}
                value={name}
                classNames={['register__input form__input']}
              />

              <FormInput 
                name="email"
                type="email"
                placeholder="Type your email"
                label="Email:"
                onChange={this.handleInput}
                value={email}
                classNames={['register__input form__input']}
              />

              <FormInput 
                name="password"
                type="password"
                placeholder="Type your password"
                label="Password:"
                onChange={this.handleInput}
                value={password}
                classNames={['register__input form__input']}
              />

              <FormInput 
                name="passwordCopy"
                type="password"
                placeholder="Type your password again"
                label="Confirm password:"
                onChange={this.handleInput}
                value={passwordCopy}
                classNames={['register__input form__input']}
              />
            </div>

            <div>
              <Button
                text="Submit"
                type="submit"
                classNames={['register__submit form__submit']}
                onClick={this.submitForm}
              />
            </div>

            <div className="form__link">
              <span>Already have an account?</span>
              <CustomLink to="/login">Login</CustomLink>
            </div>

          </form>
        </div>
      </React.Fragment>
    );
  }

};


RegisterForm.propTypes = {
  title: PropTypes.string.isRequired
};


export default withRouter(RegisterForm);