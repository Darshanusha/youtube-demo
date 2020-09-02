import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import { getVideoList } from '../actions';
import { connect } from 'react-redux';

class App extends Component{

    state = {videos:[]}

    renderList =()=>{
        if(this.props.videos.data){
            return <VideoList items = {this.props.videos.data.items}/>
        } 
    }

    onSubmit = async (txt)=>{
        this.props.getVideoList(txt);
    }
    
    render(){
        return(
            <div className = "form-group px-5">
                <SearchBar onSubmit = {this.onSubmit}/>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {videos: state.videos}
}

export default connect(mapStateToProps,{ getVideoList })(App);