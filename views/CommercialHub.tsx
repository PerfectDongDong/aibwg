
import React from 'react';
import { Briefcase, Coins, Global, BarChart3, Package, ShoppingCart } from 'lucide-react';

const CommercialHub: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">商业应用与价值实现</h1>
          <p className="text-stone-400 mt-2">打通 IP 授权、柔性生产与全球多渠道变现。 </p>
        </div>
        <div className="bg-stone-900 p-1 rounded-xl flex">
          <button className="px-4 py-1.5 bg-stone-800 rounded-lg text-xs font-bold shadow-sm">实时营收</button>
          <button className="px-4 py-1.5 text-xs text-stone-500 hover:text-stone-300 font-bold">授权报告</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-stone-400 font-medium">累计授权营收</h3>
            <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg"><Coins size={20} /></div>
          </div>
          <div className="text-3xl font-bold">￥142,520,000</div>
          <div className="mt-4 text-xs text-emerald-500 font-bold">较上季度增长 24% ↑</div>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-stone-400 font-medium">全球分发渠道</h3>
            <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg"><BarChart3 size={20} /></div>
          </div>
          <div className="text-3xl font-bold">24 个国家/地区</div>
          <div className="mt-4 text-xs text-stone-500 font-bold">主要增长点：东南亚市场</div>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-stone-400 font-medium">线上/线下转化率</h3>
            <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg"><ShoppingCart size={20} /></div>
          </div>
          <div className="text-3xl font-bold">4.82% / 12.5%</div>
          <div className="mt-4 text-xs text-amber-500 font-bold">平均单笔消费 ￥348.00</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-3xl">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="text-amber-500" />
            IP 授权项目池
          </h2>
          <div className="space-y-4">
            {[
              { brand: 'LVMH Group', category: '奢侈品/配饰', date: '2024.12' },
              { brand: '泡泡玛特', category: '盲盒/潮玩', date: '2025.01' },
              { brand: '星巴克', category: '快消品', date: '2024.11' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-stone-900/50 rounded-xl border border-stone-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center font-bold text-stone-500">{item.brand[0]}</div>
                  <div>
                    <div className="font-bold">{item.brand}</div>
                    <div className="text-xs text-stone-500">{item.category}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-amber-500">授权中</div>
                  <div className="text-[10px] text-stone-600 mt-1">预计发布: {item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl overflow-hidden relative">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Package className="text-amber-500" />
            变现趋势热力图 (24h)
          </h2>
          <div className="h-[250px] bg-stone-900 rounded-2xl border border-stone-800 flex items-center justify-center italic text-stone-600">
             [ 实时消费热力分布数据加载中 ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialHub;
