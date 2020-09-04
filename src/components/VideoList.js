import React, { Component } from 'react';
import Video from '../components/Video';

class VideoList extends Component{
    render(){
        return(
            <div>
                {this.props.items.map((item)=>{
                    console.log("id ",item.etag);
                    return <Video key = {item.id.videoId} item = {item}/>
                })}
                {console.log("rendering list VideoList",this.props.items)}
            </div>
        );
    }
}

export default VideoList;