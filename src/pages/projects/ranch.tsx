import React from 'react';
import { Phone, Menu, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

// 1. Import your images here (place the actual files in src/assets/projects/ranch/)
import heroImage from '@/assets/ranch/ranch-hero.avif';
import gallery1 from '@/assets/ranch/ranch-1.avif';
import gallery2 from '@/assets/ranch/ranch-2.avif';
import gallery3 from '@/assets/ranch/ranch-3.avif';
import gallery4 from '@/assets/ranch/ranch-4.avif';
import gallery5 from '@/assets/ranch/ranch-5.avif';
import gallery6 from '@/assets/ranch/ranch-6.avif';
import gallery7 from '@/assets/ranch/ranch-7.avif';
import gallery8 from '@/assets/ranch/ranch-8.avif';
import gallery9 from '@/assets/ranch/ranch-9.avif';
import gallery10 from '@/assets/ranch/ranch-10.avif';
import gallery11 from '@/assets/ranch/ranch-11.avif';
import gallery12 from '@/assets/ranch/ranch-12.avif';
import gallery13 from '@/assets/ranch/ranch-m-1.avif';
import gallery14 from '@/assets/ranch/ranch-m-2.avif';
import gallery15 from '@/assets/ranch/ranch-m-3.avif';
import gallery16 from '@/assets/ranch/ranch-m-4.avif';
import gallery17 from '@/assets/ranch/ranch-m-5.avif';
import gallery18 from '@/assets/ranch/ranch-m-6.avif';
import gallery19 from '@/assets/ranch/ranch-m-7.avif';
import gallery20 from '@/assets/ranch/ranch-m-8.avif';


// 2. Top row (3 large images) and bottom row (5 smaller images)
const topGallery = [gallery1, gallery2, gallery3, gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,gallery11,gallery12];
const bottomGallery = [gallery13, gallery14, gallery15, gallery16,gallery17,gallery18,gallery19,gallery20];

// Reusable image carousel used for both the "After" and "Before" sections
const GalleryCarousel = ({
  images,
  labelPrefix,
}: {
  images: string[];
  labelPrefix: string;
}) => (
  <Carousel opts={{ align: 'start', loop: false }} className="px-6 mb-12">
    <CarouselContent>
      {images.map((img, i) => (
        <CarouselItem key={i} className="basis-1/2 md:basis-1/4">
          <div className="h-84 bg-stone-200 rounded overflow-hidden">
            <img
              src={img}
              alt={`${labelPrefix} gallery image ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-2" />
    <CarouselNext className="right-2" />
  </Carousel>
);

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
          <p className="text-[#587b37] uppercase tracking-widest text-sm font-semibold mb-4">PORTER RANCH HOME RENOVATION</p>
          <h1 className="text-5xl md:text-6xl mb-6">Crafting a serene and clean home with modern finishes and timeless feel</h1>
          <p className="text-stone-600 leading-relaxed">This complete interior renovation transformed a dated house into a refined suburban home. All walls were refinished to a smooth texture and freshly painted, with new bathrooms and a remodeled kitchen bringing modern comfort and style.</p>
        </div>
        <div className="bg-stone-200 h-96 w-full rounded-lg overflow-hidden shadow-xl">
          <img
            src={heroImage}
            alt="Big Bear ranch remodel hero"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      {/* Project Description */}
      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
        <p className="text-[#587b37] uppercase tracking-widest text-xs mb-6">More on the project</p>
        <p className="text-lg leading-relaxed text-stone-700">
        Working closely with the homeowner, our team reconfigured the layout to include a custom walk-in closet and rebuilt the existing staircase to incorporate a new storage area. The result is a cohesive, elegant space that blends functionality with a clean, contemporary design.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-stone-50">
        <h2 className="text-4xl text-center mb-12">Gallery</h2>

        <h4 className="text-2xl text-center mb-6 text-[#587b37]">After</h4>
        <GalleryCarousel images={topGallery} labelPrefix="ranch remodel after" />

        <h4 className="text-2xl text-center mb-6 text-[#587b37]">Before</h4>
        <GalleryCarousel images={bottomGallery} labelPrefix="ranch remodel before" />
      </section>

    </div>
  );
}