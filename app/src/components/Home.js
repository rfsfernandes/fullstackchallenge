import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Pagination from "./Home.Pagination";
import QuestionList from "./Home.List";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import LiveHelpRoundedIcon from "@material-ui/icons/LiveHelpRounded";
import LinearProgress from "@material-ui/core/LinearProgress";
import "../App.css";

function Home() {
  const [itemsLengthState, setLength] = useState(0);

  function itemsArray(itemsLength) {
    console.log(itemsLength);
    setLength(itemsLength);
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
          <QuestionList callBackItems={itemsArray} />
        </Grid>
        <Divider />
        <Button href="/questions" className="new-question-btn">
          <LiveHelpRoundedIcon className="btn-icon" />
          new question
        </Button>
        <Grid container justify={"center"}>
          {itemsLengthState !== 0 ? (
            <Pagination itemCount={itemsLengthState} />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
