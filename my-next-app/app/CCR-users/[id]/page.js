"use client";
import  { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const GetUserData = () => {
  const {id} = useParams();
  const[userData,setuserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      let users = await data.json();
      console.log(users)
      setuserData(users)
    };

    getUserData();
  },[]);

  return <div>
    <h1>{userData.firstName}</h1>
  </div>;
};

export default GetUserData;
