import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Container, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

// Modern styled components
const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: '50px auto',
  padding: '40px',
  backgroundColor: '#f5f5f5',
  borderRadius: '12px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
  },
}));

const Header = styled(Typography)(({ theme }) => ({
  marginBottom: '30px',
  textAlign: 'center',
  color: '#333',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  letterSpacing: '1px',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#84c5cb',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#fea918',
  },
  marginTop: '20px',
  padding: '12px 24px',
  fontWeight: 'bold',
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openPopup, setOpenPopup] = useState(false); // State for popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      if (response.data.success) {
        setOpenPopup(true); // Open popup when form is successfully submitted
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleClosePopup = () => {
    setOpenPopup(false); // Close popup
  };

  return (
    <Container>
      <FormContainer>
        <Header variant="h4">Contact Me</Header>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              marginBottom: 2,
              borderRadius: '8px',
              backgroundColor: '#fff',
            }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              marginBottom: 2,
              borderRadius: '8px',
              backgroundColor: '#fff',
            }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            required
            sx={{
              marginBottom: 2,
              borderRadius: '8px',
              backgroundColor: '#fff',
            }}
          />
          <SubmitButton variant="contained" type="submit" fullWidth>
            Send Message
          </SubmitButton>
        </form>
      </FormContainer>

      {/* Popup (Modal) */}
      <Dialog open={openPopup} onClose={handleClosePopup}>
        <DialogTitle>Form Submitted</DialogTitle>
        <DialogContent>
          <Typography>Your message has been sent successfully. Thank you for reaching out! I will get back to you shortly.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ContactForm;
