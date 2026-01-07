
import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, Wand2, Loader2, ArrowRight } from 'lucide-react';
import { generateHeritageArt, generateCreativeConcept } from '../services/geminiService';
import { HERITAGE_STYLES } from '../constants';

const CreativeStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('敦煌');
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [concept, setConcept] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      const [img, desc] = await Promise.all([
        generateHeritageArt(prompt, selectedStyle),
        generateCreativeConcept(prompt, selectedStyle)
      ]);
      setResultImage(img);
      setConcept(desc || "未能生成方案描述");
    } catch (error) {
      console.error(error);
      alert("生成失败，请检查API密钥配置");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-200 bg-clip-text text-transparent">AI 创意工坊</h1>
        <p className="text-stone-400 mt-2 text-lg">输入您的灵感，ArteChain 将通过顶级AI模型跨越时空连接古代文明与现代设计。</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-6 rounded-3xl space-y-6">
            <div>
              <label className="block text-sm font-semibold text-stone-400 mb-3">选择文化风格</label>
              <div className="grid grid-cols-2 gap-3">
                {HERITAGE_STYLES.map((style) => (
                  <button
                    key={style.type}
                    onClick={() => setSelectedStyle(style.type)}
                    className={`p-4 rounded-2xl border transition-all text-left ${
                      selectedStyle === style.type 
                        ? `${style.borderColor} bg-stone-900` 
                        : 'border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div className={`font-bold mb-1 ${style.primaryColor}`}>{style.type}</div>
                    <div className="text-[10px] text-stone-500 leading-tight">{style.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-400 mb-3">创意描述</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="例如：融合莫高窟九色鹿元素的现代高端腕表设计..."
                className="w-full bg-stone-900 border border-stone-800 rounded-2xl p-4 text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50 min-h-[150px] resize-none"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt}
              className="w-full py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-900/20"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin" />
                  正在穿梭时空...
                </>
              ) : (
                <>
                  <Wand2 size={20} />
                  立即生成创意作品
                </>
              )}
            </button>
          </div>
        </div>

        <div className="lg:col-span-3">
          {resultImage ? (
            <div className="space-y-6 animate-in zoom-in-95 duration-700">
              <div className="glass-card rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border-amber-900/30">
                <img src={resultImage} alt="Generated Art" className="w-full h-auto aspect-square object-cover" />
                <div className="p-6 bg-stone-900/50 backdrop-blur-sm border-t border-stone-800">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">生成作品预览</h3>
                    <div className="flex gap-2">
                      <button className="p-2 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors">
                        <ImageIcon size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="prose prose-invert prose-sm max-w-none text-stone-300">
                    <div dangerouslySetInnerHTML={{ __html: concept?.replace(/\n/g, '<br/>') || '' }} />
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-stone-800">
                    <button className="flex items-center gap-2 text-amber-500 font-bold group">
                      将该创意推送到产业链下游
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[500px] glass-card rounded-3xl flex flex-col items-center justify-center text-stone-500 border-dashed border-2 border-stone-800 p-12 text-center">
              <div className="w-20 h-20 bg-stone-900 rounded-full flex items-center justify-center mb-6">
                <Sparkles size={40} className="text-stone-700" />
              </div>
              <h3 className="text-xl font-medium text-stone-400 mb-2">等待创意降临</h3>
              <p className="max-w-xs">设置左侧参数并点击生成按钮，ArteChain 将为您呈现数字文化遗产的新生。</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeStudio;
