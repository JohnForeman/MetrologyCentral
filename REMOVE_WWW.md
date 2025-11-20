# Remove www Subdomain - GoDaddy DNS Configuration

This guide will help you configure your GoDaddy DNS to use **ONLY** `metrologycentral.com` (no www).

## Step-by-Step Instructions for GoDaddy

### Step 1: Log in to GoDaddy

1. Go to https://dcc.godaddy.com/
2. Log in with your GoDaddy account
3. Click **My Products**
4. Find your domain `metrologycentral.com` and click on it
5. Click on the **DNS** tab (or **Manage DNS**)

### Step 2: Remove www DNS Records

1. Scroll down to the **DNS Records** section
2. Look for any records with **Name** = `www`
   - These could be **CNAME** records
   - These could be **A** records
   - There might be multiple www records

3. **For each www record found:**
   - Click the **three dots** (⋮) on the right side of the record
   - Click **Delete**
   - Confirm the deletion

4. **Important**: Delete ALL records with name `www`
   - You want ZERO www records in your DNS

### Step 3: Verify A Records for Apex Domain

Make sure you have these **4 A records** for the apex domain (`@`):

1. Look for records with **Name** = `@` (or blank/empty)
2. You should see **4 A records** with these values:
   - **A** | **Name: @** | **Value: 185.199.108.153** | **TTL: 600**
   - **A** | **Name: @** | **Value: 185.199.109.153** | **TTL: 600**
   - **A** | **Name: @** | **Value: 185.199.110.153** | **TTL: 600**
   - **A** | **Name: @** | **Value: 185.199.111.153** | **TTL: 600**

3. **If you don't have these A records, add them:**
   - Click **Add** button
   - Select **Type: A**
   - Enter **Name: @** (or leave blank if that's how GoDaddy shows it)
   - Enter **Value:** One of the IP addresses above
   - Enter **TTL: 600**
   - Click **Save**
   - Repeat for all 4 IP addresses

### Step 4: Verify GitHub Pages Settings

1. Go to: https://github.com/JohnForeman/MetrologyCentral/settings/pages
2. Under **Custom domain**, make sure it says exactly: `metrologycentral.com`
   - **NOT** `www.metrologycentral.com`
   - **NOT** `http://metrologycentral.com`
   - Just: `metrologycentral.com`
3. Click **Save** if you made any changes

### Step 5: Wait for DNS Propagation

1. **DNS changes take 10 minutes to 24 hours** to fully propagate
2. Usually takes about 30-60 minutes
3. After making changes, wait at least 10 minutes before checking

### Step 6: Verify Everything is Working

1. **Check DNS records** (after waiting 10+ minutes):
   - Go to https://dnschecker.org/
   - Enter `metrologycentral.com`
   - Select **A** record type
   - Click "Search"
   - Verify it shows the 4 GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

2. **Check www subdomain** (should NOT resolve):
   - Go to https://dnschecker.org/
   - Enter `www.metrologycentral.com`
   - Select **CNAME** or **A** record type
   - It should show "not found" or no records

3. **Check GitHub Pages status**:
   - Go to Settings → Pages
   - Under Custom domain, you should see:
     - Domain: `metrologycentral.com`
     - A green checkmark ✅ (once DNS propagates)
     - No errors about www subdomain

## What Your DNS Should Look Like

**✅ CORRECT - What you want:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**❌ WRONG - What you DON'T want:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | anything | - |
| A | www | anything | - |

## Troubleshooting

### Still seeing the error in GitHub?
- Wait longer (up to 24 hours for full DNS propagation)
- Double-check you deleted ALL www records
- Make sure you clicked "Save" after deleting records
- Clear your browser cache and check GitHub Pages settings again

### Can't find DNS records in GoDaddy?
- Make sure you're in the **DNS** or **Manage DNS** section
- Some domains have DNS managed elsewhere - check if your domain uses GoDaddy's nameservers
- Look for "Nameservers" section - should show GoDaddy nameservers like:
  - `ns43.domaincontrol.com`
  - `ns44.domaincontrol.com`

### www subdomain still resolving?
- It may take up to 48 hours for DNS changes to fully propagate globally
- Check https://dnschecker.org/ from different locations
- Contact GoDaddy support if www records persist after 24 hours

## Quick Checklist

- [ ] Logged into GoDaddy
- [ ] Navigated to DNS Management for metrologycentral.com
- [ ] Deleted ALL records with name `www`
- [ ] Verified 4 A records exist for `@` with GitHub Pages IPs
- [ ] Verified GitHub Pages custom domain is set to `metrologycentral.com` (no www)
- [ ] Waited 10-60 minutes for DNS propagation
- [ ] Checked DNS propagation using dnschecker.org
- [ ] Verified no www records exist in DNS check

Once you complete these steps and wait for propagation, the error should disappear!

