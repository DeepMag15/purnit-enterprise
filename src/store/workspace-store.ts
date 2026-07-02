/**
 * Workspace Store
 * Manages active workspace state
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Workspace } from '@/types';

interface WorkspaceState {
  currentWorkspace: Workspace | null;
  workspaces: Workspace[];
  isLoading: boolean;

  // Actions
  setCurrentWorkspace: (workspace: Workspace | null) => void;
  setWorkspaces: (workspaces: Workspace[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set) => ({
      currentWorkspace: null,
      workspaces: [],
      isLoading: false,

      setCurrentWorkspace: (currentWorkspace) => set({ currentWorkspace }),

      setWorkspaces: (workspaces) => set({ workspaces }),

      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'purnit-workspace-store',
      partialize: (state) => ({
        currentWorkspace: state.currentWorkspace,
      }),
    },
  ),
);
