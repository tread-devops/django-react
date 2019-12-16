import React from 'react'
import { Button } from 'react-bootstrap';

class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state={
            vimeo_id : "",
            category : "",
            duration : "",
            videoName : ""
        }
    }

    handlesubmit(e,data){
        e.preventDefault();
        fetch('http://localhost:8000/api/create_video/',{
            method : 'POST',
            headers : {
                'content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => console.log(json));
    }

    handle_change(e){
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        this.setState(prevstate => {
          const newState = { ...prevstate };
          newState[name] = value;
          return newState;
        });
    }

    render(){
        return(
            <div>
                <form method="POST" onSubmit={ e => this.handlesubmit(e,this.state)}>
                    <label>vimeo video id</label>
                    <input type="number" placeholder="enter video_id" name="vimeo_id" onChange={this.handle_change.bind(this)}></input>
                    <label>category</label>
                    <input type="text" name="category" onChange={this.handle_change.bind(this)}></input>
                    <label>duration in seconds</label>
                    <input type="text" name="duration" onChange={this.handle_change.bind(this)}></input>
                    <label>video name</label>
                    <input type="text" name="videoName" onChange={this.handle_change.bind(this)}></input>
                    <button type="submit">upload</button>
                </form>
            </div>
        )
    }
}

export default Upload;