import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grow from "@material-ui/core/Grow";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../actions";
import "../App.css";
let didLoad = false;

function QuestionList(props) {
  const itemsArray = useSelector(state => state.questions);
  const dispatch = useDispatch();
  const elementsArray = [];
  
  function generateElements() {
    for (let index = 0; index < itemsArray.length; index++) {
      elementsArray.push(
        <div>
          {index === 0 ? (
            ""
          ) : (
            <Divider
              variant="middle"
              style={{ padding: "0 50px !important" }}
            />
          )}
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
    // props.callBackItems(itemsArray.length);
    return elementsArray;
  }

  

  const cenas = didLoad ? null : dispatch(getQuestions(props.page));

  if (cenas !== null) {
    didLoad = true;
  }

  return (
    <List wrap className="list" style={{ padding: 0 }}>
      {itemsArray !== null ? generateElements() : ""}
    </List>
  );
}

export default QuestionList;
