import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
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
                     <form action="#">
                        <div class="form-group">
                           <label>Mobile number</label>
                           <input type="text" class="form-control" placeholder="Enter mobile number"/>
                        </div>
                        <div class="form-group">
                           <label>Password</label>
                           <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                        <div class="form-group">
                           <label>Promocode</label>
                           <input type="text" class="form-control" placeholder="Promocode"/>
                        </div>
                        <div class="mt-4">
                           <button type="submit" class="btn btn-outline-primary btn-block btn-lg">Sign Up</button>
                        </div>
                     </form>
                     <div class="text-center mt-5">
                        <p class="light-gray">Already have an Account? <Link to='login'>Sign In</Link></p>
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

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};