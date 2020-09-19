import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import api from "../services/api";
const validator = require("email-validator");

function MyForm() {
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(new Date().getDate() + 2);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    observations: "",
    date: "",
  });

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

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

    if (!inputDate < minDate.getTime()) {
			setErrorDate(true);
    }

    if (!formFields.date) {
			setErrorDate(true);
    }

    if (!formFields.name) {
			setErrorName(true);
    }

    if (!validator.validate(formFields.email)) {
			setErrorEmail(true);
		}
		
		if(!errorName && !errorEmail && !errorDate) {
			makeRequest();
		}
  }

  const makeRequest = async () => {

    try{
      const request = await api.post("/question", formFields);
      console.log(request);
    } catch(err) {

    }

  }

  return (
    <form onSubmit={sendQuestion} className="form-questions">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-required"
            label="Nome"
            variant="outlined"
            className="questions-input"
            name="name"
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
						onChange={handleFieldChange}
						error={errorEmail}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id="outlined-required"
            type="date"
            variant="outlined"
            className="questions-input"
            name="date"
            min={minDate}
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
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button type={"submit"} className="new-question-btn questions-btn">
            send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default MyForm;
