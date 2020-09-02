import youtubeApi from '../apis/youtube';
export const getVideoList =(searchText) => async (dispatch,getState) =>{
    const response = await youtubeApi.get('/search',{
        params:{
            q: searchText
        }
    });
    dispatch ({type: 'VIDEO_LIST', payload: response});
}

export const selectedVideo = (id)=>{
    console.log("selected id ",id)
    return {type: 'SELECTED_VIDEO', payload: id}
}