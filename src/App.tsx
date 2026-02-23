/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';

const COLLECTIONS = [
  {
    id: 1,
    name: 'Essential Tee',
    price: '$45',
    category: 'Basics'
  },
  {
    id: 2,
    name: 'Wool Overcoat',
    price: '$280',
    category: 'Outerwear'
  },
  {
    id: 3,
    name: 'Silk Slip Dress',
    price: '$120',
    category: 'Evening'
  },
  {
    id: 4,
    name: 'Linen Trousers',
    price: '$95',
    category: 'Basics'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <Menu size={24} />
            </button>
            <a href="#" className="text-2xl font-serif font-bold tracking-tighter">AURA</a>
          </div>
          
          <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-widest">
            <a href="#collections" className="hover:opacity-50 transition-opacity">Collections</a>
            <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
              <ShoppingBag size={24} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-8 text-4xl font-serif italic">
              <a href="#collections" onClick={() => setIsMenuOpen(false)}>Collections</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>Our Story</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
            <div className="flex gap-6 text-sm uppercase tracking-widest font-semibold">
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-100">
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm uppercase tracking-[0.4em] mb-6 font-semibold"
          >
            Spring / Summer 2026
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-7xl md:text-9xl font-serif italic mb-12"
          >
            Quiet Luxury.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a 
              href="#collections" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-sm font-semibold hover:bg-black/80 transition-all group"
            >
              Explore Collection
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-black"></div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-serif mb-4">The Essentials</h2>
            <p className="text-black/60 max-w-md">Timeless pieces designed to last a lifetime. Crafted from the finest sustainable materials.</p>
          </div>
          <div className="flex gap-4 text-sm font-semibold uppercase tracking-widest">
            <button className="border-b-2 border-black pb-1">All</button>
            <button className="text-black/40 hover:text-black transition-colors pb-1">New Arrivals</button>
            <button className="text-black/40 hover:text-black transition-colors pb-1">Limited</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLLECTIONS.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200 mb-4 rounded-2xl flex items-center justify-center">
                <span className="text-zinc-400 font-serif italic">Product Image</span>
                <button className="absolute bottom-4 left-4 right-4 bg-white py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm font-bold shadow-xl">
                  Quick Add
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-black/40 uppercase tracking-widest mb-1">{item.category}</p>
                  <h3 className="font-medium">{item.name}</h3>
                </div>
                <p className="font-serif italic">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#1a1a1a] text-white py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-800 flex items-center justify-center">
            <span className="text-zinc-600 font-serif italic text-2xl">Brand Story</span>
          </div>
          <div>
            <h2 className="text-5xl font-serif italic mb-8">Crafted with Intention.</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              AURA was founded on the principle that clothing should be an extension of one's self—minimal, functional, and enduring.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Every stitch is considered. Every silhouette is refined. We don't follow trends; we create the foundations of a modern wardrobe.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-serif mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Organic Cotton</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-2">Zero</p>
                <p className="text-xs uppercase tracking-widest text-white/40">Waste Production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">Join the Circle</h2>
          <p className="text-black/60 mb-10">Receive early access to new collections and exclusive editorial content.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-black/5 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-black/10 outline-none"
            />
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/80 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-black/5 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-3xl font-serif font-bold tracking-tighter mb-6 block">AURA</a>
            <p className="text-black/40 text-sm">Minimalist foundations for the modern individual.</p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-black/60">
              <li><a href="#" className="hover:text-black transition-colors">All Collections</a></li>
              <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-black/60">
              <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-black/30">
          <p>© 2026 AURA Minimalist Clothing. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
