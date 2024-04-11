import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { username } = useParams(); // Extract username from URL parameters
  return <h1>Hello, {username}</h1>;
};

export default UserPage;
