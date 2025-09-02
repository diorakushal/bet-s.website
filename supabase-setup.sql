-- Supabase Table Creation Script for BETS Android Waitlist
-- Run this in your Supabase SQL editor

-- Create the android_waitlist table
CREATE TABLE android_waitlist (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_android_waitlist_email ON android_waitlist(email);

-- Create an index on created_at for sorting
CREATE INDEX idx_android_waitlist_created_at ON android_waitlist(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE android_waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts from all users" ON android_waitlist
    FOR INSERT WITH CHECK (true);

-- Create a policy that allows reads only for authenticated users (optional)
-- Uncomment if you want to restrict read access
-- CREATE POLICY "Allow reads for authenticated users" ON android_waitlist
--     FOR SELECT USING (auth.role() = 'authenticated');

-- Optional: Create a function to get waitlist statistics
CREATE OR REPLACE FUNCTION get_waitlist_stats()
RETURNS TABLE(total_count BIGINT, today_count BIGINT) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*) as total_count,
        COUNT(*) FILTER (WHERE DATE(created_at) = CURRENT_DATE) as today_count
    FROM android_waitlist;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
