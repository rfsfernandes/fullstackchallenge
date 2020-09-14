import React, { Router } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Grow from "@material-ui/core/Grow";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import "../App.css";

function generateElements() {
  const elementsArray = [];

  for (let index = 0; index < 20; index++) {
    elementsArray.push(
      <Grow in style={{ transformOrigin: "0 0 0" }} {...{ timeout: index * (2000 / 20) }}>
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
      <Grid>
        <List>
          {generateElements()}
        </List>
      </Grid>
    </div>
  );
}

export default Home;
