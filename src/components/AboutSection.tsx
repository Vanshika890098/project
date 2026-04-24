export default function AboutSection() {
  return (
    <section className="py-24 bg-white text-gray-900 border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="pr-0 md:pr-10">
          <div className="inline-block bg-blue-50 text-secondary font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-sm mb-4">
            About Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#0d1a2b]">
            Providing technology for smart IT solutions
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            {/* Experience Card */}
            <div className="bg-[#f0f4ff] px-8 py-6 rounded-xl flex-shrink-0 flex flex-col items-center justify-center border-b-4 border-primary shadow-sm h-32">
              <span className="text-4xl font-extrabold text-primary mb-1">16+</span>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Years Experience</span>
            </div>

            {/* List */}
            <ul className="space-y-4 flex-grow flex flex-col justify-center">
              {[
                'IT Consulting',
                'Cyber Security',
                'Cloud Computing',
                'Analytic Solutions',
                'Custom Development'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0d1a2b] font-semibold text-sm">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-secondary flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="relative">
          {/* Main Back Image/Overlay logic from design */}
          <div className="absolute top-10 -right-8 w-full h-[400px] bg-gradient-to-br from-primary via-[#4128ab] to-[#291778] rounded-tl-3xl rounded-br-3xl -z-10 shadow-xl opacity-90 overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </div>
          
          <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl relative z-10 w-11/12 h-[500px] border-8 border-white ml-auto">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
              alt="IT Professionals" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
