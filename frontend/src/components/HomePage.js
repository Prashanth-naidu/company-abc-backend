import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 0;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const API_URL = 'http://localhost:8080';

const HomePage = () => {
  const [heading, setHeading] = useState('Welcome to Company ABC');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeading = async () => {
      try {
        console.log('HomePage - Fetching heading from:', `${API_URL}/api/headings`);
        const response = await axios.get(`${API_URL}/api/headings`);
        console.log('HomePage - Response:', response.data);
        
        if (response.data && response.data.headingText) {
          setHeading(response.data.headingText);
        }
      } catch (error) {
        console.error('Error fetching heading:', error);
        console.error('Error details:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHeading();
  }, []);

  return (
    <Container>
      <HeroSection>
        <Heading>{loading ? 'Loading...' : heading}</Heading>
        <Subheading>
          Empowering businesses with innovative solutions for a better tomorrow
        </Subheading>
      </HeroSection>
    </Container>
  );
};

export default HomePage; 