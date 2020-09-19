import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grow from "@material-ui/core/Grow";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

function QuestionList(prop) {
  const questions = prop.questionList.questions;

  return <List wrap className="list" style={{ padding: 0 }}>
  {questions !== undefined ? questions.map((question, index) => {
        return (
          <div key={question._id}>
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
              {...{ timeout: index * (3000 / 20) }}
            >
              <ListItem button >
                <ListItemText primary={question.name} secondary={question.observations}/>
              </ListItem>
            </Grow>
          </div>
        );
      })
     : ""}
</List>
}

export default QuestionList;
