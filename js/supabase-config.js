import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://qhiflgztlcrbedmkhmmi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoaWZsZ3p0bGNyYmVkbWtobW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4ODU5NDAsImV4cCI6MjA5MTQ2MTk0MH0.g3J-K-uTGnYUi8fwKlnz4A75aMQrj2rrujuqjWKPFw8N_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey);