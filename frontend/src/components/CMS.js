import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Form = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  background-color: ${props => props.$success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.$success ? '#155724' : '#721c24'};
`;

const API_URL = 'http://localhost:8080';

const CMS = () => {
  const [headingText, setHeadingText] = useState('');
  const [message, setMessage] = useState({ text: '', success: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeading = async () => {
      try {
        console.log('Fetching heading from:', `${API_URL}/api/headings`);
        const response = await axios.get(`${API_URL}/api/headings`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Response:', response.data);
        if (response.data && response.data.headingText) {
          setHeadingText(response.data.headingText);
        }
      } catch (error) {
        console.error('Error fetching heading:', error);
        console.error('Error details:', error.response?.data || error.message);
        setMessage({ text: `Error fetching heading: ${error.message}`, success: false });
      } finally {
        setLoading(false);
      }
    };

    fetchHeading();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending update to:', `${API_URL}/api/headings`);
      console.log('Data:', { headingText });
      
      const response = await axios.post(`${API_URL}/api/headings`, 
        { headingText },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      console.log('Update response:', response.data);
      setMessage({ text: 'Heading updated successfully!', success: true });
    } catch (error) {
      console.error('Error updating heading:', error);
      console.error('Error details:', error.response?.data || error.message);
      setMessage({ text: `Error updating heading: ${error.message}`, success: false });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Content Management System</Title>
        <InputGroup>
          <Label htmlFor="heading">Main Heading Text</Label>
          <Input
            type="text"
            id="heading"
            value={headingText}
            onChange={(e) => setHeadingText(e.target.value)}
            placeholder="Enter heading text"
            disabled={loading}
          />
        </InputGroup>
        <Button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Save Changes'}
        </Button>
        {message.text && (
          <Message $success={message.success}>
            {message.text}
          </Message>
        )}
      </Form>
    </Container>
  );
};

export default CMS; 