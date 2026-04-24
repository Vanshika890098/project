export default function Hero() {
  return (
    <section className="relative w-full h-[600px] lg:h-[750px] flex items-center overflow-hidden">
      {/* Background Cover */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000")' }}
      ></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1522]/95 via-[#1a2333]/80 to-transparent z-0"></div>
      
      {/* Abstract Shape Left */}
      <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-br from-primary/90 to-secondary/90 rounded-br-[250px] opacity-80 z-0 transform -translate-x-12"></div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 md:px-12 pt-24">
        <div className="max-w-xl text-white">
          <p className="text-blue-300 font-bold tracking-wider uppercase mb-5 text-sm flex items-center gap-3">
            <span className="w-10 h-0.5 bg-blue-300"></span> IT Solutions
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Financial Analysis<br />
            Developing Meeting
          </h1>
          <button className="bg-white text-primary hover:bg-gray-100 transition-all font-bold tracking-wide rounded-full px-8 py-3.5 mt-2">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
