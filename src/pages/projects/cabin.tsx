import React from 'react';
import { Phone, Menu, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';

// 1. Import your images here (place the actual files in src/assets/projects/cabin/)
import heroImage from '@/assets/cabin/cabin-hero.avif';
import gallery1 from '@/assets/cabin/cabin-1.avif';
import gallery2 from '@/assets/cabin/cabin-2.avif';
import gallery3 from '@/assets/cabin/cabin-3.avif';
import gallery4 from '@/assets/cabin/cabin-4.avif';
import gallery5 from '@/assets/cabin/cabin-5.avif';
import gallery6 from '@/assets/cabin/cabin-6.avif';
import gallery7 from '@/assets/cabin/cabin-7.avif';
import gallery8 from '@/assets/cabin/cabin-8.avif';

// 2. Top row (3 large images) and bottom row (5 smaller images)
const topGallery = [gallery1, gallery2, gallery3];
const bottomGallery = [gallery4, gallery5, gallery6, gallery7, gallery8];

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
          <p className="text-[#587b37] uppercase tracking-widest text-sm font-semibold mb-4">Big Bear Cabin Remodel</p>
          <h1 className="text-5xl md:text-6xl mb-6">Transforming a historical cabin into a sophisticated living space.</h1>
          <p className="text-stone-600 leading-relaxed">This mountain cabin underwent a full interior transformation. We removed all original builder grade wall panels and finished them with a fine cloud drywall finished to a smooth Level 5 surface, followed by a complete interior repaint.</p>
        </div>
        <div className="bg-stone-200 h-96 w-full rounded-lg overflow-hidden shadow-xl">
          <img
            src={heroImage}
            alt="Big Bear cabin remodel hero"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      {/* Project Description */}
      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
        <p className="text-[#587b37] uppercase tracking-widest text-xs mb-6">More on the project</p>
        <p className="text-lg leading-relaxed text-stone-700">
          The old carpeting was replaced with durable new flooring, and new dual-glazed exterior windows were installed to improve energy efficiency and comfort. Our team also assisted with the installation of prefabricated kitchen cabinets, fully remodeled the bathrooms with new tub and shower systems, and updated cabinetry throughout—bringing a refreshed, modern look to this cozy Big Bear retreat.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-stone-50">
        <h2 className="text-4xl text-center mb-12">Gallery</h2>
        <h4 className="text-2xl text-center mb-12 text-[#2afa3b]">After</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 mb-12">
          {topGallery.map((img, i) => (
            <div key={i} className="h-84 bg-stone-200 rounded overflow-hidden">
              <img
                src={img}
                alt={`Cabin remodel gallery image ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <h4 className="text-2xl text-center mb-12 text-[#2afa3b]">Before</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-6">
          {bottomGallery.map((img, i) => (
            <div key={i} className="h-60 bg-stone-200 rounded overflow-hidden">
              <img
                src={img}
                alt={`Cabin remodel gallery image ${i + 4}`}
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