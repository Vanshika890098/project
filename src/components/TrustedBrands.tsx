"use client";
import { useAppSelector } from "@/Store/Hooks";

export default function TrustedBrands() {
  const data = useAppSelector((state) => state.It?.sections || []);
  const section = data.find((sec: any) => sec.__component === 'sections.trusted-brands-section');

  const baseUrl = "https://slather-student-refresh.ngrok-free.dev";
  const heading = section?.heading || "Trusted brands\nwork with us";
  const brands = section?.BrandItem || [];

  return (
    <section className="bg-[#152336] pt-16 pb-8 border-b border-gray-800 relative z-20">
      {/* Decorative blue blob on left */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-secondary rounded-br-full opacity-90"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <h3 className="text-white font-bold text-xl md:text-2xl md:w-1/4 leading-snug" style={{ whiteSpace: 'pre-line' }}>
          {heading}
        </h3>
        <div className="flex-1 flex flex-wrap justify-between items-center opacity-60 hover:opacity-100 transition-opacity gap-8">
           {brands.map((brand: any) => (
             brand.logo?.[0]?.url ? (
               <img 
                 key={brand.id}
                 src={`${baseUrl}${brand.logo[0].url}`} 
                 alt={brand.name} 
                 className="h-10 filter brightness-0 invert object-contain max-w-[150px]" 
               />
             ) : null
           ))}
        </div>
      </div>
    </section>
  );
}
