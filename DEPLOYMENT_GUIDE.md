# 🚀 GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer
- Your portfolio code ready

## Step-by-Step Deployment Instructions

### 1️⃣ Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository settings:
   - **Repository name**: `Portfolio` (or any name you prefer)
   - **Description**: "My Data Engineer Portfolio"
   - **Visibility**: Public
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

### 2️⃣ Initialize Git and Push Code

Open your terminal in the Portfolio folder and run these commands:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/krish1700/Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. That's it! The workflow will automatically deploy your site

### 4️⃣ Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live!

### 5️⃣ Access Your Portfolio

Your portfolio will be available at:
```
https://krish1700.github.io/Portfolio/
```

## 📝 Making Updates

Whenever you want to update your portfolio:

```bash
# Make your changes to the code
# Then commit and push:

git add .
git commit -m "Update portfolio content"
git push
```

The GitHub Action will automatically rebuild and redeploy your site!

## 🔧 Configuration Files Already Set Up

✅ **vite.config.js** - Configured with base path `/Portfolio/`
✅ **package.json** - Has deploy scripts ready
✅ **.github/workflows/deploy.yml** - GitHub Actions workflow configured
✅ **gh-pages** package installed

## 🎯 Important Notes

1. **Repository Name**: If you use a different repository name, update the `base` in `vite.config.js`:
   ```javascript
   base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '/',
   ```

2. **Resume File**: Make sure to add your `Resume_KrishPatil.pdf` to the `public` folder before deploying

3. **First Deployment**: The first deployment might take 5-10 minutes

## 🐛 Troubleshooting

### If the site doesn't load:
- Check the Actions tab for any errors
- Verify GitHub Pages is enabled in Settings → Pages
- Make sure the repository is public
- Wait a few minutes and refresh

### If styles are broken:
- Check that the `base` path in `vite.config.js` matches your repository name
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 🎉 Success!

Once deployed, share your portfolio:
- Add the link to your resume
- Share on LinkedIn
- Include in job applications

Your portfolio URL: `https://krish1700.github.io/Portfolio/`
