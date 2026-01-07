
import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  GitBranch, 
  BarChart3, 
  History, 
  Cpu, 
  Palette, 
  Layers, 
  Sparkles,
  Quote,
  TrendingUp,
  Target
} from 'lucide-react';

interface CreationPathStep {
  label: string;
  icon: any;
  desc: string;
}

interface CreativeWork {
  id: string;
  title: string;
  imageUrl: string;
  creator: string;
  prompt: string;
  analysis: {
    aesthetic: number;
    market: number;
    originality: number;
    commercial: string;
  };
  path: CreationPathStep[];
}

const ThemeRecommendation: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<'DUNHUANG' | 'SANXINGDUI'>('DUNHUANG');

  const dunhuangWorks: CreativeWork[] = [
    {
      id: 'DH-01',
      title: '飞天·极光智能腕表',
      creator: 'DigitalArtifact_Dev',
      imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop',
      prompt: '敦煌莫高窟112窟“反弹琵琶”飞天飘带线条，流体金属材质，融合赛博朋克霓虹光影，高端腕表表盘设计。',
      analysis: {
        aesthetic: 98,
        market: 94,
        originality: 96,
        commercial: '高端可穿戴设备、奢侈品跨界联名'
      },
      path: [
        { label: '学术灵感', icon: History, desc: '提取112窟壁画的S型飘带律动感' },
        { label: 'AI 演化', icon: Cpu, desc: '通过Gemini生成流体金属物理参数' },
        { label: '现代重构', icon: Palette, desc: '将矿物颜料与极光色彩体系融合' },
        { label: '产业对齐', icon: Layers, desc: '适配3D精密铣削工艺路径' }
      ]
    }
  ];

  const sanxingduiWorks: CreativeWork[] = [
    {
      id: 'SX-01',
      title: '纵目·未来主义香氛',
      creator: 'AncientSoul_AI',
      imageUrl: 'https://images.unsplash.com/photo-1634913619583-05f31998590c?q=80&w=2070&auto=format&fit=crop',
      prompt: '三星堆纵目面具眼部几何结构，青铜氧化质感与极简磨砂玻璃结合，神秘祭祀气息与高端沙龙香氛围感。',
      analysis: {
        aesthetic: 95,
        market: 91,
        originality: 98,
        commercial: '生活方式消费、高端香化、家居装饰'
      },
      path: [
        { label: '学术灵感', icon: History, desc: '解析祭祀文化中的“视通万里”哲学' },
        { label: 'AI 演化', icon: Cpu, desc: 'Gemini 3-Pro 优化复杂几何建模' },
        { label: '现代重构', icon: Palette, desc: '青铜绿与克莱因蓝的色彩碰撞' },
        { label: '产业对齐', icon: Layers, desc: '极简主义极速成型包装设计' }
      ]
    }
  ];

  const currentWorks = activeTheme === 'DUNHUANG' ? dunhuangWorks : sanxingduiWorks;

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* 顶部主题切换 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">主题推荐与创作深度分析</h1>
          <p className="text-stone-400">基于 AI 洞察学术发现的市场潜力，展示从历史灵感到现代产品的完整演化。</p>
        </div>
        <div className="flex bg-stone-900/80 p-1 rounded-2xl border border-stone-800 backdrop-blur-md">
          <button 
            onClick={() => setActiveTheme('DUNHUANG')}
            className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTheme === 'DUNHUANG' ? 'bg-amber-600 text-white shadow-lg' : 'text-stone-500 hover:text-stone-300'}`}
          >
            敦煌·丝路幻境
          </button>
          <button 
            onClick={() => setActiveTheme('SANXINGDUI')}
            className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTheme === 'SANXINGDUI' ? 'bg-teal-700 text-white shadow-lg' : 'text-stone-500 hover:text-stone-300'}`}
          >
            三星堆·古蜀文明
          </button>
        </div>
      </div>

      {/* 核心看板 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 左侧：主题大视觉 */}
        <div className="lg:col-span-5 space-y-6">
          <div className={`relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group border-2 ${activeTheme === 'DUNHUANG' ? 'border-amber-500/30' : 'border-teal-500/30'}`}>
            <img 
              src={activeTheme === 'DUNHUANG' 
                ? "https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070" 
                : "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2066"} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Theme Focus"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${activeTheme === 'DUNHUANG' ? 'bg-amber-500 text-white' : 'bg-teal-600 text-white'}`}>
                  HOT 趋势预测
                </span>
                <span className="text-white/60 text-xs font-medium">潜力指数: 9.8/10</span>
              </div>
              <h2 className="text-5xl font-black text-white mb-4 leading-tight">
                {activeTheme === 'DUNHUANG' ? '大漠星河：\n色彩体系重塑' : '纵目古蜀：\n几何主义觉醒'}
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed max-w-sm mb-8">
                {activeTheme === 'DUNHUANG' 
                  ? '将莫高窟珍稀矿物色彩与深空美学结合，打造跨越千年的视觉奢华感。' 
                  : '深度解析青铜面具的视觉张力，将其转化为未来主义风格的工业设计语言。'}
              </p>
              <button className={`w-fit px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all ${activeTheme === 'DUNHUANG' ? 'bg-stone-900 border border-amber-900/30 text-amber-500 hover:bg-stone-800' : 'bg-stone-900 border border-teal-900/30 text-teal-500 hover:bg-stone-800'}`}>
                <Target size={20} />
                锁定当前主题趋势
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 右侧：优秀作品展示与路径分析 */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className={activeTheme === 'DUNHUANG' ? 'text-amber-500' : 'text-teal-500'} />
              主题案例解析
            </h3>
            <span className="text-stone-500 text-sm">精选 1,200+ 存档创意案例</span>
          </div>

          <div className="space-y-10">
            {currentWorks.map((work) => (
              <div key={work.id} className="glass-card rounded-[2rem] p-8 border-stone-800/50 hover:border-stone-700 transition-all">
                <div className="flex flex-col xl:flex-row gap-8">
                  {/* 作品主图与创作者 */}
                  <div className="xl:w-2/5">
                    <div className="aspect-square rounded-2xl overflow-hidden mb-4 border border-stone-800">
                      <img src={work.imageUrl} className="w-full h-full object-cover" alt={work.title} />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-[10px] font-bold">DA</div>
                      <div>
                        <div className="text-xs font-bold text-stone-200">{work.creator}</div>
                        <div className="text-[10px] text-stone-500 uppercase">Case Study</div>
                      </div>
                    </div>
                  </div>

                  {/* 创作路径与分析 */}
                  <div className="flex-1 space-y-6">
                    <div className="flex justify-between items-start">
                      <h4 className="text-2xl font-bold">{work.title}</h4>
                      <div className={`p-2 rounded-xl bg-stone-900 border ${activeTheme === 'DUNHUANG' ? 'border-amber-900/30' : 'border-teal-900/30'}`}>
                        <BarChart3 className={activeTheme === 'DUNHUANG' ? 'text-amber-500' : 'text-teal-500'} size={20} />
                      </div>
                    </div>

                    {/* AI 分析雷达 */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-stone-900/50 p-3 rounded-xl text-center">
                        <div className="text-[10px] text-stone-500 uppercase font-bold mb-1">审美价值</div>
                        <div className="text-lg font-bold text-amber-500">{work.analysis.aesthetic}%</div>
                      </div>
                      <div className="bg-stone-900/50 p-3 rounded-xl text-center">
                        <div className="text-[10px] text-stone-500 uppercase font-bold mb-1">市场潜力</div>
                        <div className="text-lg font-bold text-emerald-500">{work.analysis.market}%</div>
                      </div>
                      <div className="bg-stone-900/50 p-3 rounded-xl text-center">
                        <div className="text-[10px] text-stone-500 uppercase font-bold mb-1">文化原创</div>
                        <div className="text-lg font-bold text-blue-500">{work.analysis.originality}%</div>
                      </div>
                    </div>

                    <div className="bg-amber-900/10 border border-amber-900/20 p-4 rounded-xl">
                      <div className="flex gap-2 items-start text-stone-300 text-xs italic leading-relaxed">
                        <Quote size={14} className="text-amber-500 flex-shrink-0" />
                        <div>
                          <strong>AI 洞察：</strong> 该作品在保持学术还原度的同时，通过“{work.analysis.commercial}”等场景化对齐，极大地降低了文化消费门槛。
                        </div>
                      </div>
                    </div>

                    {/* 创作路径可视化 */}
                    <div className="space-y-4">
                      <div className="text-xs font-bold uppercase tracking-widest text-stone-500 flex items-center gap-2">
                        <GitBranch size={14} /> 演化逻辑溯源
                      </div>
                      <div className="flex justify-between items-start relative px-2">
                        <div className="absolute top-4 left-0 right-0 h-0.5 border-t border-dashed border-stone-800 -z-10"></div>
                        {work.path.map((step, idx) => (
                          <div key={idx} className="flex flex-col items-center text-center max-w-[80px]">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 z-10 ${idx === 0 ? 'bg-amber-600' : 'bg-stone-800'} border border-stone-700`}>
                              <step.icon size={14} className="text-white" />
                            </div>
                            <span className="text-[10px] font-bold text-stone-200 mb-1">{step.label}</span>
                            <span className="text-[8px] text-stone-500 leading-tight scale-90">{step.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 rounded-3xl border-dashed border-stone-800 flex items-center justify-between group cursor-pointer hover:border-amber-500/50 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-900 rounded-2xl group-hover:scale-110 transition-transform">
                <Sparkles className="text-amber-500" />
              </div>
              <div>
                <div className="font-bold text-stone-200">进入主题深度资产库</div>
                <div className="text-xs text-stone-500">已收录 56,000+ 可商用文化设计元素</div>
              </div>
            </div>
            <ArrowRight className="text-stone-500 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeRecommendation;
