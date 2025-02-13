import React, { useState } from 'react';
import { Profile } from './components/Profile';
import UserContext from './contexts/UserContext';

function App() {
  const [name, setName] = useState("Eduardo")
  return (
    <UserContext.Provider value={{ name, setName }}>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
