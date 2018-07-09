const initialState = {
  status: "",
  posts: [],
  error: "",
  ort: "narnia"
};
const VanillaReducer = (
  state = {
    initialState
  },
  action
) => {
  switch (action.type) {
   
      
    case "FETCH_POSTS":
      state = {
        ...state,
        status: action.status
      };
      break;
    case "FETCH_SUCCESS":
      state = {
        ...state,
        status: action.status,
        posts: action.posts
      };
      break;
    case "FETCH_FAILURE":
      state = {
        ...state,
        status: action.status,
        error: action.error
      };
  }
  return state;
};

export default VanillaReducer;
