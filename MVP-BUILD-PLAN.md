# 🚀 Resume Optimizer MVP - Build Plan

Complete implementation guide for building the Resume Optimizer product.

---

## 🎯 MVP Scope (What We're Building)

### Phase 1: Core Features (Weeks 1-2)

**Must-Have Features:**
1. ✅ Resume upload (PDF/DOCX/TXT)
2. ✅ Resume text extraction and parsing
3. ✅ AI analysis using Claude API
4. ✅ ATS compatibility score (0-100)
5. ✅ Keyword suggestions
6. ✅ Bullet point strength analysis
7. ✅ Results dashboard with actionable feedback
8. ✅ User authentication (email/password)

**Nice-to-Have (Phase 2):**
- Job description matching
- Cover letter generation
- Resume history/versions
- Payment integration
- Advanced analytics

---

## 🛠️ Tech Stack

```
Frontend:
├── Next.js 14 (App Router) - React framework
├── TypeScript - Type safety
├── Tailwind CSS - Styling (consistent with landing page)
└── Shadcn UI - Component library

Backend:
├── Next.js API Routes - Serverless functions
├── Claude API (Anthropic) - AI analysis
├── Supabase - Database + Auth
└── PDF/DOCX parsing libraries

File Processing:
├── pdf-parse - PDF text extraction
├── mammoth - DOCX text extraction
└── File upload handling

Deployment:
├── Vercel - Hosting
├── Supabase - Database
└── Environment variables for API keys
```

---

## 📋 Database Schema (Supabase)

### Table: `users`
Already handled by Supabase Auth

### Table: `resumes`
```sql
CREATE TABLE resumes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),

  -- Resume data
  original_filename TEXT NOT NULL,
  file_url TEXT,
  resume_text TEXT NOT NULL,

  -- Analysis results
  ats_score INTEGER,
  analysis_data JSONB,
  suggestions JSONB,

  -- Status
  status TEXT DEFAULT 'processing', -- processing, completed, failed

  -- Metadata
  word_count INTEGER,
  analyzed_at TIMESTAMPTZ
);

-- Add RLS policies
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own resumes"
  ON resumes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own resumes"
  ON resumes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own resumes"
  ON resumes FOR UPDATE
  USING (auth.uid() = user_id);
```

### Table: `usage_tracking`
```sql
CREATE TABLE usage_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now(),

  action TEXT NOT NULL, -- 'resume_upload', 'analysis', 'cover_letter'
  credits_used INTEGER DEFAULT 1,

  metadata JSONB
);
```

---

## 🏗️ Project Structure

```
resume-optimizer-app/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── upload/
│   │   │   └── page.tsx
│   │   ├── analyze/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   ├── upload/
│   │   │   └── route.ts
│   │   ├── analyze/
│   │   │   └── route.ts
│   │   └── resumes/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx (redirect to landing or dashboard)
├── components/
│   ├── ui/ (shadcn components)
│   ├── resume-upload.tsx
│   ├── analysis-results.tsx
│   ├── ats-score-card.tsx
│   └── suggestions-list.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   ├── claude/
│   │   └── analyzer.ts
│   ├── parsers/
│   │   ├── pdf.ts
│   │   ├── docx.ts
│   │   └── text.ts
│   └── utils.ts
├── types/
│   └── index.ts
├── public/
└── package.json
```

---

## 📝 Implementation Steps

### Week 1: Foundation

**Day 1-2: Project Setup**
```bash
# Create Next.js project
npx create-next-app@latest resume-optimizer-app --typescript --tailwind --app

# Install dependencies
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install @anthropic-ai/sdk
npm install pdf-parse mammoth
npm install @radix-ui/react-* (shadcn components)
npm install zod react-hook-form
```

**Configure:**
- Supabase client
- Environment variables
- Tailwind config
- TypeScript config

**Day 3-4: Authentication**
- Set up Supabase Auth
- Create login/signup pages
- Protected routes
- Session management

**Day 5: Database Setup**
- Create Supabase tables
- Set up RLS policies
- Test CRUD operations

**Day 6-7: File Upload**
- Resume upload component
- File validation (PDF/DOCX, max 5MB)
- Upload to Supabase Storage
- Parse resume text (PDF/DOCX)

### Week 2: AI Analysis

**Day 8-9: Claude Integration**
- Set up Anthropic SDK
- Create analysis prompts
- Test Claude API
- Handle errors/retries

**Day 10-11: Analysis Logic**
- ATS scoring algorithm
- Keyword extraction
- Bullet point analysis
- Format checking

**Day 12-13: Results Dashboard**
- Display ATS score
- Show suggestions
- Highlight issues
- Action items

**Day 14: Polish & Deploy**
- Error handling
- Loading states
- Responsive design
- Deploy to Vercel

---

## 🤖 Claude API Integration

### Analysis Prompt Template

```typescript
const RESUME_ANALYSIS_PROMPT = `
You are an expert resume analyzer and ATS (Applicant Tracking System) specialist.

Analyze the following resume and provide detailed feedback.

RESUME TEXT:
{resume_text}

Provide your analysis in the following JSON format:

{
  "ats_score": <number 0-100>,
  "overall_assessment": "<brief summary>",
  "strengths": [
    "<strength 1>",
    "<strength 2>",
    ...
  ],
  "weaknesses": [
    {
      "issue": "<description>",
      "severity": "high|medium|low",
      "suggestion": "<how to fix>"
    },
    ...
  ],
  "keyword_suggestions": [
    {
      "keyword": "<keyword>",
      "reason": "<why it's important>",
      "where_to_add": "<which section>"
    },
    ...
  ],
  "bullet_point_analysis": [
    {
      "original": "<original bullet point>",
      "improved": "<improved version>",
      "reason": "<why this is better>"
    },
    ...
  ],
  "formatting_issues": [
    "<issue 1>",
    "<issue 2>",
    ...
  ],
  "action_items": [
    {
      "priority": "high|medium|low",
      "action": "<what to do>",
      "impact": "<expected result>"
    },
    ...
  ]
}

Scoring criteria:
- ATS Compatibility (30%): Standard formatting, parseable content
- Keywords (25%): Industry-relevant terms, job-specific skills
- Impact (20%): Quantified achievements, strong action verbs
- Clarity (15%): Clear structure, easy to scan
- Completeness (10%): All relevant sections present

Be specific and actionable in your feedback.
`;
```

### API Implementation

```typescript
// lib/claude/analyzer.ts
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function analyzeResume(resumeText: string) {
  const prompt = RESUME_ANALYSIS_PROMPT.replace('{resume_text}', resumeText);

  const message = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 4096,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  const response = message.content[0];
  if (response.type === 'text') {
    const analysisData = JSON.parse(response.text);
    return analysisData;
  }

  throw new Error('Failed to analyze resume');
}
```

---

## 🎨 UI Components

### Resume Upload

```typescript
// components/resume-upload.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const { resumeId } = await res.json();

      // Redirect to analysis page
      router.push(`/analyze/${resumeId}`);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <form onSubmit={handleUpload}>
      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button type="submit" disabled={!file || uploading}>
        {uploading ? 'Uploading...' : 'Upload Resume'}
      </button>
    </form>
  );
}
```

### ATS Score Card

```typescript
// components/ats-score-card.tsx
interface ATSScoreCardProps {
  score: number;
}

export function ATSScoreCard({ score }: ATSScoreCardProps) {
  const getColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRating = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Needs Improvement';
    return 'Poor';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">ATS Compatibility Score</h2>
      <div className="flex items-center justify-center">
        <div className={`text-6xl font-bold ${getColor(score)}`}>
          {score}
        </div>
        <div className="text-3xl text-gray-400 ml-2">/100</div>
      </div>
      <div className="text-center mt-4">
        <span className="text-lg font-semibold">{getRating(score)}</span>
      </div>
      <div className="mt-4 bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${
            score >= 80 ? 'bg-green-600' :
            score >= 60 ? 'bg-yellow-600' :
            'bg-red-600'
          }`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
```

---

## 🔐 Environment Variables

```env
# .env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Anthropic Claude API
ANTHROPIC_API_KEY=sk-ant-api03-...

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📊 Pricing Strategy

### Free Tier
- 1 resume analysis
- See the potential
- No credit card required

### Pay-Per-Use
- $9.99 per resume analysis
- Includes full report
- Download optimized version

### Monthly Subscription
- $29/month - Unlimited analyses
- All features
- Priority support

---

## 🚀 Deployment Checklist

### Before Launch:
- [ ] Test all features thoroughly
- [ ] Add error handling everywhere
- [ ] Implement rate limiting
- [ ] Set up monitoring (Sentry/LogRocket)
- [ ] Test payment flow
- [ ] Mobile responsive check
- [ ] Performance optimization
- [ ] SEO meta tags
- [ ] Analytics setup

### Launch:
- [ ] Deploy to Vercel
- [ ] Update environment variables
- [ ] Test in production
- [ ] Email waitlist about beta access
- [ ] Monitor errors closely
- [ ] Gather user feedback

---

## 🎯 Success Metrics

### Week 1-2 (Beta):
- 10-20 beta users
- 50+ resume analyses
- < 5% error rate
- Positive feedback

### Month 1 (Launch):
- 100+ paid users
- $1,000+ revenue
- 90%+ satisfaction
- Key features working smoothly

---

## 💡 Development Tips

**Best Practices:**
1. Start simple, add complexity later
2. Test with real resumes early
3. Get feedback from beta users
4. Monitor Claude API costs
5. Optimize prompts for accuracy
6. Handle edge cases gracefully

**Common Pitfalls:**
- Over-engineering early
- Ignoring mobile users
- Poor error messages
- Slow loading times
- Complicated UI

---

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Claude API**: https://docs.anthropic.com
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Shadcn UI**: https://ui.shadcn.com

---

**Ready to build?** Let's start with project setup! 🚀
