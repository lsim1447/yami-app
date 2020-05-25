import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BackgroundContainer } from '../components/internal/CommonContainers';

function Home() {
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <BackgroundContainer theme={
      {
          backgroundImage: "homepage_background_1.jpg"
      }
    }>
      <button onClick={() => setModalShow(true)}>Click me</button>
      
    </BackgroundContainer>
  );
}

export default Home;