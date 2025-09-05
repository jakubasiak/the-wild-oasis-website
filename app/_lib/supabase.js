import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('There are no environment variables SUPABASE_URL or SUPABASE_KEY');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl };
export default supabase;