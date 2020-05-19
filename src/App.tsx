import React from 'react';
import NavigationBar from './nav/NavigationBar';
import MyRouter from './MyRouter';
import { CardProvider } from './contexts/CardContext';

function App() {
  return (
    <CardProvider>
      <NavigationBar />
      <MyRouter />
    </CardProvider>
  );
}

export default App;
