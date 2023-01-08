import React from "react"
import { useState, useEffect } from 'react';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import axios from "axios";
import Poll from "../components/Poll";
import { Button } from "@mui/material";


const buttonRowStyle = {
  display: "flex",
  justifyContent: "space-evenly"
}


function PollsPage() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    //Call database endpoint
    axios.get("http://localhost:5000/get-votes")
    .then((res) => {
      setData(res.data);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  function addVote(poll, vote){
    axios.post("http://localhost:5000/add-vote", { poll, vote })
    .then(() => {
      fetchData();
    })
    .catch((err) => console.log(err));
    
  }

  return (
    <Layout>
      <h1>Polls</h1>
      <p>A page to demonstrate the ability to support a MERN tech stack integrated with a gatsby framework front end. In this simple poll we can vote for "Red", "Blue" or "Yellow" and have our vote recorded. The Poll component and database schema is designed to be accomodative towards future polls.</p>
      <h2>Color Poll</h2>
      <Poll subject="color" data={data}/>
      <br/>
      <div style={buttonRowStyle}>
        <Button variant="contained" onClick={() => {addVote('color', 'red')}}>Red</Button>
        <Button variant="contained" onClick={() => {addVote('color', 'blue')}}>Blue</Button>
        <Button variant="contained" onClick={() => {addVote('color', 'yellow')}}>Yellow</Button>
      </div>
      <br/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Polls" />

export default PollsPage
