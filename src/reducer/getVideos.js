export default (state = [], action) => {
    if(action.type === 'VIDEO_LIST'){
        return action.payload;
    }
    return state;
}