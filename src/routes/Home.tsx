import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const HomePageContainer = styled.div `
  background: url(homepage_background_1.jpg) no-repeat center center fixed; 
  position: fixed;  
  left: 0; 
  min-width: 100%;
  min-height: 100%;
`;

function Home() {
  return (
    <HomePageContainer>
      
    </HomePageContainer>
  );
}

export default Home;