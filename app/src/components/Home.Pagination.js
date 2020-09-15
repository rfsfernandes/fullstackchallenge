import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowLeftRoundedIcon from "@material-ui/icons/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import Button from '@material-ui/core/Button'; 
import "../App.css";

const buttonsArray = [];

function generateButtons(itemCount) {
  let numberOfButtons = Math.floor(itemCount / 20);
  for (let index = 0; index < numberOfButtons; index++) {
    buttonsArray.push(<Button className="control-btn">{index + 1}</Button>);
  }

  return buttonsArray;
}

function Pagination(props) {
  return (
    <div>
      <IconButton>
        <ArrowLeftRoundedIcon className="control-btn" />
      </IconButton>
      {generateButtons(props.itemCount)}
      <IconButton>
        <ArrowRightRoundedIcon className="control-btn" />
      </IconButton>
    </div>
  );
}

export default Pagination;
