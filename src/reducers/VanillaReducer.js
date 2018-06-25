const VanillaReducer=(state={
    name: "John Doe's Post",
    postDate: "20-8-2018",
    ort: "Narnia Straße"
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
            }
    }
    return state;
}

export default VanillaReducer;