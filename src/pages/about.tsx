import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen pt-20 bg-gradient-to-r from-gray-100 via-white to-gray-200">
        <h1 className="text-4xl font-serif text-gray-800 mb-6">
          About Me
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
          Hi! My name is David Han. I'm a student majoring in Mathematics, Philosophy, and Japanese at University of Wisconsin-Madison. I'm interested in <span className="text-indigo-600 font-semibold"> Metaphysics</span> -- the study of the fundamentals of beings, effects, and causation, and <span className="text-indigo-600 font-semibold"> Mathematical Logic</span> -- the study of formulating all mathematical concepts from pure logic.
        </p>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
          Besides academic, I'm interested in Japanese culture, specificlly reading mangas and cooking Japanese. I also play a lot of Counter-Strike 2, currently the In-Game Leader for Badger CS2 team.
        </p>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
          I believe in the beauty of elegant thought and the timeless wisdom that shapes our understanding of the world.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;