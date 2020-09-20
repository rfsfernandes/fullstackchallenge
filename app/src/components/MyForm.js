import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import * as QuestionActions from "../store/actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FORM_INITIAL_STATE = {
  name: "",
  email: "",
  observations: "",
  date: "",
};

const MyForm = ({ response, dispatch }) => {
  const [formFields, setFormFields] = useState(FORM_INITIAL_STATE);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    severity: "",
    message: "",
  });

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(new Date().getDate() + 2);
  minDate.setHours(0);
  minDate.setMinutes(0);
  minDate.setMilliseconds(0);

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setFormFields((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function sendQuestion(event) {
    event.preventDefault();

    const inputDate = new Date(formFields.date).getTime();
    let foundError = false;
    let errorMessage = "Fill required fields.";

    if (!formFields.name) {
      setErrorName(true);
      foundError = true;
    } else {
      setErrorName(false);
    }

    if (!formFields.email) {
      setErrorEmail(true);
      foundError = true;
    } else {
      setErrorEmail(false);
    }

    if (!formFields.date) {
      setErrorDate(true);
      foundError = true;
    } else if (inputDate < minDate.getTime()) {
      setErrorDate(true);
      foundError = true;
      errorMessage = "Invalid date. Please pick a date after tomorrow!";
      showSnack(errorMessage, "error");
      return;
    } else {
      setErrorDate(false);
    }

    if (!foundError) {
      makeRequest();
    } else {
      showSnack(errorMessage, "error");
    }
  }

  const makeRequest = async () => {
    QuestionActions.postQuestion(formFields, dispatch, handleResponse);
  };
 
  useEffect(() => {
    if (response.message) {
      handleResponse(response);
    }
  }, [response])

  function handleResponse(data) {
    let severity = "";
    if (data.code === 200) {
      cleanFields();
      severity = "success";
    } else {
      severity = "error";
    }

    showSnack(data.message, severity);
  }

  function showSnack(message, severity) {
    setAlertInfo({
      severity: severity,
      message: message,
    });
    setOpen(true);
  }

  function cleanFields() {
    setFormFields(FORM_INITIAL_STATE);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <form onSubmit={sendQuestion} className="form-questions">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-required"
              label="Nome"
              variant="outlined"
              className="questions-input"
              name="name"
              value={formFields.name}
              onChange={handleFieldChange}
              error={errorName}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-required"
              label="Email"
              type="email"
              variant="outlined"
              className="questions-input"
              name="email"
              value={formFields.email}
              onChange={handleFieldChange}
              error={errorEmail}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-required"
              type="datetime-local"
              variant="outlined"
              className="questions-input"
              name="date"
              min={minDate}
              value={formFields.date}
              onChange={handleFieldChange}
              error={errorDate}
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
              name="observations"
              value={formFields.observations}
              onChange={handleFieldChange}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button type={"submit"} className="new-question-btn questions-btn">
              send
            </Button>
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={alertInfo.severity}>
            {alertInfo.message}
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
};

export default connect((state) => ({ response: state.questions.response }))(
  MyForm
);
