import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { PerampokanWarung } from './components/perampokan-warung';
import { LayananSheriff } from './components/layanan-sheriff';
import { KerusuhanPenembakan } from './components/kerusuhan-penembakan';
import { CodeZero } from './components/code-zero';
import { Penyandraan } from './components/penyandraan';

export default function App() {
  const [activeTab, setActiveTab] = useState<'perampokan' | 'layanan' | 'kerusuhan' | 'codezero' | 'penyandraan'>('perampokan');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            PENGUMUMAN SHERIFF
          </h1>
          <p className="text-slate-300">Kerajaan Roxwood</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap justify-center">
          <button
            onClick={() => setActiveTab('perampokan')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'perampokan'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Perampokan Warung
          </button>
          <button
            onClick={() => setActiveTab('layanan')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'layanan'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Layanan Sheriff
          </button>
          <button
            onClick={() => setActiveTab('kerusuhan')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'kerusuhan'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Kerusuhan & Penembakan
          </button>
          <button
            onClick={() => setActiveTab('codezero')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'codezero'
                ? 'bg-red-600 text-white shadow-lg shadow-red-500/50'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Code 0
          </button>
          <button
            onClick={() => setActiveTab('penyandraan')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'penyandraan'
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/50'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            Penyandraan
          </button>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'perampokan' && <PerampokanWarung />}
          {activeTab === 'layanan' && <LayananSheriff />}
          {activeTab === 'kerusuhan' && <KerusuhanPenembakan />}
          {activeTab === 'codezero' && <CodeZero />}
          {activeTab === 'penyandraan' && <Penyandraan />}
        </div>

        {/* Footer / Credit */}
        <div className="mt-12 mb-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-500 text-sm mb-1">
              © 2026 PENGUMUMAN SHERIFF. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Dibuat oleh <span className="text-yellow-400 font-semibold">MAUL KHALIF</span> — Untuk bantuan atau pembaruan, silahkan hubungi pembuat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}