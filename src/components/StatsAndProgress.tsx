export default function StatsAndProgress() {
  const stats = [
    { label: 'Project Complete', value: '79%' },
    { label: 'Happy Clients', value: '18K' }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Stats Box */}
        <div className="relative h-[320px] rounded-r-3xl rounded-l-md overflow-hidden shadow-2xl flex flex-col justify-center p-12">
            <div className="absolute inset-0 bg-[#061d4a] z-0">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/40 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 blur-[80px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
            </div>
            
            <div className="relative z-10 text-white space-y-12 pl-4 border-l-4 border-primary">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-6xl font-extrabold mb-1 tracking-tight">{stat.value}</span>
                  <span className="text-gray-300 font-semibold uppercase tracking-wider text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
        </div>

        {/* Right Side: Progress */}
        <div className="lg:pl-8">
          <div className="inline-block bg-blue-50 text-secondary font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-sm mb-4">
            Our Commitment
          </div>
          <h2 className="text-4xl font-bold text-[#0d1a2b] mb-12 leading-tight">
            Our commitment is client satisfaction
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-3">
                <span className="font-bold text-[#0d1a2b] text-sm">IT Consulting</span>
                <span className="font-bold text-secondary text-sm">80%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div className="bg-secondary h-3 rounded-full relative" style={{ width: '80%' }}>
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-secondary rounded-full transform translate-x-2"></div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-3">
                <span className="font-bold text-[#0d1a2b] text-sm">Cyber Security</span>
                <span className="font-bold text-secondary text-sm">90%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div className="bg-[#0d1a2b] h-3 rounded-full relative" style={{ width: '90%' }}>
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0d1a2b] rounded-full transform translate-x-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
