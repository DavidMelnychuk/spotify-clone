import type { NextPage } from 'next';
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className="flex">
        <Sidebar />
        <Center />
        <div>{/* Player*/}</div>
      </main>
    </div>
  );
};

export default Home;
