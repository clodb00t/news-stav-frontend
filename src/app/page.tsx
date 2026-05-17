import { Navbar } from "@/components/Navbar";
import { ArticleCard, Article } from "@/components/ArticleCard";
import { TrendingUp, Clock } from "lucide-react";

const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "AI Breakthrough: Researchers Achieve Near-Human Reasoning in Compact Models",
    excerpt: "A team of researchers has unveiled a new architecture that allows small language models to perform complex logical tasks previously only possible for massive scale systems...",
    source: "TechDaily",
    date: "2 hours ago",
    trustScore: 92,
  },
  {
    id: "2",
    title: "Global Markets Stabilize as Inflation Fears Subside in Major Economies",
    excerpt: "Financial indicators from the last quarter suggest a cooling trend in global inflation, leading central banks to signal potential interest rate cuts by year-end...",
    source: "Economist Post",
    date: "5 hours ago",
    trustScore: 85,
  },
  {
    id: "3",
    title: "Breakthrough in Fusion Energy: Record Sustained Reaction Reported",
    excerpt: "Scientists at the National Ignition Facility have successfully maintained a fusion reaction for 30 seconds, a massive leap forward in the quest for clean energy...",
    source: "Science Monitor",
    date: "1 day ago",
    trustScore: 78,
  },
  {
    id: "4",
    title: "New Mars Discovery: Liquid Water Evidence Found Beneath Polar Ice Caps",
    excerpt: "Radar data from orbiting satellites has revealed significant evidence of liquid water reservoirs beneath the Martian south pole, changing our understanding of the planet...",
    source: "Space Exploration",
    date: "2 days ago",
    trustScore: 45,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
                <TrendingUp size={14} /> Featured Story
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                The Future of Decentralized News Verification
              </h1>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Experience journalism backed by cryptographic proof and community-driven verification. No bias, just facts.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                Learn More
              </button>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent hidden lg:block" />
          </div>
        </section>

        {/* Feed Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Clock className="text-blue-600" /> Latest Updates
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all">
              Filter
            </button>
            <button className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all">
              Sort
            </button>
          </div>
        </div>

        {/* Grid Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-slate-400 text-sm italic font-mono">
            news.stav.gr - Built for the future of news.
          </span>
        </div>
      </footer>
    </div>
  );
}
