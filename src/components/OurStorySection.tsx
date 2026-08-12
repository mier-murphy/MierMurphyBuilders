import React from 'react';

export function OurStorySection() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-[#f9f9f6] text-gray-800 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#587b37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#587b37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-montserrat font-bold text-[#587b37] uppercase tracking-widest block mb-3">
            Our Story
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Family Owned. 20 Years of Building Experience.
          </h2>
          <div className="w-16 h-1 bg-[#587b37] mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80" 
                alt="Mier & Murphy Builders Quality Craftsmanship" 
                className="w-full h-80 sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white font-playfair font-bold text-xl">
                Mier & Murphy Builders
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#587b37]/10 rounded-2xl -z-0 hidden sm:block" />
          </div>

          {/* Right Column: Exact Body Copy */}
          <div className="lg:col-span-7 space-y-6 font-montserrat text-base sm:text-lg leading-relaxed text-gray-600">
            
            <p>
              Mier & Murphy Builders is a family-owned and family-operated construction company based in Thousand Oaks. We bring 20 years of building experience to every bathroom remodel, kitchen renovation, water damage repair, and stucco job we take on.
            </p>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#587b37]/10 border-l-4 border-[#587b37] shadow-sm">
              <p className="italic text-gray-800">
                Restoration is personal for us. After our own family dealt with mold in our home, we learned firsthand what water damage does to a house, and to the people living in it. That is why we became IICRC certified, and why we treat every job like our own family will be breathing the air.
              </p>
            </div>

            <p>
              We are licensed and IICRC certified under S500 (water damage) and S520 (mold remediation) standards.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default OurStorySection;