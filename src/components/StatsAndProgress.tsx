"use client";
import { useAppSelector } from "@/Store/Hooks";

export default function StatsAndProgress() {
  const data = useAppSelector((state) => state.It?.sections || []);
  const section = data.find((sec: any) => sec.__component === 'sections.commitment-section');

  const stats = [
    { label: section?.big_number_label || 'Project Complete', value: section?.big_number || '79%' },
    { label: section?.big_number_2_label || 'Happy Clients', value: section?.big_number_2 || '18K' }
  ];

  const badgeText = section?.badge_text || "Our Commitment";
  const heading = section?.heading || "Our commitment is client satisfaction";
  const skills = section?.skills || [
    { label: 'IT Consulting', percentage: '80' },
    { label: 'Cyber Security', percentage: '90' }
  ];
  const checklist = section?.checklist || [];

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
            {badgeText}
          </div>
          <h2 className="text-4xl font-bold text-[#0d1a2b] mb-12 leading-tight">
            {heading}
          </h2>

          {checklist.length > 0 && (
            <ul className="mb-10 space-y-3">
              {checklist.map((item: any) => (
                <li key={item.id} className="flex items-center text-[#0d1a2b] font-medium">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item.text}
                </li>
              ))}
            </ul>
          )}

          <div className="space-y-8">
            {skills.map((skill: any, index: number) => {
              // Alternating colors just like the original design
              const barColor = index % 2 === 0 ? "bg-secondary" : "bg-[#0d1a2b]";
              const borderColor = index % 2 === 0 ? "border-secondary" : "border-[#0d1a2b]";
              return (
                <div key={skill.id || index}>
                  <div className="flex justify-between mb-3">
                    <span className="font-bold text-[#0d1a2b] text-sm">{skill.label}</span>
                    <span className="font-bold text-secondary text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className={barColor + " h-3 rounded-full relative"} style={{ width: `${skill.percentage}%` }}>
                       <div className={"absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 rounded-full transform translate-x-2 " + borderColor}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
