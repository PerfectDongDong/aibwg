
import React from 'react';
import { Search, BarChart3, PieChart, Zap, TrendingUp, Users, Target, ArrowUpRight } from 'lucide-react';

const AcademicMarket: React.FC = () => {
  const insights = [
    { 
      title: '唐代丝绸之路矿物颜料与现代美妆匹配度分析', 
      tag: '色彩考古', 
      potential: '96', 
      growth: '+14%',
      audience: 'Z世代 (18-25岁)',
      summary: '研究显示，青金石色与朱砂色在现代高端彩妆市场具有极高溢价能力，建议开发“盛唐复刻”眼影系列。'
    },
    { 
      title: '三星堆青铜器线条在电子产品外观设计的应用潜力', 
      tag: '器型研究', 
      potential: '89', 
      growth: '+8%',
      audience: '科技极客/潮流男士',
      summary: '青铜纵目神像的夸张线条高度契合电竞周边、手机背壳等工业设计，具有极强的身份符号辨识度。'
    },
    { 
      title: '北魏壁画中“九色鹿”叙事逻辑在互动数字藏品中的转化', 
      tag: '图像叙事', 
      potential: '92', 
      growth: '+22%',
      audience: '家庭消费/数字收藏者',
      summary: '九色鹿的牺牲与诚信内核在现代绘本与数字游戏中仍具有核心情感价值，适合开发深度叙事类文创。'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">学术市场：文化洞察与价值分析</h1>
          <p className="text-stone-400 mt-2">通过市场化视角重塑学术研究价值，驱动文化发现走向产业前端。</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-stone-900 text-amber-500 border border-amber-900/30 rounded-xl font-bold hover:bg-stone-800 transition-all flex items-center gap-2">
            <BarChart3 size={18} />
            生成洞察报告
          </button>
          <button className="px-5 py-2.5 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-500 transition-all flex items-center gap-2 shadow-lg shadow-amber-900/20">
            <Zap size={18} />
            同步产业看板
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl border-amber-900/20">
          <div className="flex items-center gap-2 text-amber-400 mb-4">
            <TrendingUp size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">全域关注热度</span>
          </div>
          <div className="text-3xl font-bold">87.2 <span className="text-sm text-emerald-500 font-normal">↑ 4.1</span></div>
          <div className="mt-2 text-xs text-stone-500">基于全网文化内容消费行为的综合指数</div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl border-blue-900/20">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Users size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">受众画像重叠度</span>
          </div>
          <div className="text-3xl font-bold">78%</div>
          <div className="mt-2 text-xs text-stone-500">学术发现与现代流行文化的受众重合比例</div>
        </div>

        <div className="glass-card p-6 rounded-2xl border-emerald-900/20">
          <div className="flex items-center gap-2 text-emerald-400 mb-4">
            <Target size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">预期转化ROI</span>
          </div>
          <div className="text-3xl font-bold">3.4x</div>
          <div className="mt-2 text-xs text-stone-500">学术资产投入产出比预测（未来12个月）</div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <PieChart className="text-amber-500" size={20} />
            核心学术洞察与市场关联
          </h2>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input 
              type="text" 
              placeholder="搜索研究领域、特定发现..." 
              className="bg-stone-900 border border-stone-800 rounded-lg py-1.5 pl-10 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500/50 min-w-[240px]" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {insights.map((item, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl hover:border-amber-500/30 transition-all group">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/4">
                  <div className="aspect-video bg-stone-900 rounded-2xl overflow-hidden mb-4 relative">
                    <img src={`https://picsum.photos/seed/market${i}/400/225`} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Analysis thumbnail" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-xs font-bold text-amber-500 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-amber-500/30">市场潜力: {item.potential}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] px-2 py-1 bg-stone-800 text-stone-400 rounded-md border border-stone-700 font-bold tracking-tight">{item.tag}</span>
                    <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 font-bold tracking-tight">{item.growth}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold group-hover:text-amber-500 transition-colors">{item.title}</h3>
                    <button className="p-2 text-stone-500 hover:text-stone-200">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.summary}</p>
                  <div className="pt-4 flex items-center gap-8 border-t border-stone-800/50">
                    <div>
                      <div className="text-[10px] text-stone-500 uppercase font-bold tracking-widest mb-1">建议目标人群</div>
                      <div className="text-xs font-semibold text-stone-200">{item.audience}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-stone-500 uppercase font-bold tracking-widest mb-1">设计应用权重</div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(dot => (
                          <div key={dot} className={`w-2 h-2 rounded-full ${dot <= 4 ? 'bg-amber-500' : 'bg-stone-800'}`}></div>
                        ))}
                      </div>
                    </div>
                    <button className="ml-auto text-xs font-bold text-amber-500 hover:underline">
                      查看完整分析链条 &gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicMarket;
