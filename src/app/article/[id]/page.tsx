import React from 'react';
import { Navbar } from "@/components/Navbar";
import { TrustMeter } from "@/components/TrustMeter";
import { Calendar, Share2, Bookmark, Languages, ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ArticleDetail({ params }: { params: { id: string } }) {
  // In a real app, we'd fetch this based on params.id
  const article = {
    id: params.id,
    title: "AI Breakthrough: Researchers Achieve Near-Human Reasoning in Compact Models",
    content: `
      <p class="mb-6">The landscape of artificial intelligence has shifted dramatically today as a collaborative team of researchers announced a fundamental breakthrough in model architecture. For years, the consensus was that high-level reasoning capabilities were an emergent property of massive scale—the "bigger is better" philosophy that drove the development of trillion-parameter models.</p>
      
      <p class="mb-6">However, the new paper, titled "Recursive Logic Pathways for Sub-Billion Parameter Systems," demonstrates that by restructuring how data is processed through recursive attention loops, a model with only 500 million parameters can outperform current industry giants on complex logical benchmarks.</p>
      
      <p class="mb-6">"This isn't just about efficiency," said Dr. Elena Vance, lead researcher. "It's about democratization. If we can put human-level reasoning on a mobile device without an internet connection, the implications for privacy and global access are staggering."</p>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">The Architecture Change</h3>
      <p class="mb-6">Traditional transformers process information in a linear fashion through successive layers. The new "Stav-Recursive" architecture allows the model to identify complex tokens and cycle them through specialized logic gates multiple times before producing a final output. This mimics the human cognitive process of "thinking twice" before speaking.</p>
    `,
    source: "TechDaily",
    author: "Jameson Stark",
    date: "May 17, 2026",
    trustScore: 92,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000"
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Feed
        </Link>
        
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-600 text-white text-xs font-black px-2 py-1 rounded">
              {article.source}
            </span>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <Calendar size={14} />
              {article.date}
            </div>
            <TrustMeter score={article.trustScore} className="ml-auto" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between py-6 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200" />
              <div>
                <p className="text-sm font-bold text-slate-900">{article.author}</p>
                <p className="text-xs text-slate-500">Senior Tech Correspondent</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-slate-50 text-slate-500 transition-all">
                <Share2 size={20} />
              </button>
              <button className="p-2 rounded-full hover:bg-slate-50 text-slate-500 transition-all">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </header>
        
        <figure className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img src={article.imageUrl} alt={article.title} className="w-full h-auto" />
          <figcaption className="p-4 bg-slate-50 text-xs text-slate-500 italic text-center border-b border-slate-100">
            Visualization of neural recursive logic pathways. (Source: TechDaily/Midjourney)
          </figcaption>
        </figure>
        
        <article 
          className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
            <Languages size={20} />
            Translate Article
          </button>
          <button className="flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">
            <MessageSquare size={20} />
            View Discussion (12)
          </button>
        </div>
      </div>
    </div>
  );
}
