# Fix for GitHub Pages DNS Error: InvalidCNAMEError

## Problem
GitHub Pages detected `www.metrologycentral.com` in your DNS, but it doesn't have a correct CNAME record pointing to `johnforeman.github.io`.

## Solution: Configure www subdomain OR remove it

You have two options:

---

## Option 1: Support BOTH www and apex domain (Recommended)

**Use BOTH `www.metrologycentral.com` AND `metrologycentral.com`**

### Step 1: Configure www in GoDaddy DNS

1. **Log in to GoDaddy** → **My Products** → Click your domain → **DNS**
2. **Add a CNAME record for www:**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value**: `johnforeman.github.io`
   - **TTL**: `600`
   - Click **Save**

3. **Verify A records for apex domain (@):**
   - You should have 4 A records with name `@` pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

### Step 2: Update GitHub Pages Settings

1. Go to: https://github.com/JohnForeman/MetrologyCentral/settings/pages
2. Under **Custom domain**, enter: `metrologycentral.com`
3. Click **Save**
4. GitHub will verify both domains (www and apex)

### Result
- ✅ `https://metrologycentral.com` will work
- ✅ `https://www.metrologycentral.com` will redirect to apex domain

---

## Option 2: Remove www (Use ONLY apex domain)

**Use ONLY `metrologycentral.com` (no www)**

### Step 1: Remove www DNS records in GoDaddy

1. **Log in to GoDaddy** → **My Products** → Click your domain → **DNS**
2. **Find and DELETE any records with name `www`:**
   - Look for CNAME records with name `www`
   - Look for A records with name `www`
   - Delete all of them

3. **Verify A records for apex domain (@):**
   - Ensure you have 4 A records with name `@`:
     - A | @ | 185.199.108.153
     - A | @ | 185.199.109.153
     - A | @ | 185.199.110.153
     - A | @ | 185.199.111.153

### Step 2: Verify GitHub Pages Settings

1. Go to: https://github.com/JohnForeman/MetrologyCentral/settings/pages
2. Under **Custom domain**, make sure it says: `metrologycentral.com` (NOT www.metrologycentral.com)
3. Click **Save**

---

## Current Configuration Status

✅ **CNAME file**: Contains `metrologycentral.com` (correct)  
✅ **_config.yml**: URL set to `https://metrologycentral.com` (correct)  
⏳ **GoDaddy DNS**: Needs www CNAME record added OR www records removed  
⏳ **GitHub Pages**: Need to verify custom domain is set correctly

---

## Recommended: Option 1 (Support both domains)

**Why?** It's better to support both www and apex so users can access your site either way.

**What to do in GoDaddy:**
1. Add: `CNAME | www | johnforeman.github.io`
2. Keep existing: `4x A | @ | (GitHub IPs)`

**What to do in GitHub:**
1. Settings → Pages → Custom domain: `metrologycentral.com`
2. Save

**Wait 10-60 minutes** for DNS to propagate, then the error should disappear.

---

## Verify Configuration

After making changes:

1. **Check DNS propagation**: https://dnschecker.org/
   - Check A records for `metrologycentral.com`
   - Check CNAME records for `www.metrologycentral.com` (if using Option 1)

2. **Check GitHub Pages status**:
   - Go to Settings → Pages
   - You should see green checkmarks once DNS propagates

3. **Test your domain**:
   - Visit `http://metrologycentral.com`
   - If using Option 1, also visit `http://www.metrologycentral.com`
