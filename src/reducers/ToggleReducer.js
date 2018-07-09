const initialState = {
  newPostButton: false,
  targetValue: ""
};

const ToggleReducer = (
  state = {
    initialState
  },
  action
) => {
  switch (action.type) {
    case "NEW_POST_BUTTON":
      state = {
        ...state,
        newPostButton: action.payload,
        targetValue: action.targetValue
      };
      break;
    case "NEW_POST_BUTTON_CLEAN":
      state = {
        ...state,
        newPostButton: action.payload,
        targetValue: action.targetValue
      };
  }
  return state;
};

export default ToggleReducer;
