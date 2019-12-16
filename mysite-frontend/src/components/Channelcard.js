import React from 'react'

class Channelcard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="channels-card">
                    <div class="channels-card-image">
                        <a href="#"><img class="img-fluid" src="img/s1.png" alt=""/></a>
                        <div class="channels-card-image-btn"><button type="button" class="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                        <div class="channels-title">
                            <a href="#">Channels Name</a>
                        </div>
                        <div class="channels-view">
                            382,323 subscribers
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Channelcard;
