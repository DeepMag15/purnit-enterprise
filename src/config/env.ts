/**
 * Environment configuration
 * Centralized access to all environment variables with type safety
 */

interface EnvConfig {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  OPENAI_API_KEY: string;
  GOOGLE_CLIENT_ID: string;
  APP_NAME: string;
  APP_ENV: 'development' | 'staging' | 'production';
  IS_DEV: boolean;
  IS_PROD: boolean;
}

export const env: EnvConfig = {
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL ?? '',
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
  OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY ?? '',
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '',
  APP_NAME: import.meta.env.VITE_APP_NAME ?? 'Purnit',
  APP_ENV: (import.meta.env.VITE_APP_ENV as EnvConfig['APP_ENV']) ?? 'development',
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
};
