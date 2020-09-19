import React from "react";
import Grid from "@material-ui/core/Grid";
import MyForm from "../components/Questions.form"
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import IconButton from "@material-ui/core/IconButton";
import "../App.css";

function Questions() {
  return (
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
  );
}

export default Questions;
