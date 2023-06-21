import {React, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Select, MenuItem, InputLabel, FormControl, Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from "axios";
import "../assets/css/ctaform.scss";

export default function ContactForm() {
  const form = useRef(null);

  const [open, setOpen] = useState(true);
  const [alert, setAlert] = useState(false);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [company, setCompany] = useState("");
 const [help, setHelp] = useState("");
 const [select, setselect] = useState("");
  const submitHandler = event => {
    event.preventDefault();
    
    const myForm = event.target;
    const formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
      .then(() => {
        setAlert(true);
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setHelp("");
        setselect("")
      }
      )
      .catch((error) => alert(error));
      event.target.reset(); 
  };
  return (
    <div className='form-fields'>
      {alert ?   
        <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Thank you for your Enquiry we will get back with you as soon as possible
        </Alert>
      </Collapse>: <></>}
        <form name='ctaform' method='POST'  id="contact-form" onSubmit={submitHandler} >
        <input type="hidden" name="form-name" value="ctaform" />
          <Grid container rowSpacing={2} columnSpacing={2} className="forminsideinput">
            <Grid item sm={6} xs={12}  className="input_group">
              <FormControl fullWidth>
                <TextField type="text" value={name} onChange={(e) => setName(e.target.value)}   required   className="form-control" id="first_name" name="firstname" label="First Name"  aria-describedby="first_name" />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12} className="input_group" >
              <FormControl fullWidth>
                  <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  className="form-control"  id="Email" name="email" label="Email" aria-describedby="Email"   />
                </FormControl>
            </Grid>
            <Grid item sm={6} xs={12} className="input_group" >
              <FormControl fullWidth>
                <TextField type="text" value={company} onChange={(e) => setCompany(e.target.value)} required  className="form-control" id="Company"  name="company" label='Company' aria-describedby="Company"   />
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12} className="input_group" >
              <FormControl fullWidth>
                <TextField type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required  className="form-control"  id="Phonenumber" name="phonenumber" label='Phone Number' aria-describedby="Phonenumber"  />
              </FormControl>
            </Grid>
            <Grid item xs={12} className="input_group" >
              <FormControl fullWidth>
                <InputLabel>Services Your Are Interested In</InputLabel>
                  <Select
                    required
                    name="service"
                    id="service"
                    
                    label="Services Your Are Interested In"
                    value={select} onChange={(e) => setselect(e.target.value)}
                  >
                     <MenuItem disabled value="">
                      <em>Services Your Are Interested In</em>
                    </MenuItem>
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
                <TextField fullWidth type='text' required   value={help} onChange={(e) => setHelp(e.target.value)} className='form-control'name='help' id='help' label='How can we help you?' aria-describedby='help'  />
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