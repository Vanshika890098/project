"use client";
import { useAppSelector } from "@/Store/Hooks";

export default function Testimonials() {
  const data = useAppSelector((state) => state.It?.sections || []);
  const section = data.find((sec: any) => sec.__component === 'sections.testimonials-section');
  const baseUrl = "https://slather-student-refresh.ngrok-free.dev";

  const defaultTestimonials = [
    {
      id: '1',
      name: 'Michael Chen',
      role: 'CTO, TechCorp',
      content: 'They delivered exactly what they promised on time. It has transformed the way we handle our deployments and user security.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: '2',
      name: 'Emily Davis',
      role: 'Director, Media Inc',
      content: 'Working with this team was an absolute pleasure. Their attention to detail and technical capabilities are unmatched.',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
    }
  ];

  const testimonials = section?.details?.length > 0 ? section.details : defaultTestimonials;

  const headingText = section?.heading || "Over 500 clients and 5,000+ happy customers this globe";
  const rating = section?.rating || "4.9 / 5.0";

  const bgImageUrl = section?.bg_shape?.url 
    ? (section.bg_shape.url.startsWith('http') ? section.bg_shape.url : `${baseUrl}${section.bg_shape.url}`) 
    : "";

  return (
    <section className="bg-[#0b1426] text-white py-24 relative overflow-hidden">
      {/* Decorative dark waves/blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bgImageUrl ? (
          <img src={bgImageUrl} alt="Background decoration" className="absolute left-10 top-10 opacity-30 w-[413px] h-[413px] object-contain pointer-events-none mix-blend-screen" />
        ) : (
          <>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#13233c] to-transparent opacity-80"></div>
            <div className="absolute -left-[20%] -top-[20%] w-[50%] h-[150%] bg-[#080d19] rounded-full blur-[100px]"></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 relative z-10 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-5 pr-4">
          <div className="mb-8 opacity-30">
            <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-wide whitespace-pre-line">
            {headingText}
          </h2>
          
          <div className="flex items-center gap-4 border-t border-gray-700/50 pt-8 w-max">
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-bold text-gray-300">{rating} Rating</p>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-8">
          {testimonials.map((test: any, index: number) => {
            let imageUrl = test.imageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200";
            if (test.profile?.[0]?.url) {
               imageUrl = test.profile[0].url.startsWith('http') 
                 ? test.profile[0].url 
                 : `${baseUrl}${test.profile[0].url}`;
            }

            return (
              <div key={test.id} className={`bg-white text-[#0d1a2b] rounded-2xl shadow-2xl flex-1 relative flex flex-col justify-between overflow-hidden ${index === 1 ? 'md:translate-y-12' : ''}`}>
                 {/* Testimonial Quote */}
                 <div className="p-10 pt-12 pb-6 flex-grow">
                   <p className="relative z-10 leading-relaxed text-gray-600 font-medium italic">
                     {test.description || `"${test.content}"`}
                   </p>
                 </div>
                 
                 {/* Author block with gradient background strictly aligned */}
                 <div className="w-full bg-gradient-to-r from-primary to-secondary p-6 flex items-center gap-4 border-t-4 border-white">
                   <img src={imageUrl} alt={test.name} className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-lg" />
                   <div>
                     <h4 className="text-white font-bold text-base">{test.name}</h4>
                     <p className="text-blue-100 text-xs font-semibold uppercase tracking-wide mt-1">{test.role}</p>
                   </div>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
