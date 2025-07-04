// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dzrkcwdpyzechzffypgu.supabase.co'; // e.g. https://xyzcompany.supabase.co
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6cmtjd2RweXplY2h6ZmZ5cGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NDAzMjksImV4cCI6MjA2NzAxNjMyOX0.eDapfw3twNNb9UtzR4qWP0qoos3IjIxoExIpxpg94_s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);