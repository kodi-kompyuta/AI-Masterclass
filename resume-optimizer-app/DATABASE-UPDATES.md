# Database Schema Updates for Job Matching & Cover Letters

## Run these SQL commands in Supabase SQL Editor

### 1. Job Descriptions Table

```sql
-- Create job_descriptions table
CREATE TABLE job_descriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  job_title TEXT NOT NULL,
  company_name TEXT,
  job_description TEXT NOT NULL,
  requirements TEXT,
  keywords JSONB,
  location TEXT,
  salary_range TEXT,
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE job_descriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own job descriptions"
  ON job_descriptions FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own job descriptions"
  ON job_descriptions FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own job descriptions"
  ON job_descriptions FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own job descriptions"
  ON job_descriptions FOR DELETE USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_job_descriptions_user_id ON job_descriptions(user_id);
CREATE INDEX idx_job_descriptions_created_at ON job_descriptions(created_at DESC);
```

### 2. Resume-Job Matches Table

```sql
-- Create resume_job_matches table (linking resumes to job descriptions)
CREATE TABLE resume_job_matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  resume_id UUID REFERENCES resumes(id) ON DELETE CASCADE,
  job_description_id UUID REFERENCES job_descriptions(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  match_score INTEGER, -- 0-100
  match_analysis JSONB, -- Detailed match breakdown
  missing_keywords JSONB,
  recommended_additions JSONB,
  strengths JSONB,
  gaps JSONB,
  UNIQUE(resume_id, job_description_id)
);

-- Enable RLS
ALTER TABLE resume_job_matches ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own matches"
  ON resume_job_matches FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own matches"
  ON resume_job_matches FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own matches"
  ON resume_job_matches FOR DELETE USING (auth.uid() = user_id);

-- Create indexes
CREATE INDEX idx_matches_user_id ON resume_job_matches(user_id);
CREATE INDEX idx_matches_resume_id ON resume_job_matches(resume_id);
CREATE INDEX idx_matches_job_id ON resume_job_matches(job_description_id);
```

### 3. Cover Letters Table

```sql
-- Create cover_letters table
CREATE TABLE cover_letters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  resume_id UUID REFERENCES resumes(id) ON DELETE CASCADE,
  job_description_id UUID REFERENCES job_descriptions(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  title TEXT,
  content TEXT NOT NULL,
  tone TEXT DEFAULT 'professional', -- professional, enthusiastic, formal, creative
  status TEXT DEFAULT 'draft', -- draft, final
  word_count INTEGER
);

-- Enable RLS
ALTER TABLE cover_letters ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own cover letters"
  ON cover_letters FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own cover letters"
  ON cover_letters FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own cover letters"
  ON cover_letters FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own cover letters"
  ON cover_letters FOR DELETE USING (auth.uid() = user_id);

-- Create indexes
CREATE INDEX idx_cover_letters_user_id ON cover_letters(user_id);
CREATE INDEX idx_cover_letters_resume_id ON cover_letters(resume_id);
CREATE INDEX idx_cover_letters_job_id ON cover_letters(job_description_id);
```

### 4. Add Resume Tags/Versions Support

```sql
-- Add new columns to existing resumes table
ALTER TABLE resumes
  ADD COLUMN IF NOT EXISTS version_name TEXT,
  ADD COLUMN IF NOT EXISTS tags TEXT[],
  ADD COLUMN IF NOT EXISTS is_primary BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS parent_resume_id UUID REFERENCES resumes(id) ON DELETE SET NULL;

-- Create index for versions
CREATE INDEX IF NOT EXISTS idx_resumes_parent_id ON resumes(parent_resume_id);
CREATE INDEX IF NOT EXISTS idx_resumes_tags ON resumes USING GIN(tags);
```

### 5. Update Usage Tracking

```sql
-- Add new action types to usage_tracking
-- This table should already exist, just documenting new action types:
-- 'job_match_analysis' - When analyzing resume against job description
-- 'cover_letter_generation' - When generating cover letter
-- 'resume_version_created' - When creating new resume version
```

## After Running SQL

1. Verify all tables were created successfully
2. Check that RLS policies are enabled
3. Test insert permissions by trying to create a record

## TypeScript Types to Add

See `types/index.ts` for the corresponding TypeScript interfaces.
