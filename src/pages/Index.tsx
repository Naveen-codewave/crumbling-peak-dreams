
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MountainLandscape from '../components/MountainLandscape';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <section id="home" className="relative">
          <MountainLandscape />
        </section>
        
        <section id="about" className="py-20 px-6 bg-slate-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8 text-slate-800">About Our 3D Experience</h2>
            <p className="text-lg text-slate-600 mb-8">
              Immerse yourself in a stunning 3D mountain landscape powered by Three.js and WebGL. 
              Our interactive environment showcases the beauty of procedural generation and real-time 3D graphics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🏔️</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">Realistic Mountains</h3>
                <p className="text-slate-600">Procedurally generated mountain ranges with natural variations and lighting.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">Interactive Controls</h3>
                <p className="text-slate-600">Drag to rotate, scroll to zoom, and explore the landscape from every angle.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">Starry Sky</h3>
                <p className="text-slate-600">Beautiful starfield background that adds depth and atmosphere to the scene.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="gallery" className="py-20 px-6 bg-slate-800 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8">Technology Showcase</h2>
            <p className="text-lg text-slate-300 mb-12">
              Built with cutting-edge web technologies for maximum performance and visual impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-slate-700 rounded-lg">
                <h4 className="font-semibold text-blue-400">Three.js</h4>
                <p className="text-sm text-slate-300">3D Graphics</p>
              </div>
              <div className="p-4 bg-slate-700 rounded-lg">
                <h4 className="font-semibold text-blue-400">React</h4>
                <p className="text-sm text-slate-300">UI Framework</p>
              </div>
              <div className="p-4 bg-slate-700 rounded-lg">
                <h4 className="font-semibold text-blue-400">WebGL</h4>
                <p className="text-sm text-slate-300">Hardware Acceleration</p>
              </div>
              <div className="p-4 bg-slate-700 rounded-lg">
                <h4 className="font-semibold text-blue-400">TypeScript</h4>
                <p className="text-sm text-slate-300">Type Safety</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-20 px-6 bg-slate-50">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold mb-8 text-slate-800">Get In Touch</h2>
            <p className="text-lg text-slate-600 mb-8">
              Interested in creating your own 3D experiences? Let's collaborate!
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
