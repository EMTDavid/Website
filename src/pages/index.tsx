import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';


const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-screen pt-20 bg-gray-50">
        <h1 className="text-6xl font-serif text-gray-800 font-bold">
          David Han
        </h1>
      </main>
      <Footer />
    </>
  );
};

export default Home;