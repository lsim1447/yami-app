import React from 'react';
import styled from 'styled-components';
import { BackgroundContainer } from '../components/internal/CommonContainers';

function Home() {
  return (
    <BackgroundContainer theme={
      {
          backgroundImage: "homepage_background_1.jpg"
      }
    }>
    
    </BackgroundContainer>
  );
}

export default Home;