import React from "react";
import Grid from "@material-ui/core/Grid";
import MyForm from "../components/MyForm"
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import IconButton from "@material-ui/core/IconButton";
import Grow from "@material-ui/core/Grow";
import "../App.css";

function Questions() {
  return (
    <Grow in style={{ transformOrigin: "0 0 0" }} {...{ timeout: 500 }}>
      <div className="questions-background">
      <IconButton className="btn-back-icon" href="/">
        <KeyboardBackspaceRoundedIcon  fontSize={"large"}/>
      </IconButton>
      <Grid
        container
        justify={"center"}
        alignItems={"center"}

        className="question-grid"
      >
        <MyForm />
      </Grid>
    </div>
    </Grow>
    
  );
}

export default Questions;
