
import React, { useState } from 'react';
import { 
  Key, 
  ShieldCheck, 
  Search, 
  Filter, 
  ExternalLink, 
  Lock, 
  CheckCircle2, 
  Info,
  ShoppingCart,
  Zap,
  Tag,
  GitBranch,
  History,
  Cpu,
  Palette,
  Layers
} from 'lucide-react';
import { UserRole, LicensedWork } from '../types';

interface WorkLicensingProps {
  role: UserRole;
}

const WorkLicensing: React.FC<WorkLicensingProps> = ({ role }) => {
  const [filter, setFilter] = useState('ALL');

  const getIcon = (iconName: string, size: number = 14) => {
    switch (iconName) {
      case 'History': return <History size={size} />;
      case 'Cpu': return <Cpu size={size} />;
      case 'Palette': return <Palette size={size} />;
      case 'Layers': return <Layers size={size} />;
      default: return <Info size={size} />;
    }
  };

  const works: LicensedWork[] = [
    {
      id: 'LW-001',
      title: '飞天·极光智能腕表设计',
      style: '敦煌',
      imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070',
      licenseType: 'Exclusive',
      priceRange: '￥200k - 500k',
      status: 'Available',
      description: '将敦煌莫高窟112窟“反弹琵琶”飘带线条与未来赛博感结合，已通过内部学术与工艺评审。',
      path: [
        { label: '学术灵感', icon: 'History', desc: '112窟飞天飘带律动感' },
        { label: 'AI 演化', icon: 'Cpu', desc: '流体金属物理参数生成' },
        { label: '现代重构', icon: 'Palette', desc: '矿物颜料与极光体系' },
        { label: '产业对齐', icon: 'Layers', desc: '3D精密铣削工艺路径' }
      ]
    },
    {
      id: 'LW-002',
      title: '纵目·未来主义香氛系列',
      style: '三星堆',
      imageUrl: 'https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?q=80&w=2070',
      licenseType: 'Non-Exclusive',
      priceRange: '￥50k - 120k',
      status: 'Available',
      description: '三星堆纵目面具几何特征重构，适用于高端沙龙香化、家居香氛产品线。',
      path: [
        { label: '学术灵感', icon: 'History', desc: '祭祀文化“视通万里”哲学' },
        { label: 'AI 演化', icon: 'Cpu', desc: 'Gemini 3-Pro 复杂建模' },
        { label: '现代重构', icon: 'Palette', desc: '青铜绿与克莱因蓝碰撞' },
        { label: '产业对齐', icon: 'Layers', desc: '极简极速成型包装设计' }
      ]
    },
    {
      id: 'LW-003',
      title: '九色鹿·治愈系灯光系统',
      style: '敦煌',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964',
      licenseType: 'Digital Only',
      priceRange: '￥15k - 30k',
      status: 'Licensed',
      description: '九色鹿温润剪影与极简灯光设计，已有三家家居品牌完成授权合作。',
      path: [
        { label: '学术灵感', icon: 'History', desc: '解析九色鹿情感内核' },
        { label: 'AI 演化', icon: 'Cpu', desc: '北魏动物造型特征提取' },
        { label: '现代重构', icon: 'Palette', desc: '大地色系与青金石点缀' },
        { label: '产业对齐', icon: 'Layers', desc: '一体化注塑工艺适配' }
      ]
    },
    {
      id: 'LW-004',
      title: '神树之影·机械键盘外壳',
      style: '三星堆',
      imageUrl: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2070',
      licenseType: 'Exclusive',
      priceRange: '￥80k - 150k',
      status: 'Available',
      description: '三星堆青铜神树分体式结构，支持CNC全金属精密制造，高辨识度文化符号。',
      path: [
        { label: '学术灵感', icon: 'History', desc: '神树九鸟分布逻辑研究' },
        { label: 'AI 演化', icon: 'Cpu', desc: '人机工学分体结构生成' },
        { label: '现代重构', icon: 'Palette', desc: '三星青铜色域阳极着色' },
        { label: '产业对齐', icon: 'Layers', desc: 'CNC全金属精雕工艺适配' }
      ]
    }
  ];

  const filteredWorks = filter === 'ALL' ? works : works.filter(w => w.style === filter);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-black tracking-tight">作品授权中心</h1>
            <span className="bg-amber-500/10 text-amber-500 text-[10px] font-bold px-2 py-1 rounded border border-amber-500/20 uppercase tracking-widest">
              Verified Assets
            </span>
          </div>
          <p className="text-stone-400">
            {role === 'INTERNAL' 
              ? '管理已入库的合规文化创意资产，监控授权流向与版权存证状态。' 
              : '浏览通过学术评审的顶级创意作品，追踪 AI 演化逻辑，快速申请商业授权。'}
          </p>
        </div>
        
        <div className="flex bg-stone-900/80 p-1 rounded-2xl border border-stone-800 backdrop-blur-md">
          <button onClick={() => setFilter('ALL')} className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${filter === 'ALL' ? 'bg-amber-600 text-white' : 'text-stone-500 hover:text-stone-300'}`}>全选</button>
          <button onClick={() => setFilter('敦煌')} className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${filter === '敦煌' ? 'bg-amber-900/50 text-amber-500' : 'text-stone-500 hover:text-stone-300'}`}>敦煌系列</button>
          <button onClick={() => setFilter('三星堆')} className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${filter === '三星堆' ? 'bg-teal-900/50 text-teal-500' : 'text-stone-500 hover:text-stone-300'}`}>三星堆系列</button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {filteredWorks.map((work) => (
          <div key={work.id} className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row group border-stone-800/50 hover:border-amber-500/30 transition-all min-h-[420px]">
            <div className="lg:w-2/5 relative overflow-hidden">
              <img src={work.imageUrl} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className={`w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border ${
                  work.style === '敦煌' ? 'bg-amber-600/40 border-amber-500/30 text-white' : 'bg-teal-700/40 border-teal-500/30 text-white'
                }`}>
                  {work.style}
                </span>
                <span className={`w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border ${
                  work.status === 'Available' ? 'bg-emerald-600/40 border-emerald-500/30 text-white' : 'bg-stone-800/60 border-stone-700/30 text-stone-400'
                }`}>
                  {work.status === 'Available' ? '可授权' : '已授出'}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="text-[10px] text-stone-400 uppercase font-bold tracking-widest mb-1">参考授权范围</div>
                 <div className="font-bold text-amber-400 text-lg">{work.priceRange}</div>
              </div>
            </div>

            <div className="flex-1 p-8 flex flex-col bg-stone-950/20">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold leading-tight group-hover:text-amber-500 transition-colors">{work.title}</h3>
                <span className="text-[10px] font-mono text-stone-600">#{work.id}</span>
              </div>
              
              <p className="text-stone-400 text-xs leading-relaxed mb-6 line-clamp-2">{work.description}</p>
              
              <div className="bg-stone-900/50 rounded-2xl p-5 border border-stone-800/50 mb-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500 flex items-center gap-2 mb-4">
                  <GitBranch size={14} className="text-amber-500" /> AI 演化路径分析 (Evolution Logic)
                </div>
                <div className="flex justify-between items-start relative">
                  <div className="absolute top-4 left-0 right-0 h-[1px] border-t border-dashed border-stone-700 -z-0"></div>
                  {work.path.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center max-w-[80px] z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${idx === 0 ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-400'} border border-stone-700 shadow-lg`}>
                        {getIcon(step.icon)}
                      </div>
                      <span className="text-[10px] font-bold text-stone-200 mb-0.5">{step.label}</span>
                      <span className="text-[8px] text-stone-500 leading-tight scale-90 truncate w-full">{step.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-t border-stone-800/50 mt-auto">
                <div className="flex gap-6">
                   <div>
                    <div className="text-[10px] text-stone-500 uppercase font-bold mb-1">授权模式</div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-stone-200">
                      <ShieldCheck size={14} className="text-blue-500" />
                      {work.licenseType}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-500 uppercase font-bold mb-1">版权存证</div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                      <Lock size={12} />
                      ArteChain On-Chain
                    </div>
                  </div>
                </div>
                
                {role === 'COMMERCIAL' ? (
                  <button 
                    disabled={work.status !== 'Available'}
                    className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                    work.status === 'Available' 
                    ? 'bg-amber-600 text-white hover:bg-amber-500 shadow-lg shadow-amber-900/20' 
                    : 'bg-stone-900 text-stone-600 cursor-not-allowed border border-stone-800'
                  }`}>
                    {work.status === 'Available' ? <><ShoppingCart size={16} /> 授权咨询</> : '已授出'}
                  </button>
                ) : (
                  <button className="p-3 bg-stone-900 border border-stone-800 rounded-xl text-stone-400 hover:text-stone-100 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10 border-t border-stone-800">
        {[
          { icon: ShieldCheck, title: '合规确权', desc: '全链路版权追溯与链上存证' },
          { icon: CheckCircle2, title: '学术背书', desc: '专家组二次创作学术复核' },
          { icon: Info, title: '工艺指引', desc: '配套提供生产工艺白皮书' },
          { icon: Tag, title: '柔性授权', desc: '支持多种商业化定制模式' },
        ].map((feature, i) => (
          <div key={i} className="flex gap-4 items-center">
            <div className="p-2 bg-stone-900 rounded-lg text-amber-500">
              <feature.icon size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-200">{feature.title}</div>
              <div className="text-[10px] text-stone-500">{feature.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkLicensing;
