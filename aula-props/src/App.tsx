import React from "react";
import { User } from "./User";

export function App() {
  const user = {
    name: 'Pedro',
    age: 28,
    email: 'pedro@example.com',
    city: 'Belo Horizonte',
    profesion: 'Programador',
    avatar: 'https://png.pngtree.com/png-vector/20190704/ourla'
  };
  return (
    <User
      name={user.name}
       age={user.age}
      email={user.email}
      city={user.city}
      profesion={user.profesion}
      avatar={user.avatar}
    />
  )
}

export default App;