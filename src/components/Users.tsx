import React, { useState } from "react";
import { UserCard } from "../components/UserCard";

export interface User {
  userId: number;
  firstName: String;
  lastName: String;
  age: Number;
  hobbies: String;
}

export const Users = (props: any) => {
  const mockUsers: User[] = [
    {
      userId: Math.round(Math.random() * 1000),
      firstName: "Chidi",
      lastName: "Nwaka",
      age: 29,
      hobbies: "playing sports, coding, dancing",
    },
    {
      userId: Math.round(Math.random() * 1000),
      firstName: "Mojola",
      lastName: "Nwaka",
      age: 27,
      hobbies: "drawing, watching movies",
    },
    {
      userId: Math.round(Math.random() * 1000),
      firstName: "Osemeke",
      lastName: "Nwaka",
      age: 31,
      hobbies: "programming, playing video games",
    },
  ];

  const [users, setUsers] = useState(mockUsers);

  return (
    <div>
      <h3>Below are the list of registers users</h3>
      {users.map((user) => (
        <UserCard key={user.userId} user={user} />
      ))}
      ;
    </div>
  );
};
