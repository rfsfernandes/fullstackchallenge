import api from "../../services/api";

export const getQuestions = async (page, dispatch) => {
  await api
    .get("question", {
      params: {
        page: page,
      },
    })
    .then((response) =>
      dispatch({
        type: "GETQUESTIONS",
        response: response.data,
      })
    )
    .catch((error) =>
      dispatch(
        dispatch({
          type: "GETQUESTIONS",
          response: error.response.data,
        })
      )
    );
};

export const postQuestion = async (questionBody, dispatch, handleResponse) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  await api
    .post("/question", questionBody, config)
    .then((response) => {
			dispatch({
				type:"POSTQUESTION",
				response: response.data
			});
		})
    .catch((error) => {
			dispatch({
				type:"POSTQUESTION",
				response: error.response.data
			});
		});
};
