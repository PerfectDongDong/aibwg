
import React from 'react';
import { ShieldAlert, CheckCircle2, XCircle, Info, MoreVertical } from 'lucide-react';

const InternalReview: React.FC = () => {
  const reviewItems = [
    { id: 'RV-1029', title: '三星堆金面具系列 - 高端耳机壳', stage: '版权合规审核', priority: '高', applicant: '张三', status: '待审核' },
    { id: 'RV-1028', title: '敦煌三兔共耳 - 羊绒围巾', stage: '专家学术复核', priority: '中', applicant: '李四', status: '进行中' },
    { id: 'RV-1027', title: '丝路花雨 - 联名彩妆', stage: '工艺可行性评估', priority: '高', applicant: '王五', status: '已打回' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">内部评审工作台</h1>
          <p className="text-stone-400 mt-2">确保每一件文化资产在推向市场前都符合合规性、审美与工艺要求。</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-4 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-full text-xs font-bold">待我审核 (5)</button>
        <button className="px-4 py-2 bg-stone-900 text-stone-500 rounded-full text-xs font-bold border border-stone-800">全部任务</button>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden border-stone-800">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-stone-900/50 border-b border-stone-800 text-stone-500 uppercase tracking-widest text-[10px] font-bold">
              <th className="p-4">项目编号</th>
              <th className="p-4">项目名称</th>
              <th className="p-4">当前阶段</th>
              <th className="p-4">优先级</th>
              <th className="p-4">申请人</th>
              <th className="p-4">状态</th>
              <th className="p-4">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {reviewItems.map((item) => (
              <tr key={item.id} className="hover:bg-stone-900/30 transition-colors group">
                <td className="p-4 font-mono text-xs text-stone-500">{item.id}</td>
                <td className="p-4 font-bold">{item.title}</td>
                <td className="p-4 text-stone-400">{item.stage}</td>
                <td className="p-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${item.priority === '高' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'}`}>
                    {item.priority}
                  </span>
                </td>
                <td className="p-4 text-stone-400">{item.applicant}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {item.status === '待审核' && <ShieldAlert size={14} className="text-amber-500" />}
                    {item.status === '进行中' && <Info size={14} className="text-blue-500" />}
                    {item.status === '已打回' && <XCircle size={14} className="text-red-500" />}
                    <span className="text-xs">{item.status}</span>
                  </div>
                </td>
                <td className="p-4">
                  <button className="p-2 text-stone-500 hover:text-stone-100"><MoreVertical size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternalReview;
