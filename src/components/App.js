import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import { getVideoList } from '../actions';
import { connect } from 'react-redux';
import VideoPlayer from './VideoPlayer';

class App extends Component {

    state = { videos: [] }

    renderList = () => {
        if (this.props.videos.data) {
            return <VideoList items={this.props.videos.data.items} />
        }
    }

    componentDidMount(){
        this.onSubmit('Darshan');
    }

    onSubmit = async (txt) => {
        this.props.getVideoList(txt);
    }

    render() {
        return (
            <div className="form-group px-5">
                <SearchBar onSubmit={this.onSubmit} />
                <div className = "row">
                    <div className='col-5'>
                        {this.renderList()}
                    </div>
                    <div className='col-7'>
                        <VideoPlayer selectedVideo={this.props.selectedVideo} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state App ", state)
    return { videos: state.videos, selectedVideo: state.selectedVideo }
}

export default connect(mapStateToProps, { getVideoList })(App);