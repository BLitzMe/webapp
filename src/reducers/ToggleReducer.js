const initialState = {
    newPostButton: "off"

}

const ToggleReducer = (state = { initialState }, action) => {

    switch ((action.type)) {
        case "NEW_POST_BUTTON":
            state = {
                ...state,
                newPostButton: action.OnOff
            }
    }
    return state;
}

export default ToggleReducer;