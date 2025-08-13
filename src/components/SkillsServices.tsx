"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const SkillsServices = () => {
  const skills: Skill[] = [
    { name: 'React/Next.js', level: 95, icon: '⚛️' },
    { name: 'TypeScript', level: 90, icon: '🔷' },
    { name: 'Node.js', level: 88, icon: '🟢' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'UI/UX Design', level: 80, icon: '🎨' },
    { name: 'Mobile Development', level: 75, icon: '📱' },
    { name: 'Cloud Services', level: 85, icon: '☁️' },
    { name: 'Database Design', level: 82, icon: '🗃️' },
  ];

  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: '🌐',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Modern Frameworks']
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile application development',
      icon: '📱',
      features: ['iOS & Android', 'React Native', 'App Store Optimization', 'Push Notifications']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that convert',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Consulting',
      description: 'Technical consulting and project architecture',
      icon: '💡',
      features: ['Tech Strategy', 'Code Reviews', 'Performance Audits', 'Team Mentoring']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-red-500">Skills</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Over two decades of experience in cutting-edge technologies
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <motion.div
                      className="bg-red-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 mt-2 block">
                    {skill.level}% Proficiency
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-red-500">Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <span className="text-red-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-red-100 mb-8 text-lg">
              Let&apos;s discuss how I can help bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsServices;
