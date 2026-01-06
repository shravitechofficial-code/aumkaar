
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <div className="text-center px-10">
          <h2 className="text-3xl font-serif text-[#A05035]">Article not found</h2>
          <button onClick={() => navigate('/blog')} className="mt-8 text-[#3E2723] underline font-bold tracking-widest uppercase text-xs">Back to Journal</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-3 text-[#A05035] font-bold text-[10px] uppercase tracking-[0.3em] mb-12 hover:gap-5 transition-all">
          <ArrowLeft size={16} /> Back to Journal
        </Link>

        {/* Hero Info */}
        <header className="mb-16">
          <div className="flex items-center gap-6 text-[11px] font-bold text-[#A05035] uppercase tracking-widest mb-6">
            <span>{post.category}</span>
            <span className="opacity-30">•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#3E2723] mb-10 leading-[1.1]">
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-8 border-y border-[#A05035]/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#A05035] flex items-center justify-center text-[#FDFBF7] font-serif text-xl">
                {post.author[0]}
              </div>
              <div>
                <span className="block text-[10px] font-bold text-[#A05035] uppercase tracking-widest mb-0.5">Written By</span>
                <span className="text-[#3E2723] font-medium">{post.author}</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[#3E2723]/40">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                <Clock size={16} /> {post.readTime}
              </div>
              <button className="hover:text-[#A05035] transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-video w-full overflow-hidden mb-16 shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <article className="prose prose-stone max-w-none prose-p:text-xl prose-p:font-light prose-p:leading-loose prose-p:text-[#3E2723]/90 prose-headings:font-serif prose-headings:text-[#3E2723]">
          {post.content}
        </article>

        {/* Footer CTA */}
        <footer className="mt-24 pt-24 border-t border-[#A05035]/10 text-center">
          <h4 className="text-3xl font-serif text-[#3E2723] mb-8">Ready to experience these benefits firsthand?</h4>
          <Link to="/contact" className="inline-block px-14 py-6 bg-[#A05035] text-[#FDFBF7] font-bold tracking-[0.4em] text-[11px] hover:bg-[#3E2723] transition-all shadow-xl uppercase">
            Book a Sanctuary Session
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default BlogPostDetail;
