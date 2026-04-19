import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://atrjjiiedhupiikonrfr'
const supabaseKey = 'sb_publishable_Sk3k7z7yROhSjjHSHm4wPw_fl3rS86_'
export const supabase = createClient(supabaseUrl, supabaseKey)
