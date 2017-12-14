export default (state = null, action) => {
    switch(action.type){
        case "selectPerson" : 
        return action.payload;
        default:
        return state; 
    }
    return null;
}