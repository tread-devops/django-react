import React from 'react'
import TopNav from './Nav';
import SideNav from './SideNav';
import CategoryCard from './CategoryCard';

class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            category : []
        };
    }
    componentDidMount(){
        console.log("hi")
        fetch('http://localhost:8000/api/categories',{
            method : 'GET'
        })
        .then(res => res.json())
        .then(json => {
            this.setState({ category : json})
            console.log(json[0].category);
        })
    }
    render(){
        return(
            <React.Fragment>
                <TopNav/>
                <div id="wrapper">
                    <SideNav/>
                    <div id="content-wrapper">
                    <div class="container-fluid">
               <div class="video-block section-padding">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="main-title">
                           <h6>Categories</h6>
                        </div>
                     </div>
                     {this.state.category.map((c) => 
                     <CategoryCard catname={c.category}/>)}
                  </div>
               </div>
            </div>
         </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Category;