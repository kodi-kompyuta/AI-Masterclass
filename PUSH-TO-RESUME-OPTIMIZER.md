# 📤 Push Landing Page to resume-optimizer Repo

## Quick Instructions

You have the landing page files in `AI-Masterclass` repo, but need them in your `resume-optimizer` repo for deployment.

---

## Option 1: Manual Copy (Simplest - 2 minutes)

**Step 1: Download these files from AI-Masterclass repo:**
- `landing.html`
- `vercel.json`
- `DEPLOYMENT-GUIDE.md`

**Step 2: In your local machine or GitHub web:**

1. Go to: https://github.com/kodi-kompyuta/resume-optimizer
2. Click "Add file" → "Upload files"
3. Drag and drop the 3 files
4. Add commit message: "feat: Add landing page"
5. Click "Commit changes"

**Done!** Your resume-optimizer repo now has the landing page.

---

## Option 2: Git Commands (If you have both repos locally)

```bash
# Navigate to AI-Masterclass
cd /path/to/AI-Masterclass

# Copy files to resume-optimizer repo
cp landing.html ../resume-optimizer/
cp vercel.json ../resume-optimizer/
cp DEPLOYMENT-GUIDE.md ../resume-optimizer/

# Navigate to resume-optimizer
cd ../resume-optimizer

# Create README
cat > README.md << 'EOF'
# Resume Optimizer

AI-powered resume optimization tool.

Live site: https://resume-optimizer.vercel.app

See DEPLOYMENT-GUIDE.md for setup instructions.
EOF

# Commit and push
git add .
git commit -m "feat: Add landing page with Vercel config"
git push origin main
```

---

## Option 3: Push from Current Branch (Advanced)

If you want to push directly from the AI-Masterclass branch to resume-optimizer repo:

```bash
# In AI-Masterclass directory
cd /home/user/AI-Masterclass

# Add resume-optimizer as a remote
git remote add resume-optimizer https://github.com/kodi-kompyuta/resume-optimizer.git

# Create a temporary branch with only the landing page files
git checkout --orphan temp-deploy
git rm -rf .
git checkout claude/credits-usage-guide-011CV3iLxzxna6P25WVm6Qsc -- landing.html vercel.json DEPLOYMENT-GUIDE.md

# Add README
cat > README.md << 'EOF'
# Resume Optimizer
Live: https://resume-optimizer.vercel.app
EOF

git add .
git commit -m "feat: Add landing page for Resume Optimizer"

# Push to resume-optimizer repo
git push resume-optimizer temp-deploy:main --force

# Return to your original branch
git checkout claude/credits-usage-guide-011CV3iLxzxna6P25WVm6Qsc
git branch -D temp-deploy
```

---

## After Pushing

Once files are in `resume-optimizer` repo:

1. **Go to Vercel**: https://vercel.com/new
2. **Import** `kodi-kompyuta/resume-optimizer` repo
3. **Set Project Name** to: `resume-optimizer`
4. **Deploy** - that's it!

Your landing page will be live at: **https://resume-optimizer.vercel.app** 🎉

---

## Quick Checklist

- [ ] Files are in resume-optimizer repo
- [ ] vercel.json is included (for routing)
- [ ] Deploy on Vercel with correct project name
- [ ] Test live URL
- [ ] Start collecting emails!

---

Need help? The files you need are ready in:
- `/home/user/AI-Masterclass/landing.html`
- `/home/user/AI-Masterclass/vercel.json`
- `/home/user/AI-Masterclass/DEPLOYMENT-GUIDE.md`
