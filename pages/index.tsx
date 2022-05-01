import type { NextPage } from 'next'
import Sidebar from '../components/sidebar.js'

const Home: NextPage = () => {
  return (
    <div className="">
      <h1>Spotify Clone</h1>

      <main>
        <Sidebar />
        {/* center*/}
        <div>{/* Player*/}</div>
      </main>
    </div>
  )
}

export default Home
