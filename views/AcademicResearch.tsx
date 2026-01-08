
import React, { useState } from 'react';
import { 
  Search, 
  BarChart3, 
  PieChart, 
  Zap, 
  TrendingUp, 
  Users, 
  Target, 
  ArrowUpRight, 
  BookOpen, 
  Microscope,
  Share2,
  MessageCircle,
  Flame,
  Globe,
  Plus,
  X,
  Upload
} from 'lucide-react';
import { UserRole } from '../types';

interface SocialMetric {
  platform: 'Douyin' | 'Kuaishou' | 'Xiaohongshu';
  mentions: string;
  heat: number; // 0-100
  trend: 'up' | 'down';
}

interface AcademicInsight {
  title: string;
  tag: string;
  potential: string;
  growth: string;
  audience: string;
  summary: string;
  imageUrl: string;
  socialMetrics?: SocialMetric[];
}

interface AcademicMarketProps {
  role?: UserRole;
}

const AcademicMarket: React.FC<AcademicMarketProps> = ({ role = 'INTERNAL' }) => {
  const [activeTheme, setActiveTheme] = useState<'DUNHUANG' | 'SANXINGDUI'>('DUNHUANG');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for insights
  const [dunhuangInsights, setDunhuangInsights] = useState<AcademicInsight[]>([
    { 
      title: '唐代丝绸之路矿物颜料与现代美妆匹配度分析', 
      tag: '色彩考古', 
      potential: '96', 
      growth: '+14%',
      audience: 'Z世代 (18-25岁)',
      summary: '研究显示，青金石色与朱砂色在现代高端彩妆市场具有极高溢价能力，建议开发“盛唐复刻”眼影系列。',
      imageUrl: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070',
      socialMetrics: [
        { platform: 'Xiaohongshu', mentions: '45.2w+', heat: 94, trend: 'up' },
        { platform: 'Douyin', mentions: '1.2b+', heat: 88, trend: 'up' },
        { platform: 'Kuaishou', mentions: '890w+', heat: 72, trend: 'down' }
      ]
    },
    { 
      title: '莫高窟藻井图案的拓扑几何特征与壁纸纹样适配性', 
      tag: '图案研究', 
      potential: '91', 
      growth: '+18%',
      audience: '室内设计师/家居品牌',
      summary: '隋唐藻井的莲花与宝相花纹样具有极强的数学对称性。通过算法提取其拓扑路径，可无缝转化为现代数码印花。',
      imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070',
      socialMetrics: [
        { platform: 'Xiaohongshu', mentions: '12.8w+', heat: 82, trend: 'up' },
        { platform: 'Douyin', mentions: '240w+', heat: 65, trend: 'up' }
      ]
    },
    { 
      title: '敦煌乐舞壁画中的反弹琵琶叙事在数字化演展中的应用', 
      tag: '乐舞研究', 
      potential: '88', 
      growth: '+22%',
      audience: '数字艺术收藏者/演展策划',
      summary: '基于骨骼捕捉技术复原的敦煌舞姿，在B站等视频平台具有极高的二创潜能，适合开发沉浸式XR展演。',
      imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070',
      socialMetrics: [
        { platform: 'Xiaohongshu', mentions: '8.4w+', heat: 76, trend: 'up' },
        { platform: 'Douyin', mentions: '5.2b+', heat: 91, trend: 'up' }
      ]
    }
  ]);

  const [sanxingduiInsights, setSanxingduiInsights] = useState<AcademicInsight[]>([
    { 
      title: '三星堆青铜器线条在电子产品外观设计的应用潜力', 
      tag: '器型研究', 
      potential: '89', 
      growth: '+8%',
      audience: '科技极客/潮流男士',
      summary: '青铜纵目神像的夸张线条高度契合电竞周边、手机背壳等工业设计，具有极强的身份符号辨识度。',
      imageUrl: 'https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?q=80&w=2070',
      socialMetrics: [
        { platform: 'Xiaohongshu', mentions: '28.5w+', heat: 85, trend: 'up' },
        { platform: 'Douyin', mentions: '4.2b+', heat: 92, trend: 'up' },
        { platform: 'Kuaishou', mentions: '1.1b+', heat: 78, trend: 'up' }
      ]
    },
    { 
      title: '青铜神树的模块化分体结构在潮玩组装逻辑中的转化', 
      tag: '结构分析', 
      potential: '93', 
      growth: '+25%',
      audience: '潮玩收藏家/青少年群体',
      summary: '神树的九鸟三层结构是天然的模块化设计模板。利用这一逻辑开发可拼装、可替换零件的乐高式盲盒，具有极高粘性。',
      imageUrl: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2070',
      socialMetrics: [
        { platform: 'Xiaohongshu', mentions: '32.1w+', heat: 91, trend: 'up' },
        { platform: 'Douyin', mentions: '1.5b+', heat: 96, trend: 'up' }
      ]
    },
    { 
      title: '三星堆祭祀坑服饰纹样与现代“新中式”高定剪裁的结合', 
      tag: '服饰研究', 
      potential: '85', 
      growth: '+12%',
      audience: '时尚设计师/女性高端市场',
      summary: '大立人身上的云龙纹和几何蚕纹，通过苏绣或现代激光压花技术呈现，能够极大提升“新中式”服饰的文化溢价。',
      imageUrl: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070',
      socialMetrics: [
        { platform: 'Xiaohongshu', mentions: '15.2w+', heat: 88, trend: 'up' },
        { platform: 'Douyin', mentions: '890w+', heat: 74, trend: 'down' }
      ]
    }
  ]);

  const currentInsights = activeTheme === 'DUNHUANG' ? dunhuangInsights : sanxingduiInsights;

  const [formData, setFormData] = useState<Partial<AcademicInsight>>({
    title: '',
    tag: '',
    potential: '85',
    growth: '+10%',
    audience: '',
    summary: '',
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83dadc?q=80&w=2070'
  });

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    const newInsight: AcademicInsight = {
      ...formData as AcademicInsight,
      socialMetrics: [
        { platform: 'Xiaohongshu', mentions: '新发布', heat: 50, trend: 'up' },
        { platform: 'Douyin', mentions: '新发布', heat: 30, trend: 'up' }
      ]
    };

    if (activeTheme === 'DUNHUANG') {
      setDunhuangInsights([newInsight, ...dunhuangInsights]);
    } else {
      setSanxingduiInsights([newInsight, ...sanxingduiInsights]);
    }
    
    setIsModalOpen(false);
    setFormData({ title: '', tag: '', audience: '', summary: '' });
  };

  const renderSocialTag = (metric: SocialMetric) => {
    const platformColors = {
      Douyin: 'bg-[#1c1c1c] text-white border-stone-800',
      Xiaohongshu: 'bg-red-500/10 text-red-500 border-red-500/20',
      Kuaishou: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
    };

    const platformLabels = {
      Douyin: '抖音',
      Xiaohongshu: '小红书',
      Kuaishou: '快手'
    };

    return (
      <div key={metric.platform} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${platformColors[metric.platform]} transition-all hover:scale-105`}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] font-bold uppercase tracking-tight">{platformLabels[metric.platform]}</span>
            <div className={`text-[8px] flex items-center ${metric.trend === 'up' ? 'text-emerald-400' : 'text-stone-500'}`}>
              {metric.trend === 'up' ? '↑' : '↓'}
            </div>
          </div>
          <div className="text-xs font-black tracking-tight">{metric.mentions}</div>
          <div className="w-full h-1 bg-stone-800 rounded-full mt-1 overflow-hidden">
            <div 
              className={`h-full ${metric.platform === 'Xiaohongshu' ? 'bg-red-500' : metric.platform === 'Douyin' ? 'bg-cyan-400' : 'bg-orange-500'}`} 
              style={{ width: `${metric.heat}%` }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Microscope className={activeTheme === 'DUNHUANG' ? 'text-amber-500' : 'text-teal-500'} />
            学术市场：文化洞察与价值分析
          </h1>
          <p className="text-stone-400 mt-2">结合多维社交媒体大数据，动态评估学术发现的产业潜能。</p>
        </div>
        
        <div className="flex items-center gap-4">
          {role === 'INTERNAL' && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/20 transition-all"
            >
              <Plus size={18} /> 发布学术洞察
            </button>
          )}
          
          <div className="flex bg-stone-900/80 p-1 rounded-2xl border border-stone-800 backdrop-blur-md">
            <button 
              onClick={() => setActiveTheme('DUNHUANG')}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeTheme === 'DUNHUANG' ? 'bg-amber-600 text-white shadow-lg' : 'text-stone-500 hover:text-stone-300'}`}
            >
              敦煌研究
            </button>
            <button 
              onClick={() => setActiveTheme('SANXINGDUI')}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeTheme === 'SANXINGDUI' ? 'bg-teal-700 text-white shadow-lg' : 'text-stone-500 hover:text-stone-300'}`}
            >
              三星堆研究
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`glass-card p-6 rounded-2xl border-opacity-30 ${activeTheme === 'DUNHUANG' ? 'border-amber-500' : 'border-teal-500'}`}>
          <div className={`flex items-center gap-2 mb-4 ${activeTheme === 'DUNHUANG' ? 'text-amber-400' : 'text-teal-400'}`}>
            <TrendingUp size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">全域关注热度</span>
          </div>
          <div className="text-3xl font-bold">
            {activeTheme === 'DUNHUANG' ? '87.2' : '91.5'} 
            <span className="text-sm text-emerald-500 font-normal ml-2">↑ {activeTheme === 'DUNHUANG' ? '4.1' : '6.8'}</span>
          </div>
          <div className="mt-2 text-xs text-stone-500">24h 社交媒体提及量加权指数</div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl border-stone-800">
          <div className="flex items-center gap-2 text-red-500 mb-4">
            <Share2 size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">小红书声量</span>
          </div>
          <div className="text-3xl font-bold">{activeTheme === 'DUNHUANG' ? '12.4w+' : '9.1w+'}</div>
          <div className="mt-2 text-xs text-stone-500">种草笔记数与互动总量</div>
        </div>

        <div className="glass-card p-6 rounded-2xl border-stone-800">
          <div className="flex items-center gap-2 text-cyan-400 mb-4">
            <MessageCircle size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">抖音趋势词</span>
          </div>
          <div className="text-3xl font-bold">{activeTheme === 'DUNHUANG' ? '1.8b+' : '2.1b+'}</div>
          <div className="mt-2 text-xs text-stone-500">相关话题视频播放总量</div>
        </div>

        <div className="glass-card p-6 rounded-2xl border-stone-800">
          <div className="flex items-center gap-2 text-orange-500 mb-4">
            <Flame size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">转化ROI预测</span>
          </div>
          <div className="text-3xl font-bold">{activeTheme === 'DUNHUANG' ? '3.4x' : '4.1x'}</div>
          <div className="mt-2 text-xs text-stone-500">结合商业数据模型的产值预估</div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {currentInsights.map((item, i) => (
            <div key={i} className={`glass-card p-8 rounded-[2rem] hover:border-opacity-50 transition-all group ${
              activeTheme === 'DUNHUANG' ? 'hover:border-amber-500/30' : 'hover:border-teal-500/30'
            }`}>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4">
                  <div className="aspect-[4/3] bg-stone-900 rounded-2xl overflow-hidden mb-4 relative border border-stone-800">
                    <img src={item.imageUrl} className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000" alt="Analysis thumbnail" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] px-2 py-1 bg-stone-800 text-stone-400 rounded-md border border-stone-700 font-bold tracking-tight">{item.tag}</span>
                    <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 font-bold tracking-tight">{item.growth}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold group-hover:text-amber-500 transition-colors leading-tight">{item.title}</h3>
                    <button className="p-2 text-stone-500 hover:text-stone-200 transition-colors">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed max-w-3xl">{item.summary}</p>
                  
                  {item.socialMetrics && (
                    <div className="py-4 space-y-3">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                        <Globe size={12} className="text-stone-500" /> 全网社交媒体即时指数
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {item.socialMetrics.map(metric => renderSocialTag(metric))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="glass-card w-full max-w-2xl rounded-3xl p-8 border-stone-800 shadow-2xl relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-stone-500 hover:text-white">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Upload className="text-emerald-500" /> 发布学术洞察 (学术市场端)
            </h2>
            <form onSubmit={handleUpload} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase">洞察标题</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="例如：唐代矿物颜料与美妆分析"
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase">研究标签</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="色彩考古 / 器型研究"
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    value={formData.tag}
                    onChange={e => setFormData({...formData, tag: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-stone-500 uppercase">核心摘要 (学术价值与产业建议)</label>
                <textarea 
                  required 
                  rows={4}
                  placeholder="详细描述研究发现及对应的商业转化机会..."
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  value={formData.summary}
                  onChange={e => setFormData({...formData, summary: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase">目标人群</label>
                  <input 
                    type="text" 
                    placeholder="Z世代 / 高端收藏者"
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    value={formData.audience}
                    onChange={e => setFormData({...formData, audience: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-500 uppercase">参考图片 URL</label>
                  <input 
                    type="text" 
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    value={formData.imageUrl}
                    onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                  />
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-xl transition-all"
              >
                存入学术市场数据库
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicMarket;
