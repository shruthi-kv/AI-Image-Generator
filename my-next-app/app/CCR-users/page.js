"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetch("https://dummyjson.com/users");
      let users = await data.json();

      setUsers(users.users);
    };
    getUsers();
  }, []);


  return (
    <>
      <h1>Users are here</h1>
      <ul>
        {users.map((item) => {
          return (
            <Link href={`CCR-users/${item.id}`} key={item.id}>
              <div>{item.firstName}</div>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Users;
