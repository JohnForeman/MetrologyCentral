# Fix 404 Error - GitHub Pages Not Deploying

## Problem
DNS test is successful, but you're getting a 404 error when visiting the site. This means DNS is working, but GitHub Pages isn't building/deploying your site correctly.

## Quick Checklist

1. ✅ **DNS configured correctly** - You confirmed this
2. ❓ **GitHub Pages enabled?** - Need to verify
3. ❓ **Repository is public?** - Need to verify
4. ❓ **Source branch configured?** - Need to verify
5. ❓ **Build successful?** - Need to check Actions

## Step-by-Step Fix

### Step 1: Verify GitHub Pages Settings

1. Go to: https://github.com/JohnForeman/MetrologyCentral/settings/pages
2. Check these settings:

   **Source/Build:**
   - Should be: **"Deploy from a branch"**
   - Branch: **`main`**
   - Folder: **`/ (root)`**
   - Click **Save** if you made changes

   **Custom domain:**
   - Should show: **`metrologycentral.com`**
   - Should have a green checkmark ✅

3. If GitHub Pages shows **"Disabled"** or no source selected:
   - Select **"Deploy from a branch"**
   - Choose branch: **`main`**
   - Choose folder: **`/ (root)`**
   - Click **Save**

### Step 2: Verify Repository is Public

1. Go to: https://github.com/JohnForeman/MetrologyCentral/settings
2. Scroll down to **"Danger Zone"** or **"Change repository visibility"**
3. Make sure the repository is **Public** (not Private)
4. **Note:** Free GitHub accounts need public repos for GitHub Pages

### Step 3: Check GitHub Actions (Build Status)

1. Go to: https://github.com/JohnForeman/MetrologyCentral/actions
2. Look for recent workflow runs
3. **If you see failed builds:**
   - Click on the failed workflow
   - Check the error messages
   - Common issues:
     - Jekyll build errors
     - Plugin compatibility issues
     - Configuration errors

4. **If no Actions tab or no builds:**
   - GitHub Pages should auto-build when you push
   - Try making a small change and pushing to trigger a build

### Step 4: Force a Rebuild

If everything looks correct but site still shows 404:

1. **Make a small change to trigger rebuild:**
   ```bash
   # In your local repository
   git pull origin main  # Make sure you're up to date
   # Edit any file (like README.md) with a small change
   git add .
   git commit -m "Trigger GitHub Pages rebuild"
   git push origin main
   ```

2. **Or use GitHub web interface:**
   - Go to Settings → Pages
   - Click **Save** again (even if nothing changed)
   - This will trigger a rebuild

### Step 5: Check Jekyll Configuration

Verify your `_config.yml` is correct for GitHub Pages:

✅ **Should have:**
```yaml
url: https://metrologycentral.com
baseurl: ""
theme: minima
plugins:
  - jekyll-feed
  - jekyll-seo-tag
```

❌ **Common issues:**
- If `baseurl` is set to something other than `""`, it might cause 404s
- If `url` is wrong, links won't work correctly

### Step 6: Verify Required Files Exist

Make sure these files are in your repository root:

- ✅ `index.html` or `index.md` (you have this)
- ✅ `_config.yml` (you have this)
- ✅ `CNAME` (you have this)
- ✅ `Gemfile` (you have this)

### Step 7: Check for Build Errors

1. Go to: https://github.com/JohnForeman/MetrologyCentral/actions
2. Look for **"pages build and deployment"** workflow
3. **If it shows as failed:**
   - Click on it
   - Check the build log
   - Look for error messages

**Common build errors:**
- Plugin not supported by GitHub Pages
- Liquid syntax errors in templates
- Invalid YAML in front matter
- Theme compatibility issues

### Step 8: Wait for Deployment

After making changes:
- **Build time:** Usually 1-5 minutes
- **Deployment time:** Usually instant after build
- **Cache:** Browser cache might show old 404 - try incognito mode or hard refresh (Ctrl+F5)

### Step 9: Test Default GitHub Pages URL

1. Try accessing: `https://johnforeman.github.io/MetrologyCentral/`
2. **If this works but custom domain doesn't:**
   - Custom domain might not be fully configured
   - Wait a bit longer for DNS/SSL propagation
   - Check GitHub Pages settings again

3. **If this also shows 404:**
   - GitHub Pages isn't building the site
   - Go back to Steps 1-3 above

## Quick Fix: Re-enable GitHub Pages

If nothing works, try this:

1. Go to Settings → Pages
2. Under **Source**, change it to something else (like `gh-pages` branch if it exists)
3. Click **Save**
4. Wait a few seconds
5. Change it back to **`main`** branch, **`/ (root)`** folder
6. Click **Save**
7. This forces GitHub Pages to reinitialize

## Verify It's Working

After following the steps above:

1. **Wait 5-10 minutes** for build to complete
2. **Check Actions tab:**
   - Should show "pages build and deployment" as ✅ successful
3. **Try accessing:**
   - `https://johnforeman.github.io/MetrologyCentral/` (default URL)
   - `https://metrologycentral.com` (custom domain)
4. **Use incognito/private browsing mode** to avoid cache issues
5. **Hard refresh:** Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

## Common Issues and Solutions

### Issue: "Actions" tab doesn't exist or shows nothing

**Solution:**
- Make sure you're on the repository
- Actions might be disabled - enable it in Settings → Actions → General
- Free accounts might have Actions limited

### Issue: Build is failing

**Solution:**
- Check the build log for specific errors
- Common fix: Remove unsupported plugins from `_config.yml`
- Try simplifying `_config.yml` temporarily

### Issue: Site works at default URL but not custom domain

**Solution:**
- Custom domain DNS/SSL might still be propagating
- Wait 10-60 minutes
- Make sure CNAME file is in root directory
- Verify domain is set correctly in GitHub Pages settings

### Issue: Repository is private

**Solution:**
- GitHub Pages requires public repositories (on free plan)
- Make repository public in Settings → Danger Zone

## Summary

Most likely causes:
1. **GitHub Pages not enabled** - Enable in Settings → Pages
2. **Wrong source branch** - Should be `main` with `/ (root)` folder
3. **Repository is private** - Make it public
4. **Build failed** - Check Actions tab for errors
5. **Site not deployed yet** - Wait a few minutes after enabling

**Quick fix:** Go to Settings → Pages, verify Source is set to `main` branch, `/ (root)` folder, click Save, wait 5-10 minutes, then check again.

