import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import ChecklistForm from "../components/ChecklistForm.js";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 580,
  maxWidth: '90%',
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="greenButton btn">Get the Checklist</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="center checklist-modal modal">
            <h2 id="transition-modal-title">Get our <span className='textGreen'>SEO Checklist</span> delivered right to your inbox.</h2>
            <h3 id="transition-modal-description">Start Ranking with SEO</h3>
            <ChecklistForm/>
            <p>We hate SPAM and promise to keep your email address safe.</p>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}