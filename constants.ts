
import { IndustryNode } from './types';

export const INDUSTRY_STAGES: IndustryNode[] = [
  { id: 'research', title: '学术市场', description: '基于大数据的文化发现价值评估、受众偏好分析与产业转化预测', status: 'completed', icon: 'BookOpen' },
  { id: 'recommend', title: '主题推荐', description: 'AI 趋势预测、热门元素关联、策展视角推荐', status: 'completed', icon: 'Lightbulb' },
  { id: 'review', title: '内部评审', description: '版权合规审核、专家学术复核、工艺可行性评估', status: 'completed', icon: 'ClipboardCheck' },
  { id: 'license', title: '作品授权', description: '通过评审的创意资产入库，支持品牌方的定向授权申请与存证', status: 'processing', icon: 'Key' },
  { id: 'apply', title: '商业应用', description: 'IP 授权、柔性柔性供应链生产与全球销售变现', status: 'pending', icon: 'Briefcase' }
];

export const HERITAGE_STYLES = [
  {
    type: '敦煌',
    primaryColor: 'text-amber-500',
    borderColor: 'border-amber-900/50',
    description: '丝路瑰宝，飞天壁画与绚烂矿物颜色的极致融合。'
  },
  {
    type: '三星堆',
    primaryColor: 'text-teal-500',
    borderColor: 'border-teal-900/50',
    description: '古蜀文明，青铜面具与神秘祭祀文化的超现实表达。'
  }
];
