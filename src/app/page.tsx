'use client';

import React, { useState, useEffect } from 'react';
import ObservatorioShell, { ModuleKey } from '@/components/ObservatorioShell';
import AutonomiasSplitView from '@/components/AutonomiasSplitView';
import CongresoView from '@/components/CongresoView';
import PromisometroView from '@/components/PromisometroView';
import JusticiaView from '@/components/JusticiaView';

const VALID_MODULES: ModuleKey[] = ['congreso', 'autonomias', 'promisometro', 'justicia'];

export default function Page() {
  const [activeModule, setActiveModule] = useState<ModuleKey>('autonomias');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mod = params.get('modulo') as ModuleKey | null;
    if (mod && VALID_MODULES.includes(mod)) {
      setActiveModule(mod);
    }
  }, []);

  const handleSelectModule = (mod: ModuleKey) => {
    setActiveModule(mod);
    const url = new URL(window.location.href);
    url.searchParams.set('modulo', mod);
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <ObservatorioShell activeModule={activeModule} onSelectModule={handleSelectModule}>
      {activeModule === 'congreso' && <CongresoView />}
      {activeModule === 'autonomias' && <AutonomiasSplitView />}
      {activeModule === 'promisometro' && <PromisometroView />}
      {activeModule === 'justicia' && <JusticiaView />}
    </ObservatorioShell>
  );
}
