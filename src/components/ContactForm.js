import {React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import axios from "axios";
import "../assets/css/ctaform.scss";
export default function ContactForm() {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`/api/email`, {
      firstName,
      email,
      subject,
      company,
      phoneNumber,
      message,
    });
  };
  
  return (
    <div className='form-fields'>
        <form onSubmit={submitHandler} name='ctaform'>
        <input type="hidden" name="form-name" value="ctaform" />
          <Grid container rowSpacing={2} columnSpacing={2} className="forminsideinput">
            <Grid item sm={6} xs={12}  className="input_group">
              <FormControl fullWidth>
                <TextField type="text"   required onChange={(e) => setFirstName(e.target.value)}  className="form-control" id="first_name" name="first_name" label="First Name"  aria-describedby="first_name" />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12} className="input_group" >
              <FormControl fullWidth>
                  <TextField type="email" required onChange={(e) => setEmail(e.target.value)} className="form-control"  id="Email" name="Email" label="Email" aria-describedby="Email" />
                </FormControl>
            </Grid>
            <Grid item sm={6} xs={12} className="input_group" >
              <FormControl fullWidth>
                <TextField type="text" required onChange={(e) => setCompany(e.target.value)} className="form-control" id="Company"  name="Company" label='Company' aria-describedby="Company" />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12} className="input_group" >
              <FormControl fullWidth>
                <TextField type="text" required  onChange={(e) => setPhoneNumber(e.target.value)} className="form-control"  id="Phonenumber" name="Phonenumber" label='Phone Number' aria-describedby="Phonenumber" />
              </FormControl>
            </Grid>
            <Grid item xs={12} className="input_group" >
              <FormControl fullWidth>
                <InputLabel>Services Your Are Interested In</InputLabel>
                  <Select
                    required
                    name="demo-simple-select"
                    id="demo-simple-select"
                    onChange={(e) => setSubject(e.target.value)}
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
                <TextField fullWidth type='text' required onChange={(e) => setMessage(e.target.value)} className='form-control'name='help' id='help' label='How can we help you?' aria-describedby='help' />
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