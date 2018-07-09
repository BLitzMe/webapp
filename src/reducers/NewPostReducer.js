const initialState = {
    name = "John Doe's Post",
    
  };

  const NewPostReducer=(
    state={
      initialState
    },
    action
  ) => {
    switch (action.type)  {
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
  }
  }