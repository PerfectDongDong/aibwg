
import React from 'react';
import { CheckCircle2, Circle, Clock, ChevronRight, BookOpen, Lightbulb, Sparkles, ClipboardCheck, Briefcase, Coins } from 'lucide-react';
import { INDUSTRY_STAGES } from '../constants';

const IndustrialHub: React.FC = () => {
  const getIcon = (iconName: string, size: number) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen size={size} />;
      case 'Lightbulb': return <Lightbulb size={size} />;
      case 'Sparkles': return <Sparkles size={size} />;
      case 'ClipboardCheck': return <ClipboardCheck size={size} />;
      case 'Briefcase': return <Briefcase size={size} />;
      case 'Coins': return <Coins size={size} />;
      default: return <Clock size={size} />;
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">产业链全链路监控</h1>
          <p className="text-stone-400 mt-2">正在追踪：<span className="text-amber-500 font-medium tracking-wide underline underline-offset-4 decoration-amber-500/30">敦煌飞天系列·高端文创 SKU-0921</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRY_STAGES.map((node, index) => (
          <div key={node.id} className={`relative glass-card p-6 rounded-2xl flex flex-col border-stone-800 group hover:border-amber-500/30 transition-all ${node.status === 'completed' ? 'bg-amber-900/5' : ''}`}>
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-xl ${node.status === 'completed' ? 'bg-amber-500/10 text-amber-500' : node.status === 'processing' ? 'bg-blue-500/10 text-blue-500' : 'bg-stone-900 text-stone-500'}`}>
                {getIcon(node.icon, 24)}
              </div>
              {node.status === 'completed' ? (
                <CheckCircle2 className="text-amber-500" size={20} />
              ) : node.status === 'processing' ? (
                <div className="w-5 h-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
              ) : (
                <Circle className="text-stone-700" size={20} />
              )}
            </div>
            <div className="text-xs text-stone-500 font-bold mb-1 uppercase tracking-tighter">Stage 0{index + 1}</div>
            <h3 className="font-bold text-lg mb-2">{node.title}</h3>
            <p className="text-sm text-stone-400 flex-1 leading-relaxed">{node.description}</p>
            <div className="mt-4 pt-4 border-t border-stone-800 flex justify-between items-center">
              <span className={`text-[10px] font-bold uppercase tracking-widest ${node.status === 'completed' ? 'text-amber-500' : node.status === 'processing' ? 'text-blue-500' : 'text-stone-600'}`}>
                {node.status === 'completed' ? '已达成' : node.status === 'processing' ? '推进中' : '待处理'}
              </span>
              <button className="text-[10px] text-stone-500 hover:text-stone-200">查看详情</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrialHub;
