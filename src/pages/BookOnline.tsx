import React, { useEffect } from 'react';
import { Phone, ShieldCheck, Award, FileText, MapPin, CheckCircle2, HelpCircle, PhoneCall } from 'lucide-react';

export function BookOnlinePage() {
  useEffect(() => {
    // Inject the external form embed script for Advance Edge Booking Widget
    const scriptId = "advance-edge-embed-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://api.advanceedgellc.com/js/form_embed.js";
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-gray-800 font-montserrat min-h-screen">
      
      {/* HERO HEADER */}
      <section className="bg-slate-900 text-white  h-auto pt-44 pb-14 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-b border-slate-800">
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" 
          style={{ backgroundImage: "url('/about-hero-mier-murphy-family.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent z-0" />

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-bold text-[#587b37] tracking-widest uppercase bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block border border-white/10">
            ONLINE SCHEDULING
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Schedule Your <span className="text-[#587b37]">Free Consultation & Estimate</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Pick a time that works best for your schedule. Whether you need a kitchen remodel, bathroom renovation, water damage inspection, or custom stucco work, our family is ready to serve you.
          </p>
        </div>
      </section>

      {/* MAIN BOOKING CONTENT */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CALENDAR EMBED WIDGET */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative p-4 sm:p-6">
            
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#587b37] animate-pulse" />
                <h2 className="font-playfair text-xl font-bold text-gray-900">Select Date & Time</h2>
              </div>
              <span className="text-xs font-medium bg-[#f0f5ec] text-[#587b37] px-3 py-1 rounded-full border border-[#587b37]/20">
                Direct Calendar Sync
              </span>
            </div>

            {/* Calendar Widget iframe */}
            <div className="relative min-h-[700px] w-full rounded-xl overflow-hidden bg-slate-50 border border-gray-100">
              <iframe 
                src="https://api.advanceedgellc.com/widget/booking/qgG7I3LpN0BAEiqiJcrD" 
                allow="payment" 
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '750px' }} 
                scrolling="no" 
                id="qgG7I3LpN0BAEiqiJcrD_1787168405343"
                title="Mier & Murphy Builders Booking Calendar"
              />
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#587b37]" />
                <span>Your information is private & strictly confidential.</span>
              </div>
              <span className="font-semibold text-gray-700">No deposit required for initial consultation.</span>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR DETAILS */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Urgent Call Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#587b37]/20 border border-[#587b37]/40 flex items-center justify-center text-[#587b37] shrink-0">
                  <PhoneCall className="w-5 h-5 text-[#587b37]" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-white">Need Urgent Service?</h3>
                  <p className="text-xs text-gray-400">Water Damage or Emergency Mold</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                If you are dealing with active water damage or an urgent restoration issue, don't wait for a scheduled appointment. Call us directly!
              </p>

              <a 
                href="tel:8059989082" 
                className="w-full bg-[#587b37] hover:bg-[#45622b] text-white py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4" />
                Call (805) 998-9082
              </a>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 space-y-5">
              <h3 className="font-playfair text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#587b37]" />
                What Happens Next?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f0f5ec] text-[#587b37] font-bold flex items-center justify-center shrink-0 text-xs border border-[#587b37]/20">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Select Date & Time</h4>
                    <p className="text-gray-600 text-xs mt-0.5">Pick a convenient timeslot in our interactive calendar.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f0f5ec] text-[#587b37] font-bold flex items-center justify-center shrink-0 text-xs border border-[#587b37]/20">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Instant Confirmation</h4>
                    <p className="text-gray-600 text-xs mt-0.5">You will receive an immediate confirmation with all appointment details.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f0f5ec] text-[#587b37] font-bold flex items-center justify-center shrink-0 text-xs border border-[#587b37]/20">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">On-Site Walkthrough</h4>
                    <p className="text-gray-600 text-xs mt-0.5">Frank or our lead estimator will meet you at your property to inspect & discuss your vision.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Highlights */}
            <div className="bg-[#f0f5ec] rounded-2xl p-6 border border-[#587b37]/20 space-y-3 text-xs sm:text-sm text-gray-800">
              <h4 className="font-playfair font-bold text-base text-gray-900">Why Choose Mier & Murphy?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#587b37] shrink-0" />
                  <span>20 Years Family-Owned Building Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#587b37] shrink-0" />
                  <span>IICRC Certified (S500 Water & S520 Mold)</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#587b37] shrink-0" />
                  <span>CA Contractor License #1077044</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#587b37] shrink-0" />
                  <span>Locally Based in Thousand Oaks, CA</span>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 text-xs text-gray-600 space-y-2">
              <span className="font-bold text-gray-900 uppercase tracking-wider block text-[11px]">Primary Service Areas</span>
              <p className="leading-relaxed">
                Thousand Oaks • Westlake Village • Agoura Hills • Newbury Park • Calabasas • Camarillo & surrounding Conejo Valley communities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-3xl font-bold text-gray-900">Booking FAQ</h2>
            <p className="text-sm text-gray-600">Have questions before scheduling? Here are quick answers.</p>
            <div className="w-16 h-1 bg-[#587b37] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="bg-[#f9f9f6] p-6 rounded-xl border border-gray-200 space-y-2">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#587b37]" />
                Is there any charge for an estimate?
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                No, our initial on-site consultation and project estimate are 100% free with no obligation.
              </p>
            </div>

            <div className="bg-[#f9f9f6] p-6 rounded-xl border border-gray-200 space-y-2">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#587b37]" />
                What if I need to reschedule?
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                You will receive a confirmation email with an easy link to reschedule or update your details at any time.
              </p>
            </div>

            <div className="bg-[#f9f9f6] p-6 rounded-xl border border-gray-200 space-y-2">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#587b37]" />
                Who will show up at my property?
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Frank Mier or our dedicated lead team member will meet with you directly to review your property.
              </p>
            </div>

            <div className="bg-[#f9f9f6] p-6 rounded-xl border border-gray-200 space-y-2">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#587b37]" />
                Do you handle insurance claims?
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                Yes! For water damage and mold restoration, we assist directly with insurance documentation and guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default BookOnlinePage;