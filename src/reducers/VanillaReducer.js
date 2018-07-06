const initialState = {
    status: "",
    posts: [],
    error: ""
  }
const VanillaReducer=(state={
  initialState
}, action)=>{
    switch ((action.type)){
        case "SET_NAME":
            state={
                ...state,
                name: action.payload
            };
            break;
        case "SET_POST_DATE":
            state={
                ...state,
                postDate: action.payload
            };
            break;
        case "SET_ORT":
            state={
                ...state,
                ort: action.payload
            };
            break;
            case "FETCH_POSTS":
            state={
                ...state,
                status: action.status,
           };
           break;
           case "FETCH_SUCCESS":
           state={
               ...state,
               status: action.status,
               posts: action.posts
           };
           break;
           case "FETCH_FAILURE":
           state={
               ...state,
               status: action.status,
               error: action.error

           }
    }
    return state;
}

export default VanillaReducer;