import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 60,
    },
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{ new Date().toLocaleTimeString() }</p>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
