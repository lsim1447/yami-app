import React from 'react';
import NavigationBar from './nav/NavigationBar';
import MyRouter from './MyRouter';
import { CardProvider } from './contexts/CardContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <CardProvider>
        <NavigationBar />
        <MyRouter />
      </CardProvider>
    </UserProvider>
  );
}

export default App;
