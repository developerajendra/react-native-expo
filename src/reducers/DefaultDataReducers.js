
import ToggleAction from "../actions";

import users from "../data/users.json"

function DefaultDataReducers(state = [],ToggleAction = 'showAll'){
    
    // return fetch("https://rallycoding.herokuapp.com/api/music_albums")
    // .then((response) =>  response.json())
    // .then((data) => {
    //     console.log(data)
    //    return data;
    // });
    return users;
}

export default DefaultDataReducers;