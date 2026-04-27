export default function FeaturesGrid() {
  
  const services = [
    { id: '1', title: 'Cloud Solutions', description: 'Our cloud platform helps businesses achieve limitless scalability and secure computing at an affordable rate.', iconType: 'cloud' },
    { id: '2', title: 'Data Analytics', description: 'Leverage powerful analytics to understand your customers and improve your overall business strategy.', iconType: 'chart' },
    { id: '3', title: 'Cyber Security', description: 'Advanced threat protection and active monitoring ensures your data is never compromised.', iconType: 'shield' }
  ];
  
  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Decorative paint splatter or abstract background */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-secondary font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-sm mb-4">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-[#0d1a2b] max-w-2xl mx-auto">
            Empower your business with our services.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d1a2b] mb-4 cursor-pointer hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Admin" className="w-8 h-8 rounded-full border border-gray-200" />
                   <span className="text-xs font-bold text-[#0d1a2b]">Admin</span>
                 </div>
                 <button className="text-secondary font-semibold text-sm hover:text-primary transition-colors flex items-center gap-1 group/btn">
                   Read More
                   <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                   </svg>
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
