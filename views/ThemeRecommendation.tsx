
import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Palette, 
  Sparkles,
  Quote,
  TrendingUp,
  Target,
  Search,
  BookOpen,
  PieChart,
  Share2,
  Network,
  Cpu,
  Layers,
  BarChart,
  Globe,
  Plus,
  X,
  PlusSquare
} from 'lucide-react';
import { UserRole } from '../types';

interface ThemePackage {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  academicSource: string;
  socialFocus: string[]; // ['小红书', '抖音']
  hotScore: number;
  marketPotential: string;
  palette: string[];
  motifs: string[];
}

interface ThemeRecommendationProps {
  role?: UserRole;
}

const ThemeRecommendation: React.FC<ThemeRecommendationProps> = ({ role = 'INTERNAL' }) => {
  const [activeTheme, setActiveTheme] = useState<'DUNHUANG' | 'SANXINGDUI'>('DUNHUANG');
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for themes
  const [dunhuangThemes, setDunhuangThemes] = useState<ThemePackage[]>([
    {
      id: 'T-DH-01',
      title: '极光飞天：流体金属',
      subtitle: '将反弹琵琶的动感与赛博朋克流体结合',
      academicSource: '莫高窟 112 窟·唐代壁画线描研究',
      socialFocus: ['小红书', '抖音'],
      hotScore: 98,
      marketPotential: '高端潮玩、数字腕表、概念美妆',
      palette: ['#B45309', '#78350F', '#06B6D4', '#EAB308'],
      motifs: ['飘带曲线', '宝相花', '反弹琵琶'],
      imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070'
    },
    {
      id: 'T-DH-02',
      title: '九色鹿：治愈系大地',
      subtitle: '北魏矿物颜料与现代疗愈美学',
      academicSource: '莫高窟 257 窟·九色鹿本生',
      socialFocus: ['小红书', '快手'],
      hotScore: 92,
      marketPotential: '母婴用品、香薰家居、舒缓插画',
      palette: ['#FEF3C7', '#FDE68A', '#92400E', '#D97706'],
      motifs: ['九色鹿影', '云纹', '北魏风格树木'],
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964'
    },
    {
      id: 'T-DH-03',
      title: '藻井华盖：中式对称',
      subtitle: '隋唐藻井纹样与现代极简家居',
      academicSource: '莫高窟 329 窟·藻井莲花纹',
      socialFocus: ['小红书', '知乎'],
      hotScore: 89,
      marketPotential: '高端丝巾、灯饰设计、艺术餐具',
      palette: ['#1E3A8A', '#F59E0B', '#F1F5F9', '#DC2626'],
      motifs: ['重叠莲花', '连环云纹', '几何放射'],
      imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070'
    }
  ]);

  const [sanxingduiThemes, setSanxingduiThemes] = useState<ThemePackage[]>([
    {
      id: 'T-SX-01',
      title: '纵目未来：重型工业',
      subtitle: '青铜器几何折面与电竞美学',
      academicSource: '三星堆二号祭祀坑·青铜纵目面具',
      socialFocus: ['抖音', 'B站'],
      hotScore: 95,
      marketPotential: '电竞外设、机械键盘、功能性箱包',
      palette: ['#0D9488', '#115E59', '#D1D5DB', '#4B5563'],
      motifs: ['纵目折线', '神树分枝', '兽面纹'],
      imageUrl: 'https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?q=80&w=2070'
    },
    {
      id: 'T-SX-02',
      title: '神树秘境：模组化潮玩',
      subtitle: '利用青铜神树的结构开发拼装潮玩',
      academicSource: '三星堆一号祭祀坑·青铜神树',
      socialFocus: ['抖音', '得物'],
      hotScore: 94,
      marketPotential: '积木玩具、盲盒、桌面摆件',
      palette: ['#101E17', '#34D399', '#9CA3AF', '#FCD34D'],
      motifs: ['分体支架', '金乌造型', '螺旋枝叶'],
      imageUrl: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2070'
    },
    {
      id: 'T-SX-03',
      title: '金面奢享：高定时尚',
      subtitle: '古蜀金箔工艺与现代奢侈品包装',
      academicSource: '三星堆三号祭祀坑·金面罩',
      socialFocus: ['小红书', 'Vogue'],
      hotScore: 87,
      marketPotential: '高级珠宝、香水包材、礼盒定制',
      palette: ['#F59E0B', '#000000', '#FFFFFF', '#78350F'],
      motifs: ['金面轮廓', '流纹', '太阳鸟'],
      imageUrl: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070'
    }
  ]);

  const currentThemes = activeTheme === 'DUNHUANG' ? dunhuangThemes : sanxingduiThemes;

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    academicSource: '',
    motifs: '',
    palette: '#B45309,#78350F,#06B6D4',
    imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070'
  });

  const handleCreateTheme = (e: React.FormEvent) => {
    e.preventDefault();
    const newTheme: ThemePackage = {
      id: `T-${activeTheme === 'DUNHUANG' ? 'DH' : 'SX'}-${Date.now()}`,
      title: formData.title,
      subtitle: formData.subtitle,
      academicSource: formData.academicSource,
      imageUrl: formData.imageUrl,
      socialFocus: ['小红书', '抖音'],
      hotScore: 85,
      marketPotential: '待定',
      palette: formData.palette.split(','),
      motifs: formData.motifs.split(',').map(s => s.trim())
    };

    if (activeTheme === 'DUNHUANG') {
      setDunhuangThemes([newTheme, ...dunhuangThemes]);
    } else {
      setSanxingduiThemes([newTheme, ...sanxingduiThemes]);
    }

    setIsModalOpen(false);
    setFormData({ title: '', subtitle: '', academicSource: '', motifs: '', palette: '#B45309,#78350F,#06B6D4', imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070' });
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-black tracking-tight">AI 灵感策展引擎</h1>
            <span className="bg-amber-500/10 text-amber-500 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-500/20 uppercase tracking-widest flex items-center gap-1">
              <Cpu size={12} /> Curated by AI
            </span>
          </div>
          <p className="text-stone-400">
            合成具有商业爆发潜力的“文化主题包”，连接学术白皮书与社交媒体热力。
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {role === 'INTERNAL' && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-amber-900/20 transition-all"
            >
              <PlusSquare size={18} /> 策展新主题
            </button>
          )}
          
          <div className="flex bg-stone-900/80 p-1 rounded-2xl border border-stone-800 backdrop-blur-md">
            <button onClick={() => setActiveTheme('DUNHUANG')} className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTheme === 'DUNHUANG' ? 'bg-amber-600 text-white shadow-lg' : 'text-stone-500 hover:text-stone-300'}`}>敦煌·丝路</button>
            <button onClick={() => setActiveTheme('SANXINGDUI')} className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTheme === 'SANXINGDUI' ? 'bg-teal-700 text-white shadow-lg' : 'text-stone-500 hover:text-stone-300'}`}>三星堆·古蜀</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentThemes.map((theme) => (
              <div 
                key={theme.id} 
                onMouseEnter={() => setHoveredPackage(theme.id)}
                className={`glass-card rounded-[2.5rem] p-1 border-stone-800/50 hover:border-amber-500/30 transition-all cursor-pointer group flex flex-col ${hoveredPackage === theme.id ? 'ring-1 ring-amber-500/20' : ''}`}
              >
                <div className="aspect-[16/10] rounded-[2.2rem] overflow-hidden relative">
                  <img src={theme.imageUrl} alt={theme.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="text-[10px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded uppercase tracking-tighter">Theme Package</span>
                       <span className="text-[10px] font-bold text-white/70">潜力指数: {theme.hotScore}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{theme.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-xs text-stone-400 font-medium leading-relaxed">{theme.subtitle}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {theme.motifs.map(m => (
                      <span key={m} className="text-[10px] bg-stone-900 border border-stone-800 text-stone-300 px-2 py-1 rounded-lg">#{m}</span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-stone-800 flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {theme.palette.map((color, i) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-stone-950" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                    <button className="text-[10px] font-bold text-amber-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      获取完整方案 <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-4 space-y-6">
          <div className="glass-card rounded-[2.5rem] p-8 border-stone-800/50 flex flex-col h-full sticky top-24">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Network className="text-amber-500" /> 市场传播图谱
              </h3>
              <span className="text-[10px] text-stone-500 font-mono">LIVE SYNC</span>
            </div>

            <div className="flex-1 bg-stone-950/50 rounded-3xl border border-stone-800 relative overflow-hidden flex items-center justify-center p-6 mb-8">
              <div className="relative w-full h-full flex flex-col items-center justify-center space-y-6">
                <div className="flex justify-center items-center relative w-full h-40">
                  <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center z-10 shadow-2xl shadow-amber-900/40">
                    <Share2 className="text-white" size={24} />
                  </div>
                  {[0, 72, 144, 216, 288].map((angle, i) => (
                    <div 
                      key={i} 
                      className="absolute w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center transition-all duration-1000"
                      style={{ 
                        transform: `rotate(${angle}deg) translate(80px) rotate(-${angle}deg)` 
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></div>
                    </div>
                  ))}
                  <svg className="absolute inset-0 w-full h-full -z-0">
                    <circle cx="50%" cy="50%" r="80" fill="none" stroke="rgba(120, 53, 15, 0.2)" strokeDasharray="4 4" />
                  </svg>
                </div>
                <div className="text-center">
                   <div className="text-amber-500 font-black text-2xl">84%</div>
                   <div className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">爆火几率 (Viral Probability)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Theme Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in zoom-in duration-300">
          <div className="glass-card w-full max-w-2xl rounded-3xl p-8 border-stone-800 shadow-2xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-stone-500 hover:text-white">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="text-amber-500" /> 策展商业主题包
            </h2>
            <form onSubmit={handleCreateTheme} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-500 uppercase">主题包名称</label>
                <input 
                  required 
                  type="text" 
                  placeholder="例如：极光飞天·流体金属"
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-500 uppercase">学术来源引用</label>
                <input 
                  required 
                  type="text" 
                  placeholder="例如：莫高窟 112 窟·唐代壁画研究"
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={formData.academicSource}
                  onChange={e => setFormData({...formData, academicSource: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase">核心色值 (逗号分隔)</label>
                  <input 
                    type="text" 
                    placeholder="#B45309, #78350F"
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                    value={formData.palette}
                    onChange={e => setFormData({...formData, palette: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase">核心图案特征</label>
                  <input 
                    type="text" 
                    placeholder="宝相花, 云纹"
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                    value={formData.motifs}
                    onChange={e => setFormData({...formData, motifs: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-500 uppercase">创意副标题</label>
                <textarea 
                  rows={2}
                  placeholder="简述该主题如何平衡学术准确性与商业审美..."
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                  value={formData.subtitle}
                  onChange={e => setFormData({...formData, subtitle: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl shadow-xl transition-all"
              >
                生成并发布至主题库
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeRecommendation;
