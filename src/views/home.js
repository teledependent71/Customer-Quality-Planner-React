import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Quality Planner</title>
        <meta property="og:title" content="Customer Quality Planner" />
      </Helmet>
    </div>
  )
}

export default Home
