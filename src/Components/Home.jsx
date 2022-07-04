import React from 'react'
import AllMessageList from './AllMessageList'
import './Home.css'
import dash from '../Assets/logo.png'

const Home = () => {
  return (
    <main className="homeWrapper">
      <figure>
        <img className="now-logo" alt="now tv logo" src={dash} />
      </figure>
      <h1 className="homeWrapper-heading">Welcome to the NOW TV Test!</h1>
      <section>
        <AllMessageList />
      </section>
    </main>
  )
}

export default Home
