export default function ProjectsShowcase() {
  const projects = [
    { id: '1', title: 'Financial App', category: 'Mobile Dev', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { id: '2', title: 'Data Dashboard', category: 'Web App', imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { id: '3', title: 'VR Experience', category: 'AR/VR', imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800' },
    { id: '4', title: 'E-commerce Platform', category: 'Web Dev', imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-blue-50 text-secondary font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-sm mb-4">
              Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1a2b] leading-tight">
              Have a view of our amazing projects with our clients
            </h2>
          </div>
          
           {/* Navigation Arrows */}
          <div className="flex gap-4 shrink-0 pb-2">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
               </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-all shadow-lg shadow-primary/30">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
            </button>
          </div>
        </div>

        {/* Carousel / Grid */}
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {projects.map((project) => (
            <div key={project.id} className="min-w-[85vw] md:min-w-[450px] shrink-0 snap-start group relative rounded-2xl overflow-hidden h-[500px] cursor-pointer shadow-sm hover:shadow-2xl transition-all">
               <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a2b] via-[#0d1a2b]/40 to-transparent"></div>
               
               <div className="absolute bottom-0 left-0 w-full p-8 flex items-end justify-between transition-transform duration-300">
                 <div>
                   <p className="text-secondary font-bold text-xs tracking-wider uppercase mb-2 bg-white/10 inline-block px-3 py-1 rounded backdrop-blur-sm">
                     {project.category}
                   </p>
                   <h3 className="text-white text-2xl font-bold group-hover:text-secondary transition-colors">
                     {project.title}
                   </h3>
                 </div>
                 
                 <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-primary transition-all border border-white/20 shadow-lg">
                    <svg className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
