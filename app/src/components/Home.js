import React, { Router } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grow from "@material-ui/core/Grow";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftRoundedIcon from "@material-ui/icons/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import Button from '@material-ui/core/Button'; 
import LinearProgress from "@material-ui/core/LinearProgress";
import "../App.css";

function generateElements() {
  const elementsArray = [];

  for (let index = 0; index < 20; index++) {
    elementsArray.push(
      <Grow
        in
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: index * (5000 / 20) }}
      >
        <ListItem button>
          <ListItemText primary="Um texto" secondary="Secondary text" />
        </ListItem>
      </Grow>
    );
  }

  return elementsArray;
}

function Home() {
  return (
    <div>
      {/* <div className="progress-wrapper">
        <LinearProgress color="secondary" className="progress" />
      </div> */}

      <Container className="container" spacing={10}>
        <Grid container className="list-container">
          <Grid item xs={12} sm={12} className="grid-item grid-list">
            <List wrap className="list" style={{ padding: 0 }}>
              {generateElements()}
            </List>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <IconButton >
          <ArrowLeftRoundedIcon className="control-btn"/>
        </IconButton>
        <Button className="control-btn">1</Button><Button className="control-btn">2</Button>
        <IconButton >
          <ArrowRightRoundedIcon className="control-btn"/>
        </IconButton>
      </Container>
    </div>
  );
}

export default Home;
