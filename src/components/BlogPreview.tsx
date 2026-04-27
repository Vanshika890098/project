"use client";
import React from 'react';
import { useAppSelector } from "@/Store/Hooks";

export default function BlogPreview() {
  const data = useAppSelector((state) => state.It?.sections || []);
  const section = data.find((sec: any) => sec.__component === 'sections.blog-section');
  const baseUrl = "https://slather-student-refresh.ngrok-free.dev";

  const defaultBlogs = [
    {
      id: '1',
      title: 'Why cloud architecture is the future of business',
      date: 'Oct 12, 2026',
      category: 'Technology',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: '5 ways to build strong product management ops',
      date: 'Oct 09, 2026',
      category: 'Business',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const blogs = section?.blog_posts?.length > 0 ? section.blog_posts : defaultBlogs;

  const badgeText = section?.badge_text || "Our Blog";
  const heading = section?.heading || "Valuable insights to change your startup idea";
  const description = section?.description || null;

  const formatDate = (dateValue: string) => {
    if (!dateValue) return '';
    try {
      const date = new Date(dateValue);
      return isNaN(date.getTime()) ? dateValue : date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    } catch {
      return dateValue;
    }
  };

  return (
    <section className="py-24 bg-gray-50 text-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="inline-block bg-blue-50 text-secondary font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-sm mb-4">
            {badgeText}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1a2b] max-w-2xl mx-auto leading-tight mb-4">
            {heading}
          </h2>
          {description && (
            <p className="text-gray-500 max-w-xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {blogs.map((blog: any) => {
            let imageUrl = blog.imageUrl || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800";
            if (blog.cover_image?.url) {
               imageUrl = blog.cover_image.url.startsWith('http') 
                 ? blog.cover_image.url 
                 : `${baseUrl}${blog.cover_image.url}`;
            }

            const formattedDate = blog.published_date ? formatDate(blog.published_date) : blog.date;
            
            return (
              <div key={blog.id} className="group cursor-pointer flex flex-col">
                <div className="rounded-2xl overflow-hidden h-[360px] mb-8 shadow-sm group-hover:shadow-xl transition-all">
                  <img src={imageUrl} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-6 text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">
                   <span className="text-primary flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-sm">
                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                     </svg>
                     {blog.category || "Technology"}
                   </span>
                   <span className="flex items-center gap-2">
                     <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                     {formattedDate}
                   </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0d1a2b] mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {blog.title}
                </h3>
                <div className="mt-auto pt-2">
                  <span className="font-bold text-secondary flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer">
                    {blog.excerpt || 'Read More'}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
