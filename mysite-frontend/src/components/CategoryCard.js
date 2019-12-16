import React from 'react'

class CategoryCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <div class="col-xl-3 col-sm-6 mb-3">
                <div class="category-item mt-0 mb-0">
                    <a href="shop.html">
                        <img class="img-fluid" src="img/s2.png" alt=""/>
                        <h6>{this.props.catname}</h6>
                        <p>74,853 views</p>
                    </a>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
export default CategoryCard;