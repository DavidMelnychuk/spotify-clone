import type { NextPage } from 'next'
import Sidebar from '../components/sidebar.js'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main>
        <Sidebar />
        {/* center*/}
        <div>{/* Player*/}</div>
      </main>
    </div>
  )
}

export default Home
