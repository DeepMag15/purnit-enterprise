/**
 * Storage Service
 * Placeholder for file storage business logic (Supabase Storage)
 */

// TODO: Implement file upload
// TODO: Implement file download
// TODO: Implement file deletion
// TODO: Implement signed URLs

export const StorageService = {
  upload: async (_bucket: string, _path: string, _file: File) => {
    throw new Error('Not implemented');
  },

  download: async (_bucket: string, _path: string) => {
    throw new Error('Not implemented');
  },

  getPublicUrl: (_bucket: string, _path: string) => {
    throw new Error('Not implemented');
  },

  delete: async (_bucket: string, _path: string) => {
    throw new Error('Not implemented');
  },

  list: async (_bucket: string, _prefix?: string) => {
    throw new Error('Not implemented');
  },
};
