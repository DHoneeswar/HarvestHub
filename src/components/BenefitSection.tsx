import { motion } from 'framer-motion';
import { Sprout, Leaf, ShoppingCart } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: 'spring' },
  }),
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Sprout className="h-10 w-10 text-green-600" />,
      title: 'Empower Farmers',
      description: 'Enable farmers to connect directly with customers and sell produce at fair prices.',
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: 'Sustainable Agriculture',
      description: 'Promote eco-friendly practices by supporting local and organic produce.',
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-green-600" />,
      title: 'Customer Convenience',
      description: 'One-stop marketplace for customers to find fresh, farm-to-table goods.',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-8">
          Why Choose HarvestHub?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-green-50 hover:bg-green-100 p-6 rounded-2xl shadow-lg transition-colors duration-300"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-700 transition">
            Explore More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
