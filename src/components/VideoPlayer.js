import React, { Component } from 'react';

class VideoPlayer extends Component{
    
    render(){
        const url = `https://www.youtube.com/embed/${this.props.selectedVideo}`;
        return(
            <div>
                <iframe title = "Youtube-video" width = "700" height = "400" src = {url}></iframe>
            </div>
        );
    };
}



export default VideoPlayer;