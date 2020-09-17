import {combineReducers, createStore} from "redux";
import postPreviewReducer from "./postsPreviewReducer";


let reducer = combineReducers({
    postPreview: postPreviewReducer
})


let store = createStore(reducer);

export default store;