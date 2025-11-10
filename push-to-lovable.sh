#!/bin/bash
# Script to push AI Masterclass code to Lovable

echo "🚀 Pushing AI Masterclass to Lovable..."
echo ""

# Add Lovable repository as remote (if not already added)
if git remote | grep -q "lovable"; then
    echo "✓ Lovable remote already exists"
else
    echo "Adding Lovable remote..."
    git remote add lovable https://github.com/kodi-kompyuta/AI_Masterclass-mhpdwgmjivxblluiodra.git
fi

echo ""
echo "Pushing code to Lovable..."
echo "This will overwrite the starter code Lovable created."
echo ""

# Push current branch to main on Lovable repo
git push lovable claude/export-code-help-011CUtFFCYTCLgVzvhSaDrG8:main --force

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Your AI Masterclass is now in Lovable!"
    echo ""
    echo "Next steps:"
    echo "1. Go to lovable.dev and open your project"
    echo "2. Refresh the page"
    echo "3. You should see all your AI Masterclass files!"
    echo ""
else
    echo ""
    echo "❌ Push failed. This might be because:"
    echo "1. You need to authenticate with GitHub"
    echo "2. The repository name might be different"
    echo ""
    echo "Try running this command manually:"
    echo "git push lovable claude/export-code-help-011CUtFFCYTCLgVzvhSaDrG8:main --force"
fi
