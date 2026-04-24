export default function ServicesCards() {
  const services = [
    { id: '1', title: 'Cloud Solutions', description: 'Our cloud platform helps...', iconType: 'cloud' },
    { id: '2', title: 'Data Analytics', description: 'Leverage powerful analytics...', iconType: 'chart' },
    { id: '3', title: 'Cyber Security', description: 'Advanced threat protection...', iconType: 'shield' }
  ];
  const images = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600'
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-secondary font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-sm mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1a2b] max-w-2xl mx-auto leading-tight">
            Our goal is giving the best our customers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={service.id} className="group cursor-pointer">
              {/* Image Box */}
              <div className="relative rounded-2xl overflow-hidden h-64 mb-6 shadow-md transition-shadow group-hover:shadow-xl">
                 <img src={images[idx % images.length]} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a2b]/95 via-[#0d1a2b]/40 to-transparent"></div>
              </div>
              
              {/* Title Box that overlaps the image */}
              <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] mx-6 -mt-16 relative z-10 p-5 rounded-xl border-b-[3px] border-transparent transition-all group-hover:border-primary flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-secondary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-[#0d1a2b]">{service.title}</h3>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
