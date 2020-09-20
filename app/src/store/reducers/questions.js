const INITIAL_STATE = {
  response: {}
}

export default function questionsReducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case "GETQUESTIONS":
      return { response: action.response };
      case "POSTQUESTION":
        return { response: action.response }
  }
  return state;
};

