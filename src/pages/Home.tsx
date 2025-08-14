import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Fish, 
  Trophy, 
  ShoppingBag, 
  Heart, 
  Globe, 
  Users,
  ArrowRight,
  Play
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Fish,
      title: 'Learn About Endangered Animals',
      description: 'Discover fascinating facts about wildlife species at risk and their habitats.',
      color: 'from-ocean-500 to-ocean-600'
    },
    {
      icon: Trophy,
      title: 'Test Your Knowledge',
      description: 'Challenge yourself with interactive quizzes and earn conservation badges.',
      color: 'from-forest-500 to-forest-600'
    },
    {
      icon: ShoppingBag,
      title: 'Support Conservation',
      description: 'Purchase eco-friendly products with proceeds going to wildlife protection.',
      color: 'from-coral-500 to-coral-600'
    }
  ];

  const stats = [
    { number: '1,000+', label: 'Animal Species' },
    { number: '50+', label: 'Conservation Partners' },
    { number: '100K+', label: 'Lives Impacted' },
    { number: '95%', label: 'Funds to Wildlife' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-600 via-ocean-700 to-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Protect Our Planet's
                <span className="block text-forest-300">Precious Wildlife</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-ocean-100">
                Learn about endangered animals, test your knowledge, and support conservation efforts 
                through our engaging platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/animals"
                  className="btn-secondary text-lg px-8 py-3 flex items-center justify-center space-x-2"
                >
                  <span>Explore Animals</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/quiz"
                  className="bg-white text-ocean-700 hover:bg-ocean-50 font-semibold text-lg px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Take Quiz</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-ocean-400 to-forest-500 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Fish className="w-24 h-24 mx-auto mb-4 text-white opacity-80" />
                    <p className="text-xl font-semibold">Interactive Wildlife Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-forest-400 rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-ocean-400 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Ocean's Overlook?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine education, entertainment, and conservation to create a meaningful impact 
              on wildlife protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-50 to-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-ocean-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-forest-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-ocean-100">
              Join thousands of conservationists and wildlife enthusiasts in protecting our planet's 
              most vulnerable species.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-white text-ocean-700 hover:bg-ocean-50 font-semibold text-lg px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Now</span>
              </Link>
              <Link
                to="/quiz"
                className="border-2 border-white text-white hover:bg-white hover:text-ocean-700 font-semibold text-lg px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Trophy className="w-5 h-5" />
                <span>Start Learning</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
