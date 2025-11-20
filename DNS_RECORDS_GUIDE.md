# GoDaddy DNS Records Guide - What to Keep and Remove

When setting up GitHub Pages, you'll see various DNS records that GoDaddy added. Here's what to do with each type.

## Records You MUST Have for GitHub Pages

### Required: 4 A Records for Apex Domain

**You NEED these 4 A records:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**Action:** 
- If you don't have these, ADD them
- If you have A records for `@` pointing to OTHER IPs, UPDATE them to the GitHub Pages IPs above
- If you have MORE than 4 A records for `@`, remove the extras

---

## Records to REMOVE (Conflict with GitHub Pages)

### ❌ Remove: A Records Pointing to Wrong IPs

**If you see A records like:**
- A | @ | 50.63.202.xxx (GoDaddy default/parking IP)
- A | @ | Any other IP that's NOT the 4 GitHub Pages IPs listed above

**Action:** DELETE these - they conflict with GitHub Pages

### ❌ Remove: CNAME Records for Apex Domain (@)

**If you see:**
- CNAME | @ | anything
- CNAME | (blank) | anything

**Action:** DELETE these - apex domains must use A records, not CNAME

**Exception:** CNAME for `www` is OK if you want www to work (see below)

### ❌ Remove: www Records (If You Don't Want www)

**If you see:**
- CNAME | www | anything
- A | www | anything

**And you DON'T want www:**
- **Action:** DELETE all www records

**If you DO want www to work:**
- Keep CNAME | www | johnforeman.github.io
- Remove A | www | anything

---

## Records to KEEP (Safe to Leave Alone)

### ✅ Keep: Email Records (MX)

**If you see MX records like:**
- MX | @ | mail.xxx.com | Priority: 10
- MX | @ | mailstore1.secureserver.net

**Action:** KEEP these - they're for email service

**Note:** If you use email with your domain (like name@metrologycentral.com), you need these. If you don't use email, you can remove them, but it's safer to keep them in case you want email later.

### ✅ Keep: Email Verification (TXT)

**If you see TXT records like:**
- TXT | @ | "v=spf1 ..." (SPF record for email)
- TXT | @ | "google-site-verification=xxx"
- TXT | @ | "ms=ms12345678" (Microsoft/Office 365)

**Action:** KEEP these - they're for email security and verification

### ✅ Keep: DKIM Records (TXT)

**If you see TXT records with:**
- "default._domainkey"
- "selector1._domainkey"

**Action:** KEEP these if you use email service

### ✅ Keep: DMARC Records (TXT)

**If you see:**
- TXT | _dmarc | "v=DMARC1..."

**Action:** KEEP if you use email

### ✅ Keep: Domain Verification (TXT)

**If you see TXT records for:**
- Google Workspace verification
- Microsoft verification
- Other service verifications

**Action:** KEEP if you use those services

### ✅ Keep: CAA Records

**If you see:**
- CAA | @ | records

**Action:** KEEP - these are for SSL certificate security

### ✅ Keep: NS Records (Nameservers)

**If you see:**
- NS | @ | ns43.domaincontrol.com
- NS | @ | ns44.domaincontrol.com

**Action:** KEEP these - they're required for DNS to work

---

## Records to UPDATE (If Present)

### ⚠️ Update: www CNAME (If You Want www)

**If you want BOTH www and apex to work:**

**Current (if exists):**
- CNAME | www | (wrong value)

**Change to:**
- CNAME | www | johnforeman.github.io | TTL: 600

**Action:** 
- If www CNAME exists but points to wrong value, UPDATE it
- If you don't want www, DELETE it
- If it doesn't exist and you want www, ADD it

---

## What Your DNS Should Look Like

### If You DON'T Want www (Apex Only):

| Type | Name | Value | Action |
|------|------|-------|--------|
| A | @ | 185.199.108.153 | ✅ KEEP (or add) |
| A | @ | 185.199.109.153 | ✅ KEEP (or add) |
| A | @ | 185.199.110.153 | ✅ KEEP (or add) |
| A | @ | 185.199.111.153 | ✅ KEEP (or add) |
| MX | @ | (email servers) | ✅ KEEP if using email |
| TXT | @ | (email/verification) | ✅ KEEP if using email |
| NS | @ | (nameservers) | ✅ KEEP (required) |
| CAA | @ | (certificate auth) | ✅ KEEP (optional but safe) |

**Should NOT have:**
- ❌ CNAME | @ | anything
- ❌ A | @ | (wrong IPs)
- ❌ www | (anything)

### If You DO Want www:

Same as above, PLUS:
- CNAME | www | johnforeman.github.io | ✅ ADD/UPDATE

---

## Step-by-Step: Reviewing Your Current DNS

### Step 1: Log in to GoDaddy DNS

1. Go to https://dcc.godaddy.com/
2. Log in → My Products → Click domain → DNS

### Step 2: Review Each Record Type

Go through your DNS records and categorize them:

**For A Records:**
- ✅ Keep if: Name = `@` AND Value = one of the 4 GitHub Pages IPs
- ❌ Delete if: Name = `@` AND Value = any other IP
- ❌ Delete if: Name = `www` (if you don't want www)
- ✅ Keep if: Name = something else (rare, but check first)

**For CNAME Records:**
- ❌ Delete if: Name = `@` or blank
- ⚠️ Update if: Name = `www` and Value ≠ `johnforeman.github.io`
- ❌ Delete if: Name = `www` and you don't want www
- ✅ Keep if: Name = something else (verify what it's for)

**For MX Records:**
- ✅ Keep all - needed for email

**For TXT Records:**
- ✅ Keep all - needed for email verification and security

**For NS Records:**
- ✅ Keep all - required for DNS

**For CAA Records:**
- ✅ Keep all - good for SSL security

### Step 3: Make Changes

1. **Add** the 4 required A records for GitHub Pages (if missing)
2. **Update** any A records for `@` to point to GitHub Pages IPs
3. **Delete** conflicting CNAME records for `@`
4. **Delete or Update** www records based on your preference
5. **Keep** all email, verification, and nameserver records

### Step 4: Verify

After making changes, verify you have:
- ✅ Exactly 4 A records for `@` with GitHub Pages IPs
- ✅ No CNAME records for `@`
- ✅ MX/TXT records still present (if using email)
- ✅ www records configured correctly (or removed)

---

## Common GoDaddy Default Records

GoDaddy often adds these by default:

| Type | Name | Typical Value | Action |
|------|------|---------------|--------|
| A | @ | 50.63.202.xxx | ❌ DELETE - replace with GitHub IPs |
| CNAME | www | @ | ⚠️ UPDATE to johnforeman.github.io |
| MX | @ | mail servers | ✅ KEEP if using email |
| TXT | @ | SPF/DKIM records | ✅ KEEP if using email |

---

## Quick Decision Guide

**Ask yourself:**

1. **Do I use email with this domain?** (name@metrologycentral.com)
   - Yes → Keep all MX and TXT records
   - No → You can remove them, but safer to keep

2. **Do I want www.metrologycentral.com to work?**
   - Yes → Add/Update CNAME | www | johnforeman.github.io
   - No → Delete all www records

3. **Do I have A records for @ pointing to non-GitHub IPs?**
   - Yes → DELETE them, add the 4 GitHub Pages A records instead
   - No → Make sure you have the 4 GitHub Pages A records

---

## Summary Checklist

- [ ] Review all existing DNS records in GoDaddy
- [ ] DELETE any A records for `@` pointing to wrong IPs
- [ ] ADD/UPDATE 4 A records for `@` pointing to GitHub Pages IPs
- [ ] DELETE any CNAME records for `@`
- [ ] DELETE www records if you don't want www
- [ ] UPDATE www CNAME to johnforeman.github.io if you want www
- [ ] KEEP all MX records (email)
- [ ] KEEP all TXT records (email/verification)
- [ ] KEEP all NS records (nameservers)
- [ ] SAVE all changes
- [ ] Wait 10-60 minutes for DNS propagation
- [ ] Verify at dnschecker.org

This guide will help you safely configure your DNS without breaking email or other services!

