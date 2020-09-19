import React from "react";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import CustomItem from "./CustomItem";


function QuestionList(prop) {

  const questions = prop.questionList.questions;

  return (
    <List wrap className="list" style={{ padding: 0 }}>
      {questions !== undefined
        ? questions.map((question, index) => {

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
                <CustomItem question={question} index={index} />
              </div>
            );
          })
        : ""}
    </List>
  );
}

export default QuestionList;
