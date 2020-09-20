import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import Grow from "@material-ui/core/Grow";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

function CustomItem(props) {
  const [open, setOpen] = useState(false);
  const question = props.question;
  const index = props.index;
  const rawdate = new Date(question.date);
  const date =
    rawdate.toLocaleDateString() + " " + rawdate.toLocaleTimeString();

  function handleClick() {
    setOpen((prevState) => !prevState);
  }
  return (
    <div>
      <Grow
        in
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: index * (3000 / 20) }}
      >
        <ListItem button onClick={() => handleClick()}>
          <ListItemText primary={question.name} secondary={question.email} ></ListItemText>
          {date}
        </ListItem>
      </Grow>
      {question.observations ? (
        <Collapse in={open}>
          <ListItem>
            <ListItemText secondary={question.observations} />
          </ListItem>
        </Collapse>
      ) : (
        ""
      )}
    </div>
  );
}

export default CustomItem;
