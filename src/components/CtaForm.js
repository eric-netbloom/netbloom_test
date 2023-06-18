import {React, useState } from 'react';
import ContactForm from "../components/ContactForm.js";
export default function CtaForm() {

    return (
      <div className="cta center">
        <div className="title default-sec-overlay greenBg">
          <div className="default-sec">
            <div className="default-sec-wrap">
              <h2>Let Us Know More About Your Project</h2>
              <p className='sub-title'>Fill in your details & we'll give you a call</p>
            </div>
          </div>
        </div>
        <div className="form default-sec-overlay darkblueBg">
          <div className="default-sec-content">
            <div className="default-sec-wrap">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  };
