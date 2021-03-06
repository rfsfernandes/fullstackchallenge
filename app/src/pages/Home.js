import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CustomPagination from "../components/CustomPagination";
import QuestionList from "../components/QuestionList";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import LiveHelpRoundedIcon from "@material-ui/icons/LiveHelpRounded";
import Grow from "@material-ui/core/Grow";
import { connect } from "react-redux";
import * as QuestionActions from "../store/actions";

let page = 1;

const Home = ({ response, dispatch }) => {

  const questionsRequest = async (page) => {
    QuestionActions.getQuestions(page, dispatch);
  };

  useEffect(() => {
    questionsRequest(page);
  }, []);

  function handlePageClick(pageClicked) {
    page = pageClicked;
    questionsRequest(pageClicked);
  }

  return (
    <div>
      <Grow in style={{ transformOrigin: "0 0 0" }} {...{ timeout: 500 }}>
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
      </Grow>
    </div>
  );
};

export default connect((state) => ({ response: state.questions.response }))(
  Home
);
