import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CalendarIcon,
  CameraIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-primary">PupDates</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-secondary hover:text-primary transition-colors">How It Works</a>
              <a href="#testimonials" className="text-secondary hover:text-primary transition-colors">Testimonials</a>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-display font-bold text-secondary mb-6">
                Stay Connected with Your Pet – Anytime, Anywhere!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Keep track of your pet's care and receive real-time updates from your trusted sitters.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2">
                Get Started Now
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/pupdates-public/hero-image.svg"
                alt="Pet owner using PupDates"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-secondary mb-16">
            Everything You Need for Pet Care
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CalendarIcon className="w-8 h-8" />,
                title: "Feeding & Medication Schedules",
                description: "Set up detailed care routines and never miss important medications."
              },
              {
                icon: <CameraIcon className="w-8 h-8" />,
                title: "Live Photo & Video Updates",
                description: "Receive real-time visual updates of your pet's activities and well-being."
              },
              {
                icon: <MapPinIcon className="w-8 h-8" />,
                title: "Real-time Check-ins",
                description: "Track visits and get location-based notifications for peace of mind."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-secondary mb-16">
            How PupDates Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create a Profile",
                description: "Set up your pet's profile with important details and care instructions."
              },
              {
                step: "02",
                title: "Share Pet Details",
                description: "Invite and share access with your trusted pet sitters."
              },
              {
                step: "03",
                title: "Get Live Updates",
                description: "Receive real-time updates and photos during pet sitting sessions."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-secondary mb-16">
            What Pet Parents Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Dog Parent",
                text: "PupDates gives me peace of mind when I'm away. The real-time updates are amazing!"
              },
              {
                name: "Michael R.",
                role: "Cat Parent",
                text: "The medication tracking feature is a game-changer. My cat's care has never been better organized."
              },
              {
                name: "Emily L.",
                role: "Pet Sitter",
                text: "As a pet sitter, PupDates makes it easy to keep owners updated and manage multiple pets."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-bold text-secondary">{testimonial.name}</div>
                <div className="text-sm text-primary">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">
            Ready to Join PupDates?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start managing your pet's care with confidence today.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
            Join PupDates Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PupDates</h3>
              <p className="opacity-75">Connecting pet parents with their furry friends, anywhere, anytime.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-75">
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 opacity-75">
                <li>support@pupdates.com</li>
                <li>1-800-PUPDATES</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="opacity-75 hover:opacity-100">Twitter</a>
                <a href="#" className="opacity-75 hover:opacity-100">Facebook</a>
                <a href="#" className="opacity-75 hover:opacity-100">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center opacity-75">
            <p>&copy; 2024 PupDates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
