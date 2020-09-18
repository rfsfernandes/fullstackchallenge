import api from "../services/api";

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GETQUESTIONS":
      return getQuestions(action.payload);
    case "POSTQUESTION":
      return state - 1;
    default:
      return state;
  }
};

const getQuestions = async (page) => {
  try {
    const questionsList = await api
      .get("question", {
        params: {
          page: page,
        },
      })
      .then((response) => 
        response.data
      );
      // .catch((error) => {
      //   console.log(error);
      //   return error;
      // })
      // .then((response) =>{
      //   return response.data;
      // });

      return questionsList;
  } catch(err) {
    console.log(err);
    return err;
  }
};

export default questionsReducer;
