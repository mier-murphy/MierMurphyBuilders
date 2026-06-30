import React from 'react';

/**
 * A modern, dark-themed "Coming Soon" page.
 * Updated to use an orange brand color.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans antialiased">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Decorative Element */}
        {}
        <div className="w-16 h-16 bg-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-pulse">
          <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>
        </div>

        {/* Content */}
        {}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
          Something amazing is coming
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto leading-relaxed">
          We are currently working hard on something special. Stay tuned for our official launch.
        </p>
        <div className="luxury-card p-2 md:p-4">
                <iframe
                  src="https://api.advanceedgellc.com/widget/form/2NK7xMC2cHLB4WdlKzyu"
                  style={{ width: "100%", height: "669px", border: "none", borderRadius: "8px" }}
                  id="inline-2NK7xMC2cHLB4WdlKzyu"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="M&M Contact Form"
                  data-height="669"
                  data-layout-iframe-id="inline-2NK7xMC2cHLB4WdlKzyu"
                  data-form-id="2NK7xMC2cHLB4WdlKzyu"
                  title="M&M Contact Form"
                />
              </div>
      </div>
    </div>
  );
}