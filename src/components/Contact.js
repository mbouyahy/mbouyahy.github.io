import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container} from '@mui/material';
import { styled } from '@mui/system';

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
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate mailto link
    const { name, message} = formData;
    const subject = `${encodeURIComponent(name)} – Contact from Portfolio`;
    const body = encodeURIComponent(message);

    // Set the "To:" field to the user's email address
    const toEmail = "mourad.bouyahyaoui@outlook.com";  // User's email

    let mailtoLink = `mailto:${toEmail}?subject=${subject}&body=${body}`;

    // Open the mail client
    window.location.href = mailtoLink;
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
    </Container>
  );
};

export default ContactForm;
