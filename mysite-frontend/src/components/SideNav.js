import React from "react"
import TopNav from './Nav.js'
import { Link } from "react-router-dom";

class SideNav extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
               <React.Fragment>
               <ul class="sidebar navbar-nav">
               <li class="nav-item">
               <Link class="nav-link" to='/home'>
               <i class="fas fa-fw fa-home"></i>
               <span>Home</span>
               </Link>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">
               <i class="fas fa-fw fa-history"></i>
               <span>History Page</span>
               </a>
            </li>
            <li class="nav-item">
               <Link class="nav-link" to='/categories'>
               <i class="fas fa-fw fa-history"></i>
               <span>category</span>
               </Link>
            </li>
            </ul>
            </React.Fragment>
        )
    }
}

export default SideNav;