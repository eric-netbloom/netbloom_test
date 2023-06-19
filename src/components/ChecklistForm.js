import {React, useState } from 'react';
import { Grid, TextField, FormControl, Alert } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from "axios";
import "../assets/css/ctaform.scss";
export default function ChecklistForm() {

  const [alert, setAlert] = useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
      .then(() => {
        setAlert(true);
        document.getElementById('contact-form').reset()
      }
      )
      .catch((error) => alert(error));

  };
  
  return (
    <div className='form-fields checklistform'>
       {alert ? <Alert onClose={() => {}} icon={<CheckCircleOutlineIcon  fontSize="inherit" />} severity="success">
           Thank you for your Enquiry we will get back with you as soon as possible
        </Alert> : <></>}
        <form method='POST'  name='checklist' id="contact-form" onSubmit={submitHandler}>
          <input type="hidden" name="form-name" value="checklist" />
          <Grid container rowSpacing={2} columnSpacing={2} className="forminsideinput">
            <Grid item sm={12} xs={12}  className="input_group">
              <FormControl fullWidth>
                <TextField type="text" required  className="form-control" name="name" id="name" label="Name"  aria-describedby="name" />
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={12} className="input_group" >
              <FormControl fullWidth>
                  <TextField type="email" required  className="form-control" name="email" label="Email" aria-describedby="Email" />
                </FormControl>
            </Grid>
            <Grid item xs={12} className="input_group" >
              <button className='gradientButton1 btn btn_support desktop'>Submit</button>
            </Grid>
          </Grid>
        </form>
      </div>
  );
}