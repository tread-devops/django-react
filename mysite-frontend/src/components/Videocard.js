import React from 'react'
import { Redirect, Link } from 'react-router-dom';

class Videocard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="col-xl-3 col-sm-6 mb-3">
            <div class="video-card">
                <div class="video-card-image">
                    <Link class="play-icon" to={'video/'+this.props.videoid}><i class="fas fa-play-circle"></i></Link>
                    <Link to={'video/'+this.props.videoid}><img class="img-fluid" src={this.props.img_link} alt=""/></Link>
                    <div class="time">{this.props.duration}</div>
                </div>
                <div class="video-card-body">
                    <div class="video-title">
                        <Link to={'video/'+this.props.videoid}>{this.props.videoname}</Link>
                    </div>
                    <div class="video-view">
                        1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Videocard;
