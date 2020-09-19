import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CustomPagination from "../components/Home.Pagination";
import QuestionList from "../components/Home.List";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import LiveHelpRoundedIcon from "@material-ui/icons/LiveHelpRounded";
// import LinearProgress from "@material-ui/core/LinearProgress";
import api from "../services/api";
import { connect } from "react-redux";
import * as QuestionActions from "../store/actions";

let page = 1;

const Home = ({ response, dispatch }) => {
  const questionsRequest = async (page) => {
    try {
      const questionsList = await api.get("question", {
        params: {
          page: page,
        },
      });

      dispatch(QuestionActions.getQuestions(questionsList.data));
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    questionsRequest(page);
  }, [])

  function handlePageClick(pageClicked) {
    page = pageClicked;
    questionsRequest(pageClicked);
  }

  return (
    <div>
      {/* <div className="progress-wrapper">
        <LinearProgress color="secondary" className="progress" />
      </div> */}

      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        className="list-container"
      >
        <Grid item xs={12} sm={12} className="grid-item grid-list">
          {response !== undefined ? (
            <QuestionList questionList={response} />
          ) : (
            ""
          )}
        </Grid>
        <Divider />
        <Button href="/questions" className="new-question-btn">
          <LiveHelpRoundedIcon className="btn-icon" />
          new question
        </Button>
        <Grid container justify={"center"}>
          {response !== undefined ? (
            <CustomPagination
              pageNumber={response.pageCount}
              pageCallback={handlePageClick}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default connect((state) => ({ response: state.questions.response }))(
  Home
);
