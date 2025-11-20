# Fix: NotServedByPagesError - Domain Not Resolving to GitHub Pages

## Current Error
"Both metrologycentral.com and its alternate name are improperly configured"
"Domain does not resolve to the GitHub Pages server"

This means your DNS records are not correctly pointing to GitHub Pages.

## Solution: Configure A Records in GoDaddy

You need **4 A records** pointing your apex domain (`metrologycentral.com`) to GitHub Pages IP addresses.

### Step 1: Log in to GoDaddy DNS

1. Go to https://dcc.godaddy.com/
2. Log in with your GoDaddy account
3. Click **My Products**
4. Click on your domain **metrologycentral.com**
5. Click the **DNS** tab (or **Manage DNS**)

### Step 2: Check Current DNS Records

1. Scroll down to **DNS Records** section
2. Look for records with **Name** = `@` (or blank/empty)

**Current Status:**
- Do you have any A records for `@`?
- What values do they point to?
- Do you have any conflicting records?

### Step 3: Add/Update A Records for GitHub Pages

You need **exactly 4 A records** for the apex domain. Here's what to do:

#### Option A: If you have NO A records yet

**Add 4 new A records:**

1. Click the **Add** button
2. For each record, fill in:
   - **Type**: Select `A`
   - **Name**: Enter `@` (or leave blank if GoDaddy doesn't allow @)
   - **Value**: Enter one of these IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **TTL**: `600` (or use default)
3. Click **Save**
4. Repeat this process **4 times** - once for each IP address

**Result:** You should have 4 separate A records, all with Name `@`, but different IP addresses.

#### Option B: If you have existing A records

1. **Check what IP addresses they point to:**
   - They should point to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   
2. **If they point to different IPs:**
   - Delete the old A records
   - Add the 4 new A records as described in Option A above

3. **If some are missing:**
   - Keep the correct ones
   - Add the missing ones

### Step 4: Remove Conflicting Records

**Make sure you DON'T have:**
- ❌ CNAME records with Name `@` (conflicts with A records)
- ❌ A records pointing to wrong IPs
- ❌ Any other conflicting records for the apex domain

**Remove any CNAME records for `@`:**
- If you see a CNAME record with Name `@`, delete it
- Apex domains should use A records, not CNAME

### Step 5: Remove www Records (If You Don't Want www)

1. Find any records with **Name** = `www`
2. Delete ALL of them:
   - Delete CNAME records for www
   - Delete A records for www

### Step 6: Final DNS Records Checklist

Your DNS should look like this:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**That's it!** No other records for `@` or `www` (unless you want www).

### Step 7: Verify in GoDaddy

After making changes:
1. Scroll through your DNS records
2. Make sure you have exactly 4 A records with Name `@`
3. Make sure all 4 point to the GitHub Pages IPs listed above
4. Make sure you don't have any CNAME records with Name `@`

### Step 8: Wait for DNS Propagation

1. **DNS changes take 10 minutes to 24 hours** to propagate
2. Usually takes **30-60 minutes**
3. **Don't check immediately** - wait at least 10 minutes

### Step 9: Verify DNS is Working

After waiting 10-60 minutes, verify your DNS:

1. **Check DNS propagation:**
   - Go to https://dnschecker.org/
   - Enter `metrologycentral.com`
   - Select **A** record type
   - Click **Search**
   - **Expected result:** Should show the 4 GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

2. **If it shows different IPs or nothing:**
   - Go back to GoDaddy and verify your records are correct
   - Make sure you clicked "Save" after each change
   - Wait longer (can take up to 24 hours)

3. **Check GitHub Pages:**
   - Go to: https://github.com/JohnForeman/MetrologyCentral/settings/pages
   - Click **Check again** button
   - After DNS propagates, you should see:
     - ✅ Green checkmark
     - ✅ "DNS check successful"
     - ✅ No error messages

### Step 10: Enable HTTPS (After DNS Works)

Once GitHub Pages shows the domain is configured correctly:

1. Go to Settings → Pages
2. Check the box for **"Enforce HTTPS"**
3. Wait a few minutes for SSL certificate to provision
4. Your site will be available at `https://metrologycentral.com`

## Common Issues

### Issue: "Can't add multiple A records with same name"

**Solution:** Some DNS interfaces require adding them one at a time. Just add each of the 4 A records separately - they're all allowed to have the same name (`@`).

### Issue: "GoDaddy doesn't allow @ as name"

**Solution:** In some GoDaddy interfaces, you leave the Name field **blank** or **empty** for the apex domain. Try leaving it blank.

### Issue: "DNS still not working after 24 hours"

**Solution:**
- Double-check all 4 A records are correct
- Make sure you saved all changes
- Verify your domain is using GoDaddy's nameservers (check Nameservers section)
- Contact GoDaddy support if nameservers are incorrect

### Issue: "GitHub still shows error after DNS is correct"

**Solution:**
- Click **"Remove"** button in GitHub Pages settings
- Wait 5 minutes
- Re-enter `metrologycentral.com` and click **"Save"**
- Click **"Check again"** after a few minutes

## Quick Checklist

- [ ] Logged into GoDaddy DNS Management
- [ ] Removed any CNAME records for `@`
- [ ] Added 4 A records: `@` → `185.199.108.153`
- [ ] Added 4 A records: `@` → `185.199.109.153`
- [ ] Added 4 A records: `@` → `185.199.110.153`
- [ ] Added 4 A records: `@` → `185.199.111.153`
- [ ] Removed any www records (if not wanted)
- [ ] Verified exactly 4 A records exist for `@`
- [ ] Saved all changes in GoDaddy
- [ ] Waited 10-60 minutes for DNS propagation
- [ ] Checked DNS at dnschecker.org - shows correct IPs
- [ ] Checked GitHub Pages settings - shows green checkmark
- [ ] Enabled HTTPS in GitHub Pages settings

Once you complete these steps and wait for DNS propagation, your site should work at `https://metrologycentral.com`!

