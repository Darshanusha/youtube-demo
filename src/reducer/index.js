import getSelectedVideo from './getSelectedVideo';
import getVideos from './getVideos';
import { combineReducers } from 'redux';

export default combineReducers({
    selectedVideo: getSelectedVideo,
    videos: getVideos
})