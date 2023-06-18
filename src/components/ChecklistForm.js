import {React, useState } from 'react';
import { Grid, TextField, FormControl } from '@mui/material';
import axios from "axios";
import "../assets/css/ctaform.scss";
export default function ChecklistForm() {

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`/api/email`, {
      fname,
      email,
    });
  };
  
  return (
    <div className='form-fields checklistform'>
        <form  name='checklist'>
          <input type="hidden" name="form-name" value="checklist" />
          <Grid container rowSpacing={2} columnSpacing={2} className="forminsideinput">
            <Grid item sm={12} xs={12}  className="input_group">
              <FormControl fullWidth>
                <TextField type="text" required onChange={(e) => setFname(e.target.value)}  className="form-control" name="name" id="name" label="Name"  aria-describedby="name" />
              </FormControl>
            </Grid>
            <Grid item sm={12} xs={12} className="input_group" >
              <FormControl fullWidth>
                  <TextField type="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" label="Email" aria-describedby="Email" />
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