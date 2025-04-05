import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-100 to-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-green-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Farmers. Connecting Communities.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Welcome to HarvestHub – Where technology meets agriculture for a better tomorrow.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/signup"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="border border-green-600 text-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-md transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
