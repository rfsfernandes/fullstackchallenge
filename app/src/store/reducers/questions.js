const INITIAL_STATE = {
  response: {}
}

export default function questionsReducer(state = INITIAL_STATE, action){
  if(action.type === "GETQUESTIONS") {
    return { response: action.response };
  }
  return state;
};

