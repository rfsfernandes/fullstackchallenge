export const getQuestions = (page) => {
    return {
        type: "GETQUESTIONS",
        payload: page
    };
};

export const postQuestions = (question) => {
    return {
        type: "POSTQUESTION",
        payload: question
    };
};