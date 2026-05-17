import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Globe, ShieldCheck } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Globe className="text-white" size={24} />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              STAV<span className="text-blue-600">NEWS</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">World</Link>
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Politics</Link>
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Technology</Link>
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Science</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/admin" 
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-all"
            >
              <LayoutDashboard size={18} />
              <span className="hidden sm:inline">Admin</span>
            </Link>
            
            <button className="bg-slate-900 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-slate-800 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
