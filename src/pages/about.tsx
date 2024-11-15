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
          Welcome! I’m someone deeply fascinated by the exploration of 
          <span className="text-indigo-600 font-semibold"> metaphysics</span>—the profound study of existence, 
          consciousness, and the underlying principles of reality. 
        </p>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
          By merging philosophy, abstract mathematics, and the natural world, I aim to unravel the interconnectedness of our universe. 
          This site serves as a space to share my reflections, inspirations, and discoveries as I delve into the mysteries of being.
        </p>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
          I believe in the beauty of elegant thought and the timeless wisdom that shapes our understanding of the cosmos. Join me as we explore the boundaries of thought and reason.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;