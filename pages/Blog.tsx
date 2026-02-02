
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataService } from '../services/dataService';
import { Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPosts(dataService.getBlogs());
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-24 md:pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-8">Our Journal</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#3E2723] mb-8 leading-tight">Wisdom & Stillness</h1>
          <p className="text-[#3E2723] font-light max-w-2xl mx-auto text-xl opacity-80">
            Insights into the ancient arts of meditation, sound healing, and mindful living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group block">
              <div className="relative aspect-video overflow-hidden mb-10 shadow-xl border border-[#A05035]/10 transform transition-transform duration-700 group-hover:-translate-y-2">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#A05035] text-[#FDFBF7] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-[10px] font-bold text-[#A05035] uppercase tracking-widest opacity-60">
                  <div className="flex items-center gap-2"><User size={12} /> {post.author}</div>
                  <div className="flex items-center gap-2"><Clock size={12} /> {post.readTime}</div>
                  <div>{post.date}</div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif text-[#3E2723] group-hover:text-[#A05035] transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-[#3E2723] opacity-75 text-lg font-light leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 flex items-center text-[#A05035] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all gap-2">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
