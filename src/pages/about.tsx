import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800">About</h1>
        <p className="mt-4 text-gray-600">
          This is the About page. Learn more about this project here.
        </p>
      </main>
    </>
  );
};

export default About;