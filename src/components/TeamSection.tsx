export default function TeamSection() {
  const team = [
    { id: '1', name: 'Sarah Jones', role: 'CEO & Founder', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
    { id: '2', name: 'David Lee', role: 'Lead Developer', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
    { id: '3', name: 'Alisa Smith', role: 'Product Manager', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
    { id: '4', name: 'James Carter', role: 'UI/UX Designer', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="inline-block bg-blue-50 text-secondary font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-sm mb-4">
            Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1a2b] max-w-2xl mx-auto leading-tight">
            Meet the talented team to drive company
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              <div className="bg-[#ecf3fb] rounded-[1.5rem] p-8 pb-10 transition-all duration-300 hover:shadow-2xl hover:bg-white border border-transparent hover:border-gray-100 hover:-translate-y-2">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="absolute bottom-1 right-2 w-10 h-10 bg-primary rounded-full text-white flex items-center justify-center shadow-xl hover:bg-secondary transition-colors cursor-pointer border-[3px] border-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      {/* Social Icon Path (e.g. LinkedIn or generic share) */}
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0d1a2b] mb-1">{member.name}</h3>
                <p className="text-primary font-bold text-sm tracking-wide">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
