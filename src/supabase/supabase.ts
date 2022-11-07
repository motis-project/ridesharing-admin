import { createClient } from '@supabase/supabase-js';

const supabaseUrl : string = (process.env.REACT_APP_SUPABASE_BASE_URL as string);
const supabaseKey : string = (process.env.REACT_APP_SUPABASE_BASE_KEY as string);

export const supabase = createClient(supabaseUrl, supabaseKey);