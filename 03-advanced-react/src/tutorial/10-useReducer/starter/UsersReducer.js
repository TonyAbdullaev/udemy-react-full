import {data} from "../../../data.js";
import {CLEAR_LIST, REMOVE_USER, RESET} from "./constants.js";

const reducer = (state, action) => {
    switch (action.type) {
        case CLEAR_LIST:
            return {...state, people: []};
        case REMOVE_USER:
            return {...state, people: state.people.filter(user => user.id !== action.payload.id)};
        case RESET:
            return {...state, people: data}
    }
}


export default reducer;