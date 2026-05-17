import React from 'react';
import { Navbar } from "@/components/Navbar";
import { LayoutDashboard, FileText, Settings, Users, Plus, ExternalLink } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500">Manage your news feed and system configuration.</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
            <Plus size={20} /> New Article
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Nav */}
          <div className="md:col-span-1 space-y-1">
            <AdminNavLink icon={<LayoutDashboard size={20} />} label="Overview" active />
            <AdminNavLink icon={<FileText size={20} />} label="Articles" />
            <AdminNavLink icon={<Users size={20} />} label="Authors" />
            <AdminNavLink icon={<Settings size={20} />} label="Settings" />
          </div>

          {/* Main Admin Content */}
          <div className="md:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard label="Total Views" value="1.2M" change="+12.5%" />
              <StatCard label="Active Articles" value="842" change="+3%" />
              <StatCard label="Avg. Trust Score" value="84%" change="-0.5%" />
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">Recent Content Activity</h3>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</button>
              </div>
              <div className="divide-y divide-slate-50">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                        <FileText size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">System generated report #{1024 + i}</p>
                        <p className="text-xs text-slate-500">Last edited 2h ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Published</span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminNavLink({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
      active ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-600 hover:bg-white hover:shadow-sm'
    }`}>
      {icon}
      {label}
    </button>
  );
}

function StatCard({ label, value, change }: { label: string, value: string, change: string }) {
  const isPositive = change.startsWith('+');
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200">
      <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <h4 className="text-2xl font-black text-slate-900">{value}</h4>
        <span className={`text-xs font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}
