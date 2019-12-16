import React from 'react'

class Player extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <React.Fragment>
                    <div class="single-video-left">
                    <div class="single-video">
                    <iframe src={"https://player.vimeo.com/video/"+this.props.videoID} width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>
                    </div>
                    <div class="single-video-title box mb-3">
                        <h2>{this.props.videoname}</h2>
                        <p class="mb-0"><i class="fas fa-eye"></i> 2,729,347 views</p>
                    </div>
                    <div class="single-video-author box mb-3">
                        <div class="float-right"><button class="btn btn-danger" type="button">Subscribe <strong>1.4M</strong></button> <button class="btn btn btn-outline-danger" type="button"><i class="fas fa-bell"></i></button></div>
                        <img class="img-fluid" src="img/s4.png" alt=""/>
                        <p><a href="#"><strong>Osahan Channel</strong></a> <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></span></p>
                        <small>{this.props.publish}</small>
                    </div>
                    <div class="single-video-info-content box mb-3">
                        <h6>Category :</h6>
                        <p>{this.props.category}</p>
                        <h6>About :</h6>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </React.Fragment>
        )
        
    }
}

export default Player;