
import { combineReducers } from "redux";
import DefaultDataReducers from "./DefaultDataReducers";
import SelectionReducers from "./SelectionReducers";

const App = combineReducers({
    defaultData: DefaultDataReducers,
    selectedData : SelectionReducers
})

export default App;