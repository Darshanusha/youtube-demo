export default (state = null, action) => {
    if(action.type === 'SELECTED_VIDEO'){
        return action.payload;
    }
    return state;
}