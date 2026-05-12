// meraki_supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Explicitly export URL and Key so native fetch calls can resolve absolute endpoints perfectly
export const supabaseUrl = 'https://oortstrowlduifklcdpz.supabase.co';
export const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vcnRzdHJvd2xkdWlma2xjZHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1ODEyODIsImV4cCI6MjA5NDE1NzI4Mn0.H6PlYVeNY7Mg0IlSnUToACJvB5LFbv7NT57V2G3BbHw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

