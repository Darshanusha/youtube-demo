import React, { Component } from 'react';
import { selectedVideo } from '../actions';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Video extends Component {
    render() {
        return (
            <div>
                {/* <div onClick={() => this.props.selectedVideo(this.props.item.id.videoId)}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="thumbnail">
                                <img src={this.props.item.snippet.thumbnails.default.url} alt={this.props.item.snippet.thumbnails.title} style={{width:"30%"}} />
                                <div className="caption">
                                    <p>{this.props.item.snippet.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="card mb-3" style={{maxWidth:"540px"}} onClick={() => this.props.selectedVideo(this.props.item.id.videoId)}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.props.item.snippet.thumbnails.high.url} className="card-img" alt={this.props.item.snippet.thumbnails.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.item.snippet.channelTitle}</h5>
                                <p className="card-text">{this.props.item.snippet.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { selectedVideo })(Video);