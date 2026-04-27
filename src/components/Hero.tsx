"use client";
import { useAppSelector, useAppDispatch } from "@/Store/Hooks";
import { fetchItPage } from "@/Store/ITslice";
import { useEffect } from "react";

export default function Hero() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchItPage());
  }, [dispatch]);

  const data = useAppSelector((state) => state.It?.sections || []);
  const section = data.find((sec: any) => sec.__component === 'hero.hero-section');

  console.log("Redux Data:", data);
  console.log("Found Hero Section:", section);

  const baseUrl = "https://slather-student-refresh.ngrok-free.dev";
  const bgImage = `${baseUrl}${section?.hero_image?.url}`
  const badgeText = section?.badge_text || "IT Solutions";
  const description = section?.description || "Financial Analysis\nDeveloping Meeting";
  const buttonText = section?.secondary_button?.label || "Learn More";

  return (
    <section className="relative w-full h-[600px] lg:h-[750px] flex items-center overflow-hidden">
      {/* Background Cover */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url("${bgImage}")` }}
      ></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1522]/95 via-[#1a2333]/80 to-transparent z-0"></div>
      
      {/* Abstract Shape Left */}
      <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-br from-primary/90 to-secondary/90 rounded-br-[250px] opacity-80 z-0 transform -translate-x-12"></div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 md:px-12 pt-24">
        <div className="max-w-xl text-white">
          <p className="text-blue-300 font-bold tracking-wider uppercase mb-5 text-sm flex items-center gap-3">
            <span className="w-10 h-0.5 bg-blue-300"></span> {badgeText}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8" style={{ whiteSpace: 'pre-line' }}>
            {description}
          </h1>
          <button className="bg-white text-primary hover:bg-gray-100 transition-all font-bold tracking-wide rounded-full px-8 py-3.5 mt-2">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
