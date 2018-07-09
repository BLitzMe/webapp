export function NewPostButtonToggler(NPS) {
  return {
    type: "NEW_POST_BUTTON",
    payload: !NPS,
    targetValue: "#newPostModal"
  };
}

export function  NewPostButtonClean (){
        
        return{
        type: "NEW_POST_BUTTON_CLEAN",
        payload: false,
        targetValue: ""
        }
}

