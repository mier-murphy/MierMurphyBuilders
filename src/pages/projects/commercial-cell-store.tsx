import React from 'react';
import { Phone, Menu, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';

// 1. Import your images here (place the actual files in src/assets/projects/commercial-cell-store/)
import heroImage from '@/assets/commercial-cell-store/commercial-cell-store-hero.avif';
import gallery1 from '@/assets/commercial-cell-store/commercial-cell-store-1.avif';
import gallery2 from '@/assets/commercial-cell-store/commercial-cell-store-2.avif';
import gallery3 from '@/assets/commercial-cell-store/commercial-cell-store-3.avif';
import gallery4 from '@/assets/commercial-cell-store/commercial-cell-store-4.avif';
import gallery5 from '@/assets/commercial-cell-store/commercial-cell-store-5.avif';
import gallery6 from '@/assets/commercial-cell-store/commercial-cell-store-6.avif';
import gallery7 from '@/assets/commercial-cell-store/commercial-cell-store-7.avif';
import gallery8 from '@/assets/commercial-cell-store/commercial-cell-store-8.avif';

// 2. Top row (3 large images) and bottom row (5 smaller images)
const topGallery = [gallery1, gallery2, gallery3, gallery4];
const bottomGallery = [ gallery5, gallery6, gallery7, gallery8];

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        
        body { font-family: 'Montserrat', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto pt-40 pb-16 px-6">
        <div>
          <p className="text-[#587b37] uppercase tracking-widest text-sm font-semibold mb-4">BUSINESS BOOST</p>
          <h1 className="text-5xl md:text-6xl mb-6">Cellphone & Electronics Repair Store – Commercial Build-Out</h1>
          <p className="text-stone-600 leading-relaxed">Our team provided full support throughout this commercial tenant improvement project—from architectural planning and city submittals to construction and final finishes.</p>
        </div>
        <div className="bg-stone-200 h-96 w-full rounded-lg overflow-hidden shadow-xl">
          <img
            src={heroImage}
            alt="Big Bear commercial-cell-store remodel hero"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      {/* Project Description */}
      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
        <p className="text-[#587b37] uppercase tracking-widest text-xs mb-6">More on the project</p>
        <p className="text-lg leading-relaxed text-stone-700">
        The scope included new framing and electrical work, installation of a suspended acoustic ceiling system with integrated lighting, and upgraded power distribution to meet commercial equipment needs. We also installed new interior privacy glazing, a modern storefront system, and custom display cabinets to enhance both functionality and presentation. The result is a clean, efficient retail space designed for high-traffic use and long-term durability.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-stone-50">
        <h2 className="text-4xl text-center mb-12">Gallery</h2>
        <h4 className="text-2xl text-center mb-12 text-[#2afa3b]">After</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 mb-12">
          {topGallery.map((img, i) => (
            <div key={i} className="h-84 bg-stone-200 rounded overflow-hidden">
              <img
                src={img}
                alt={`commercial-cell-store remodel gallery image ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <h4 className="text-2xl text-center mb-12 text-[#2afa3b]">Before</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          {bottomGallery.map((img, i) => (
            <div key={i} className="h-60 bg-stone-200 rounded overflow-hidden">
              <img
                src={img}
                alt={`commercial-cell-store remodel gallery image ${i + 4}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}