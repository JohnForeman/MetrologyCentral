# Domain Setup Guide: metrologycentral.com → GitHub Pages

This guide will help you configure your GoDaddy domain (metrologycentral.com) to point to your GitHub Pages site.

## Prerequisites
✅ CNAME file already created in repository  
✅ _config.yml already configured with correct URL  
✅ Repository is public and GitHub Pages is enabled

## Step 1: Configure GitHub Pages Custom Domain

1. Go to your repository on GitHub: https://github.com/JohnForeman/MetrologyCentral
2. Navigate to **Settings** → **Pages** (in the left sidebar)
3. Under **Custom domain**, enter: `metrologycentral.com`
4. Click **Save**
5. GitHub will verify the domain (this may take a few minutes)
6. **Important**: Check the box for **"Enforce HTTPS"** (you'll be able to enable this after DNS propagates)

## Step 2: Configure DNS in GoDaddy

### Option A: Using A Records (Recommended for apex domain)

Apex domains (domain.com without www) work best with A records pointing to GitHub Pages IP addresses.

1. **Log in to GoDaddy** at https://dcc.godaddy.com/
2. Navigate to **My Products** → **DNS** (or click on your domain name)
3. Find the **DNS Management** section
4. You'll need to add/modify **A records**. Look for existing A records with "@" as the name

   **Add or update the following A records** (remove any conflicting A records first):
   
   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | A | @ | 185.199.108.153 | 600 |
   | A | @ | 185.199.109.153 | 600 |
   | A | @ | 185.199.110.153 | 600 |
   | A | @ | 185.199.111.153 | 600 |

5. **Save the changes**
6. Wait 10-60 minutes for DNS propagation

### Option B: Using CNAME (Alternative - only if A records don't work)

Some DNS providers support CNAME for apex domains. GoDaddy typically doesn't, but if you have this option:

1. In GoDaddy DNS Management
2. Create a **CNAME record**:
   - **Type**: CNAME
   - **Name**: @ (or leave blank)
   - **Value**: `johnforeman.github.io`
   - **TTL**: 600

### Option C: Using www subdomain (Always works)

If you want to use www.metrologycentral.com instead of or in addition to the apex domain:

1. In GoDaddy DNS Management
2. Create a **CNAME record**:
   - **Type**: CNAME
   - **Name**: www
   - **Value**: `johnforeman.github.io`
   - **TTL**: 600
3. Update CNAME file in your repository to include both domains (requires additional configuration)

**Recommendation**: Use Option A (A records) for the best compatibility.

## Step 3: Verify Configuration

After making DNS changes, verify everything is working:

1. **Check DNS Propagation** (wait 10-60 minutes after changes):
   - Visit https://dnschecker.org/
   - Enter `metrologycentral.com`
   - Select "A" record type
   - Verify it shows GitHub Pages IP addresses: 185.199.108.153, 185.199.109.153, etc.

2. **Check GitHub Pages**:
   - Go to Settings → Pages in your repository
   - Under Custom domain, you should see a green checkmark when DNS is configured correctly

3. **Test the Domain**:
   - Visit `http://metrologycentral.com` (may take up to 24 hours to fully propagate)
   - After DNS propagates, enable HTTPS in GitHub Pages settings

## Step 4: Enable HTTPS (After DNS Propagates)

1. Go to **Settings** → **Pages** in your GitHub repository
2. Check the box for **"Enforce HTTPS"**
3. This may take a few minutes to provision the SSL certificate

## Troubleshooting

### Domain not resolving?
- Wait up to 24-48 hours for full DNS propagation
- Verify A records are correct using https://dnschecker.org/
- Make sure you removed any conflicting DNS records

### GitHub Pages not detecting domain?
- Ensure CNAME file exists in the root of your repository
- Verify the domain in GitHub Settings → Pages matches exactly: `metrologycentral.com`
- Wait a few minutes for GitHub to verify DNS

### HTTPS not working?
- HTTPS can only be enabled after DNS fully propagates
- Make sure "Enforce HTTPS" is checked in GitHub Pages settings
- SSL certificate provisioning can take up to 24 hours

### Still having issues?
- Verify DNS records are correct
- Check GitHub Pages build status (Actions tab)
- Ensure repository is public
- Verify CNAME file is in the root directory

## Current Configuration Status

✅ **CNAME file**: Created with `metrologycentral.com`  
✅ **Jekyll config**: URL set to `https://metrologycentral.com`  
⏳ **DNS Records**: Need to be configured in GoDaddy (see Step 2 above)  
⏳ **GitHub Pages**: Need to add custom domain in repository settings (see Step 1 above)

## GoDaddy DNS Quick Reference

**What you need to add in GoDaddy:**
- **4 A Records** pointing `@` to GitHub Pages IP addresses
- These IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

**Where to find it in GoDaddy:**
1. Login → My Products
2. Click on your domain → DNS
3. Scroll to "DNS Records" section
4. Click "Add" to create new records

---

**Need help?** GitHub Pages documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

