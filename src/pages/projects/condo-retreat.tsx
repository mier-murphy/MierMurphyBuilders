import React from 'react';
import { Phone, Menu, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';

// 1. Import your images here (place the actual files in src/assets/projects/condo-retreat/)
import heroImage from '@/assets/condo-retreat/condo-retreat-hero.avif';
import gallery1 from '@/assets/condo-retreat/condo-retreat-1.avif';
import gallery2 from '@/assets/condo-retreat/condo-retreat-2.avif';
import gallery3 from '@/assets/condo-retreat/condo-retreat-3.avif';
import gallery4 from '@/assets/condo-retreat/condo-retreat-4.avif';
import gallery5 from '@/assets/condo-retreat/condo-retreat-5.avif';
import gallery6 from '@/assets/condo-retreat/condo-retreat-6.avif';
import gallery7 from '@/assets/condo-retreat/condo-retreat-7.avif';
import gallery8 from '@/assets/condo-retreat/condo-retreat-8.avif';

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
          <p className="text-[#587b37] uppercase tracking-widest text-sm font-semibold mb-4">URBAN CONDO - Los Angeles, CA</p>
          <h1 className="text-5xl md:text-6xl mb-6">Refreshing a modern condominium with clean lines and color</h1>
          <p className="text-stone-600 leading-relaxed">This urban condo remodel included full renovations of both bathrooms and the installation of new kitchen countertops and backsplash tile. Our team collaborated closely with the homeowner to source materials, refine the design, and bring their vision to life.</p>
        </div>
        <div className="bg-stone-200 h-96 w-full rounded-lg overflow-hidden shadow-xl">
          <img
            src={heroImage}
            alt="Big Bear condo-retreat remodel hero"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      {/* Project Description */}
      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
        <p className="text-[#587b37] uppercase tracking-widest text-xs mb-6">More on the project</p>
        <p className="text-lg leading-relaxed text-stone-700">
        We managed the entire permitting and HOA approval process, coordinated all required inspections, and ensured timely completion of the living space. Additional upgrades included a fresh interior paint throughout and a dedicated electrical circuit installation for a new washer and dryer - delivering a refreshed, functional, and beautifully updated home environment.
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
                alt={`condo-retreat remodel gallery image ${i + 1}`}
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
                alt={`condo-retreat remodel gallery image ${i + 4}`}
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