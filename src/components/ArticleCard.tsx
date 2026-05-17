import React from 'react';
import Link from 'next/link';
import { TrustMeter } from './TrustMeter';
import { Languages, ArrowRight } from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  date: string;
  trustScore: number;
  imageUrl?: string;
}

export const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-video bg-slate-100 relative overflow-hidden">
        {article.imageUrl ? (
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-50">
            No image
          </div>
        )}
        <div className="absolute top-3 left-3">
          <TrustMeter score={article.trustScore} />
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
            {article.source}
          </span>
          <span className="text-xs text-slate-500">{article.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/article/${article.id}`}>
            {article.title}
          </Link>
        </h3>
        
        <p className="text-slate-600 text-sm line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">
            <Languages size={16} />
            Translate
          </button>
          
          <Link 
            href={`/article/${article.id}`}
            className="flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all"
          >
            Read More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
