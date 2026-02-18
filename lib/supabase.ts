import { createClient } from "@supabase/supabase-js";

// Fallback placeholders allow the build to succeed without real credentials.
// At runtime, real values from .env.local (or Vercel env vars) are used.
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
