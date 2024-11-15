import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6">
      <div className="container mx-auto px-4 text-center">
        {/* <h2 className="text-lg font-semibold text-gray-700">Follow Me</h2> */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.instagram.com/emtdavid233/?locale=pl&hl=am-et"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaInstagram className="w-14 h-14" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-han-6362402b2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaLinkedin className="w-14 h-14" />
          </a>
        </div>
        <p className="text-gray-500 mt-4 text-sm">
          © {new Date().getFullYear()} David Han. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;