import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'; 
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
        <form className="form-questions">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                required
                id="outlined-required"
                label="Nome"
                variant="outlined"
                type="email"
                className="questions-input"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                variant="outlined"
                className="questions-input"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                required
                id="outlined-required"
                type="datetime-local"
                variant="outlined"
                className="questions-input"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-required"
                label="Observações"
                variant="outlined"
                multiline
                rows={8}
                className="questions-input"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button className="new-question-btn questions-btn">send</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default Questions;
