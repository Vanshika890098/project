export default function WhyChooseUs() {
  return (
    <section className="bg-[#152336] text-white py-24 pb-32">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Hexagon Image */}
        <div className="relative flex justify-center lg:justify-start">
           <div className="relative z-10">
             {/* The person image masked implicitly or naturally suited. We'll use a standard rounded technique with overlay since complex SVG masks can be tricky without an asset */}
             <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
              alt="Professional Woman" 
              className="w-[450px] h-[550px] object-cover rounded-3xl"
             />
             {/* Floating blue hexagon or abstract shape */}
             <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-32 h-32 bg-secondary rounded-2xl rotate-45 flex items-center justify-center opacity-90 shadow-[0_0_40px_rgba(15,76,255,0.4)]">
                 <div className="w-16 h-16 border-2 border-white/50 rounded-lg -rotate-45"></div>
             </div>
           </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:pl-10">
          <div className="inline-block bg-white/10 text-white font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-sm mb-4">
            Our Company
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Empowering success in technology since 1980
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/10 rounded-full text-secondary">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                   </svg>
                </div>
                <h4 className="font-bold text-lg">Our Vision</h4>
              </div>
              <p className="text-gray-400 text-sm">To be the most trusted technology partner in the industry across the globe.</p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/10 rounded-full text-secondary">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                   </svg>
                </div>
                <h4 className="font-bold text-lg">Our Mission</h4>
              </div>
              <p className="text-gray-400 text-sm">To provide innovative IT solutions that empower businesses to achieve growth.</p>
            </div>
          </div>

          <button className="bg-primary hover:bg-secondary transition-all text-white px-8 py-3 rounded-full font-bold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
