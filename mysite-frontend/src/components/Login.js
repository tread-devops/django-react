import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import SignupForm from './Signup';
import Home from './Home'


class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    username: '',
    password: ''
  };
}

  handle_change(e){
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <React.Fragment>
        <section class="login-main-wrapper">
         <div class="container-fluid pl-0 pr-0">
            <div class="row no-gutters">
               <div class="col-md-5 p-5 bg-white full-height">
                  <div class="login-main-left">
                     <div class="text-center mb-5 login-main-left-header pt-4">
                        <img src="img/favicon.png" class="img-fluid" alt="LOGO"/>
                        <h5 class="mt-3 mb-3">Welcome to Vidoe</h5>
                        <p>It is a long established fact that a reader <br/> will be distracted by the readable.</p>
                     </div>
                     <form onSubmit={ e => this.props.handle_login(e,this.state) }>
                        <div class="form-group">
                           <label>Username</label>
                           <input type="text" class="form-control" name="username" value={this.state.username} placeholder="Enter username"  onChange={this.handle_change.bind(this)}/>
                        </div>
                        <div class="form-group">
                           <label>Password</label>
                           <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.handle_change.bind(this)}/>
                        </div>
                        <div class="mt-4">
                           <div class="row">
                              <div class="col-12">
                                 <button type="submit" class="btn btn-outline-primary btn-block btn-lg">Sign In</button>
                              </div>
                           </div>
                        </div>
                     </form>
                     <div class="text-center mt-5">
                        <p class="light-gray">Don’t have an account? <Link to='signup'>Sign Up</Link></p>
                     </div>
                  </div>
               </div>
               <div class="col-md-7">
               </div>
            </div>
         </div>
      </section>
      </React.Fragment>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};
