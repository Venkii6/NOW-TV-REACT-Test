import React from 'react'
import AllMessageList from '../AllMessageList/AllMessageList'
import logo from '../../Assets/logo.png'
import './Home.css'

const Home = () => {
  return (
    <main className="homeWrapper">
      <figure>
        <img className="now-logo" alt="now tv logo" src={logo} />
      </figure>
      <h1 className="homeWrapper-heading">Welcome to the NOW TV Test!</h1>
      <section>
        <AllMessageList />
      </section>
    </main>
  )
}

export default Home
