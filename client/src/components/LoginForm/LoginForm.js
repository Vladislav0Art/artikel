import React from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
// components
import { FormInput, Button, CustomLink } from '../index';
// api
import { loginUser } from '../../api/users';
// styles
import './LoginForm.scss';
import './LoginForm-media.scss';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      submitted: false,
      error: null
    };

    this.loginUser = loginUser;
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

    this.loginUser(user)
      .then(res => {
        // redirect to dashboard
        this.props.history.push('/');
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
      user: { email, password }
    } = this.state;

    return (
      <React.Fragment>
        <div className="login">
          <form className="form">
            <h2 className="login__title form__title">{ this.props.title }</h2>

            {
            error ? <p>{error}</p> : null 
            }

            <div className="login__content form__content">
              <FormInput 
                name="email"
                type="email"
                placeholder="Type your email"
                label="Email:"
                onChange={this.handleInput}
                value={email}
                classNames={['login__input form__input']}
              />

              <FormInput 
                name="password"
                type="password"
                placeholder="Type your password"
                label="Password:"
                onChange={this.handleInput}
                value={password}
                classNames={['login__input form__input']}
              />
            </div>

            <div>
              <Button
                text="Submit"
                type="submit"
                classNames={['login__submit form__submit']}
                onClick={this.submitForm}
              />
            </div>

            <div className="form__link">
              <span>Do not have an account? </span>
              <CustomLink to="/register">Register</CustomLink>
            </div>

          </form>
        </div>
      </React.Fragment>
    );
  }

};


LoginForm.propTypes = {
  title: PropTypes.string.isRequired
};


export default withRouter(LoginForm);