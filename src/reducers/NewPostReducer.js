const initialState = {
  title: "",
  name: "John Doe's Post",
  date: null,
  ort: "",
  description: ""
};

const NewPostReducer = (
  state = {
    initialState
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_POST_DATE":
      state = {
        ...state,
        postDate: action.payload
      };
      break;
    case "SET_ORT":
      state = {
        ...state,
        ort: action.payload
      };
      break;
    case "SET_DESCRIPTION":
      state = {
        ...state,
        description: action.payload
      };
      break;
      case "SET_TITLE":
        state={
          ...state,
          title: action.payload
        }
  }
};
