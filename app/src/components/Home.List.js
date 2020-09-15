import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grow from "@material-ui/core/Grow";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "../App.css";



function Pagination(props) {
  const itemsArray = [];
  console.log(props);

  function generateElements() {
    for (let index = 0; index < 20; index++) {
      itemsArray.push(
        <div>
          { index === 0 ? "" :<Divider variant="middle" style={{padding: "0 50px !important"}}/>}
          <Grow
          in
          style={{ transformOrigin: "0 0 0" }}
          {...{ timeout: index * (5000 / 20) }}
        >
          <ListItem button>
            <ListItemText primary="Um texto" secondary="Secondary text" />
          </ListItem>
        </Grow>
        </div>
        
      );
    }
    props.callBackItems(itemsArray.length);
    return itemsArray;
  }

  return (
    <List wrap className="list" style={{ padding: 0 }}>
      {generateElements()}
    </List>
  );
}

export default Pagination;
