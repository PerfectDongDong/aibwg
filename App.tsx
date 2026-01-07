
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import IndustrialHub from './views/IndustrialHub';
import AcademicMarket from './views/AcademicResearch';
import ThemeRecommendation from './views/ThemeRecommendation';
import InternalReview from './views/InternalReview';
import CommercialHub from './views/CommercialHub';
import { Bell, Search, User, Shield, Users } from 'lucide-react';
import { UserRole } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [userRole, setUserRole] = useState<UserRole>('INTERNAL');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard role={userRole} />;
      case 'research':
        return <AcademicMarket />;
      case 'recommend':
        return <ThemeRecommendation />;
      case 'review':
        return <InternalReview />;
      case 'apply':
        return <CommercialHub />;
      case 'track':
        return <IndustrialHub />;
      default:
        return (
          <div className="flex items-center justify-center h-full text-stone-500 italic">
            该功能模块针对当前身份正在锁定或研发中...
          </div>
        );
    }
  };

  // Safe navigation when switching roles
  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
    // If the current view is not available for the new role, redirect to dashboard
    const internalViews = ['dashboard', 'research', 'recommend', 'review', 'track'];
    const commercialViews = ['dashboard', 'recommend', 'apply', 'track'];
    const availableViews = role === 'INTERNAL' ? internalViews : commercialViews;
    
    if (!availableViews.includes(activeView)) {
      setActiveView('dashboard');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0c0a09]">
      <Sidebar activeView={activeView} setActiveView={setActiveView} role={userRole} />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-stone-800 flex items-center justify-between px-8 bg-stone-950/30 backdrop-blur-sm sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
              <input 
                type="text" 
                placeholder="搜索资产、订单、项目..." 
                className="w-full bg-stone-900 border border-stone-800 rounded-full py-2 pl-10 pr-4 text-sm text-stone-300 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Role Switcher for Simulation */}
            <div className="flex bg-stone-900 p-1 rounded-xl border border-stone-800">
              <button 
                onClick={() => handleRoleChange('INTERNAL')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  userRole === 'INTERNAL' ? 'bg-amber-600 text-white shadow-md shadow-amber-900/20' : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                <Shield size={14} />
                内部人员
              </button>
              <button 
                onClick={() => handleRoleChange('COMMERCIAL')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  userRole === 'COMMERCIAL' ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                <Users size={14} />
                商业用户
              </button>
            </div>

            <button className="relative text-stone-400 hover:text-stone-100 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="h-8 w-[1px] bg-stone-800"></div>
            
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-stone-200 group-hover:text-amber-500 transition-colors">
                  {userRole === 'INTERNAL' ? '吴策展' : '张经理'}
                </div>
                <div className="text-[10px] text-stone-500 uppercase tracking-wider">
                  {userRole === 'INTERNAL' ? '核心管理组' : '授权合作伙伴'}
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-white font-bold group-hover:border-amber-500 transition-all overflow-hidden bg-stone-800 shadow-lg`}>
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userRole === 'INTERNAL' ? 'curator' : 'partner'}`} alt="Avatar" />
              </div>
            </div>
          </div>
        </header>
        
        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
