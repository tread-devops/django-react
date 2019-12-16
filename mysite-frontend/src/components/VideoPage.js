import React from 'react'
import TopNav from './Nav';
import SideNav from './SideNav';
import Player from './Player';
import Suggestioncard from './Suggestioncard';

class VideoPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            details : [],
            suggest : []
        }
    }
    componentDidMount(){
        let url = 'http://localhost:8000/api/video_details/'+this.props.match.params.id;
        //console.log(this.props);
        fetch(url,{
            method : 'GET',
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.setState({
                details : json.results[0],
                suggest : json.suggest
            });
            console.log(this.state.details.upload_date)
        });
    }
    componentDidUpdate(prevProps){
        if(prevProps.match.params.id != this.props.match.params.id){
            let url = 'http://localhost:8000/api/video_details/'+this.props.match.params.id;
            //console.log(this.props);
            fetch(url,{
                method : 'GET',
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    details : json.results[0],
                    suggest : json.suggest
                });
                console.log(this.state.details.upload_date)
            });
        }
    }
    render(){
        const {params} = this.props.match;
        return(
            <React.Fragment>
                <TopNav/>
                <div id="wrapper">
                    <SideNav/>
                    <div id="content-wrapper">
            <div class="container-fluid pb-0">
               <div class="video-block section-padding">
                  <div class="row">
                     <div class="col-md-8">
                        <Player videoID={params.id} videoname={this.state.details.video_name} publish={String(this.state.details.upload_date)}
                                category={this.state.details.category}/>
                     </div>
                     <div class="col-md-4">
                        <div class="single-video-right">
                           <div class="row">
                              <div class="col-md-12">
                                 <div class="main-title">
                                    <h6>Up Next</h6>
                                 </div>
                              </div>
                              <div class="col-md-12">
                                 {this.state.suggest.map( (s) => 
                                     <Suggestioncard duration={s.duration} video_name={s.video_name}
                                        thumbnail_img={s.thumbnail_path} videoID={s.vimeo_id}/>
                                 )}
                                 
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
                </div>
            </React.Fragment>
        )
    }
}

export default VideoPage;