/**
 * Supabase client configuration
 * Initializes the Supabase client with environment variables
 */

import { createClient } from '@supabase/supabase-js';
import { env } from '@/config/env';

const supabaseUrl = env.SUPABASE_URL;
const supabaseAnonKey = env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

export default supabase;
