import React, { Component } from 'react';
import Home from './components/Home';
import LoginForm from './components/Login';
import SignupForm from './components/Signup';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch,Redirect,useHistory,useLocation} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './components/Player';
import Upload from './components/Upload';
import Category from './components/Category';
import VideoPage from './components/VideoPage';



const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  handle_login(e,data){
    e.preventDefault();
    // let history=useHistory();
    // let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/signup" } };
    fetch('http://localhost:8000/token-auth/',{
      method : 'POST',
      headers : {
        'content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token',json.token);
      this.setState({
        logged_in : true,
        username : json.user.username
      });
      console.log(this.state);
    });


  }

  render() {
    return (
      <Router>
      <Route path='/home' render={
        (props) => <Home {...props} login={this.state.logged_in}/> 
        } />
      <Route path='/video/:id' render={
        (props) => <VideoPage {...props} />} />
      <Route path='/login' render={
        (props) => <LoginForm {...props} handle_login={this.handle_login.bind(this)} />}  />
      <ProtectedRoute loggedIn={this.state.logged_in} path='/signup' component={SignupForm}/>
      <Route path='/admin/upload' component={Upload}/>
      <Route path='/categories' component={Category}/>
      </Router>
    );
  }
}

export default App;