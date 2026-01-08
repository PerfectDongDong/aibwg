
import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Lightbulb, 
  ClipboardCheck, 
  Key,
  Briefcase, 
  Settings,
  Activity,
  UserCircle
} from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  role: UserRole;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, role }) => {
  // Define all possible menu items
  const allItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: '总览看板', roles: ['INTERNAL', 'COMMERCIAL'] },
    { id: 'research', icon: BookOpen, label: '学术市场', roles: ['INTERNAL'] },
    { id: 'recommend', icon: Lightbulb, label: '主题推荐', roles: ['INTERNAL', 'COMMERCIAL'] },
    { id: 'review', icon: ClipboardCheck, label: '内部评审', roles: ['INTERNAL'] },
    { id: 'license', icon: Key, label: '作品授权', roles: ['INTERNAL', 'COMMERCIAL'] },
    { id: 'apply', icon: Briefcase, label: '商业应用', roles: ['COMMERCIAL'] },
    { id: 'track', icon: Activity, label: '全链追踪', roles: ['INTERNAL', 'COMMERCIAL'] },
  ];

  // Filter based on active role
  const menuItems = allItems.filter(item => item.roles.includes(role));

  return (
    <aside className="w-64 border-r border-stone-800 flex flex-col h-screen sticky top-0 bg-stone-950/50 backdrop-blur-md">
      <div className="p-6 border-b border-stone-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center font-bold text-white shadow-lg shadow-amber-600/20">A</div>
          <span className="text-xl font-bold tracking-tight text-amber-500">ArteChain</span>
        </div>
      </div>
      
      <div className="p-4 flex items-center gap-3 bg-stone-900/40 m-4 rounded-xl border border-stone-800/50">
        <div className={`p-2 rounded-lg ${role === 'INTERNAL' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'}`}>
          <UserCircle size={20} />
        </div>
        <div>
          <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">当前身份</div>
          <div className="text-xs font-bold text-stone-200">
            {role === 'INTERNAL' ? '内部审核专员' : '商业合作伙伴'}
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeView === item.id 
                ? 'bg-amber-900/30 text-amber-500 border border-amber-900/40 shadow-inner' 
                : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900/50'
            }`}
          >
            <item.icon size={18} />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-stone-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-stone-100 rounded-xl transition-colors text-sm">
          <Settings size={18} />
          <span>系统设置</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
