export default function TrustedBrands() {
  return (
    <section className="bg-[#152336] pt-16 pb-8 border-b border-gray-800 relative z-20">
      {/* Decorative blue blob on left */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-secondary rounded-br-full opacity-90"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <h3 className="text-white font-bold text-xl md:text-2xl md:w-1/4 leading-snug">
          Trusted brands<br/> work with us
        </h3>
        <div className="flex-1 flex flex-wrap justify-between items-center opacity-60 hover:opacity-100 transition-opacity gap-8">
           <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Yahoo_logo.svg" alt="Yahoo" className="h-6 filter brightness-0 invert" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg" alt="FedEx" className="h-6 filter brightness-0 invert" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Alibaba_Group_logo.svg" alt="Alibaba" className="h-6 filter brightness-0 invert" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 filter brightness-0 invert" />
        </div>
      </div>
    </section>
  );
}
