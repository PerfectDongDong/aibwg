
import React from 'react';
import { TrendingUp, Package, Users, Palette, ShieldCheck, Database, Globe, Coins, LineChart } from 'lucide-react';
import { UserRole } from '../types';

interface DashboardProps {
  role: UserRole;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const internalStats = [
    { label: '文化资产洞察数', value: '1,280', icon: Database, color: 'text-blue-400' },
    { label: '学术热度指数', value: '88.5', icon: TrendingUp, color: 'text-amber-400' },
    { label: '转化建议达成', value: '94%', icon: ShieldCheck, color: 'text-emerald-400' },
    { label: '研究关联SKU', value: '3,412', icon: LineChart, color: 'text-purple-400' },
  ];

  const commercialStats = [
    { label: '累计授权产值', value: '￥2.1B', icon: Coins, color: 'text-emerald-400' },
    { label: '活跃合作品牌', value: '86', icon: Users, color: 'text-blue-400' },
    { label: '全球 SKU', value: '4,520', icon: Package, color: 'text-amber-400' },
    { label: '分发覆盖地区', value: '24', icon: Globe, color: 'text-purple-400' },
  ];

  const stats = role === 'INTERNAL' ? internalStats : commercialStats;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          {role === 'INTERNAL' ? '学术与产业决策中心' : '合作伙伴增长看板'}
        </h1>
        <p className="text-stone-400">
          {role === 'INTERNAL' 
            ? '学术市场实时监测显示：唐代几何纹样在年轻群体中的关注度正在显著上升。' 
            : '本季度 IP 授权订单环比增长 12%，东南亚市场表现强劲。'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl border-stone-800/50 hover:border-stone-700 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-stone-900 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">+12.5%</span>
            </div>
            <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
            <div className="text-sm text-stone-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="text-amber-500" size={20} />
            {role === 'INTERNAL' ? '学术成果市场潜力分布' : 'IP 商业化趋势'}
          </h2>
          <div className="aspect-video bg-stone-900/50 rounded-xl border border-stone-800 flex items-center justify-center">
            <div className="text-stone-500 italic text-sm text-center">
              {role === 'INTERNAL' ? '正在分析：1,200+ 篇考古报告与现代消费习惯的关联度...' : '全球销售热力分布加载中...'}
            </div>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6">
            {role === 'INTERNAL' ? '高价值洞察待复核' : '热门 IP 推荐'}
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-stone-900 transition-colors cursor-pointer group border border-transparent hover:border-stone-800">
                <img 
                  src={`https://picsum.photos/seed/insight${i}/200/200`} 
                  className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform" 
                  alt="Art"
                />
                <div className="min-w-0">
                  <div className="font-semibold text-stone-200 truncate">
                    {role === 'INTERNAL' ? `[洞察] 莫高窟第172窟色彩体系` : `敦煌飞天联名丝巾`}
                  </div>
                  <div className="text-xs text-stone-500 mt-1">
                    {role === 'INTERNAL' ? '潜力值: 92/100' : '已有 12 家品牌咨询'}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm text-amber-500 hover:text-amber-400 font-bold border border-amber-900/20 rounded-lg hover:bg-amber-900/10 transition-all">
            {role === 'INTERNAL' ? '进入学术洞察市场' : '查看完整推荐'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
