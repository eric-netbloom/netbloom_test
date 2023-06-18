import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import sanityClient from "../client.js";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Faqs2() {

  const [allFAQs, setAllFAQs] = useState(null);
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel ) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "faqs"]{
            question,
            answer,
        }`
      )
      .then((data) => setAllFAQs(data))
      .catch(console.error);
  }, []);

  return (
    <div className="default-sec faqs-section lightGrayBg">
      <div className="default-sec-overlay">
        <div className="default-sec-content text-point accordion_wp">
          <div className="default-sec-wrap inner-text-point-left">
            <h2 className="center">Frequently Asked <span className="textGreen">Questions</span></h2>
            <Box sx={{ display: 'flex', flexWrap: "wrap" }} className='accordion_inside faqs-accordion'>
              {allFAQs && allFAQs.map((item, i) =>
              <Box className='testimonial-wrapper' key={i}>
                <Accordion expanded={expanded === i} onChange={handleChange(i)}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="faqs-accordion-header">
                    <Typography> {item?.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item?.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              )}
            </Box>
          </div> 
        </div>
      </div>
    </div>
  );
}