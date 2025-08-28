import { createClient } from '@supabase/supabase-js';

const URL = 'https://vgorrygyxlsekadmtnre.supabase.co';
const apiKey = import.meta.env.VITE_API_KEY;
export const supabase = createClient(URL, apiKey);
