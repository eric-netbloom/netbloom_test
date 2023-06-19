import {React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Select, MenuItem, InputLabel, FormControl, Alert } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from "axios";
import "../assets/css/ctaform.scss";
export default function ContactForm() {

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
    <div className='form-fields'>
       {alert ? <Alert onClose={() => {}} icon={<CheckCircleOutlineIcon  fontSize="inherit" />} severity="success">
           Thank you for your Enquiry we will get back with you as soon as possible
        </Alert> : <></>}
        <form name='ctaform' method='POST'  id="contact-form" onSubmit={submitHandler}>
        <input type="hidden" name="form-name" value="ctaform" />
          <Grid container rowSpacing={2} columnSpacing={2} className="forminsideinput">
            <Grid item sm={6} xs={12}  className="input_group">
              <FormControl fullWidth>
                <TextField type="text"   required   className="form-control" id="first_name" name="firstname" label="First Name"  aria-describedby="first_name" />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12} className="input_group" >
              <FormControl fullWidth>
                  <TextField type="email" required  className="form-control"  id="Email" name="email" label="Email" aria-describedby="Email" />
                </FormControl>
            </Grid>
            <Grid item sm={6} xs={12} className="input_group" >
              <FormControl fullWidth>
                <TextField type="text" required  className="form-control" id="Company"  name="company" label='Company' aria-describedby="Company" />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12} className="input_group" >
              <FormControl fullWidth>
                <TextField type="text" required   className="form-control"  id="Phonenumber" name="phonenumber" label='Phone Number' aria-describedby="Phonenumber" />
              </FormControl>
            </Grid>
            <Grid item xs={12} className="input_group" >
              <FormControl fullWidth>
                <InputLabel>Services Your Are Interested In</InputLabel>
                  <Select
                    required
                    name="service"
                    id="demo-simple-select"
                    
                    label="Services Your Are Interested In"
                  >
                    <MenuItem value="Website Design & Development">Website Design & Development</MenuItem>
                    <MenuItem value="Search Engine Optimisation">Search Engine Optimisation</MenuItem>
                    <MenuItem value="Pay Per Click Marketing">Pay Per Click Marketing</MenuItem>
                    <MenuItem value="Pay Per Click Marketing"> Conversion Rate Optimisation</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
              </FormControl> 
            </Grid>
            <Grid item xs={12} className="input_group" >
              <FormControl fullWidth>
                <TextField fullWidth type='text' required  className='form-control'name='help' id='help' label='How can we help you?' aria-describedby='help' />
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