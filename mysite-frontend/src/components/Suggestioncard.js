import React from 'react'
import { Link } from 'react-router-dom';

class Suggestioncard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <div class="video-card video-card-list">
                <div class="video-card-image">
                    <Link class="play-icon" to={'/video/'+this.props.videoID}><i class="fas fa-play-circle"></i></Link>
                    <Link to={'/video/'+this.props.videoID}><img class="img-fluid" height="100%" src={this.props.thumbnail_img} alt=""/></Link>
                    <div class="time">{this.props.duration}</div>
                </div>
                <div class="video-card-body">
                    <div class="btn-group float-right right-action">
                        <a href="#" class="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                            <a class="dropdown-item" href="#"><i class="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                            <a class="dropdown-item" href="#"><i class="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                        </div>
                    </div>
                    <div class="video-title">
                        <Link to={'/video/'+this.props.videoID}>{this.props.video_name}</Link>
                    </div>
                    <div class="video-page text-success">
                        Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></a>
                    </div>
                    <div class="video-view">
                        1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Suggestioncard;