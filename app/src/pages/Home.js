import React from "react";

import Grid from "@material-ui/core/Grid";
import Pagination from "../components/Home.Pagination";
import QuestionList from "../components/Home.List";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import LiveHelpRoundedIcon from "@material-ui/icons/LiveHelpRounded";
// import LinearProgress from "@material-ui/core/LinearProgress";

import "../App.css";


function Home() {
  const page = 1;

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
          <QuestionList page={page} />
        </Grid>
        <Divider />
        <Button href="/questions" className="new-question-btn">
          <LiveHelpRoundedIcon className="btn-icon" />
          new question
        </Button>
        <Grid container justify={"center"}>
          {105 !== 0 ? (
            <Pagination itemCount={105} />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
