#!/bin/bash

# Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo ""
    echo "🔗 Adding GitHub remote..."
    echo "Please enter your GitHub repository URL:"
    echo "Example: https://github.com/krish1700/Portfolio.git"
    read -p "URL: " repo_url
    git remote add origin "$repo_url"
    echo "✅ Remote added"
else
    echo "✅ Remote already configured"
fi

# Add all files
echo ""
echo "📁 Adding files to git..."
git add .

# Commit
echo ""
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update portfolio"
fi
git commit -m "$commit_msg"

# Push to GitHub
echo ""
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✨ Done! Your portfolio is being deployed."
echo "📍 Check the Actions tab on GitHub to see deployment progress"
echo "🌐 Your site will be live at: https://krish1700.github.io/Portfolio/"
echo ""
