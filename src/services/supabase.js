import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://vkifcvvhrrkidnqcpfdq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZraWZjdnZocnJraWRucWNwZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNjE4ODQsImV4cCI6MjAzNjczNzg4NH0.rLDzTzbhfyyOGYXGdzpF8c9UK75lOPMJYq1jhg7CJ7Q'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
