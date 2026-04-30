import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hykqwgaqmvtqlvkvagdz.supabase.co'
const supabaseKey = 'sb_publishable_MWGgbPjO5aqKGIVYjmt1cA_MUvT9VRL'
export const supabase = createClient(supabaseUrl, supabaseKey)
