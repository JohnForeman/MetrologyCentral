---
layout: post
title: >-
  Getting Correlation Right: How to Validate New CMM Technology Without Falling
  Into Common Traps
date: '2025-11-25'
author: John Foreman
categories:
  - Metrology
  - CMM Programming
  - Quality Systems
  - Inspection & Measurement
  - Measurement Systems Analysis
  - Digital Inspection
  - Manufacturing Quality
  - Engineering Processes
tags:
  - CMM Correlation
  - Measurement System Stability
  - PT Ratio
  - MSA
  - Dimensional Metrology
  - CMM Software
  - Datum Reference Frames
  - Fitting Algorithms
  - Form Tolerances
  - Analog Scanning
  - Laser Scanning
---
Integrating new measurement technology into an existing quality workflow is one of the most deceptively complex tasks in dimensional metrology. Whether you’re upgrading your CMM software, moving to a new platform entirely, or simply installing a modern release after years of static processes, stakeholders will always expect one thing:

**Proof that the new system performs at least as well as the old one.**

That expectation is fair — but most organizations approach correlation incorrectly, creating unnecessary conflict, wasted time, and false failures.

This article walks through a robust, proven methodology for correlating legacy and new CMM systems while avoiding the traps that sabotage most correlation attempts.  

---

## Why the Typical “Run It Once” Correlation Fails

Most correlation attempts follow this pattern:

1. Run the part on the legacy system.
2. Run the same program on the new system.
3. Compare the results.
4. Decide whether they match within some arbitrary tolerance band.

This looks logical — but it almost always produces misleading conclusions.

The fundamental flaw is the assumption that:

**“The legacy system is correct.”**

Just because a system has been used for years (or decades) does **not** mean it is currently accurate, stable, or fit for use as a benchmark.  
Issues such as linearity drift, squareness changes, probe calibration degradation, or outdated program logic can all create false baselines.

Before correlating against a legacy system, you must first prove that the legacy system is stable.

---

## Step 1: Validate the Legacy System Before Any Correlation

### ✔ Verify Machine Accuracy
Check:
- Linear accuracy  
- Squareness  
- Ball-bar performance  
- Machine check gauges  
- Calibration dates  

A legacy CMM nearing its next calibration cycle may have drifted significantly — dangerous if you’re comparing against a freshly calibrated machine.

### ✔ Verify Program Stability (PT Ratio Study)

Stability of the inspection program itself is **critical**.

Run a **PT Ratio / repeatability study**:
- Target **10 repeated runs** minimum  
- Analyze using SPC tools  
- Flag any feature consuming **>10% of tolerance**  
- Examine **range charts**, not just tolerance %  

PT Ratio hides instability when tolerances are large.  
Range charts reveal it.

### ✔ The “Bump Test”
After each run, **move the part slightly**.

This forces alignment routines to start from a different location and exposes hidden mathematical or logic sensitivity in the program.

If the legacy system cannot repeat reliably, it cannot serve as the baseline for correlation.

---

## Step 2: Validate the New System Using the Same Method

After confirming the legacy system’s stability, repeat the same PT Ratio and bump-test evaluation on the new system.

Only when *both* systems are stable can you begin a meaningful comparison.

---

## Step 3: Perform a Proper Correlation Using Statistics — Not One-Off Values

Once both systems have validated datasets, correlation becomes a matter of comparing **averages** (and variation), not single-run values.

Use any SPC or statistical tool to:
- Compare means  
- Compare variation  
- Identify statistically significant mismatches  

You can even use AI to automatically highlight mismatches between the two datasets and filter out everything that *does* match.

This avoids the “whack-a-mole” effect where chasing single-run anomalies leads to confusion and misdiagnosis.

---

## Why Upgraded Software Often Produces New Mismatches

Upgrading CMM software — especially after many years — often introduces:

- New fitting algorithms  
- Proper geometric methods  
- More robust DRF construction  
- Improved form evaluation tools  
- Better filters and outlier handling  

A classic example:

**Legacy system:** calculates circles using *least squares*  
**New system:** defaults to *max inscribed* or *min circumscribed*

Result:  
Every diameter in the correlation may fail, not because the system is wrong — but because the algorithms differ.

### Solution:
**Temporarily “dumb down” the new system** to match the legacy math.  
Once correlation is proven, re-enable the improved logic.

---

## The Hardest Correlation Challenges: Form Tolerances

Flatness, straightness, roundness, and profile are highly sensitive to:
- Point density  
- Scanning speed  
- Filters  
- Fit methods  
- Probe type (TP vs analog vs laser)  

Legacy systems often used primitive methods or shortcuts that hid true variation.

During correlation, these limitations surface as large discrepancies — sometimes revealing issues that have existed for decades.

---

## When Correlation Reveals You've Been “Wrong” for Years

Occasionally, correlation uncovers that a legacy system has been producing biased or incorrect results for a very long time — yet production still “worked” because downstream processes unknowingly compensated.

Typical reactions:
- “If it was wrong, how did the parts assemble?”  
- “Why didn’t we catch this earlier?”  
- “This explains the chronic issue we’ve been fighting.”  

When presenting these findings:
1. Bring clear evidence.  
2. Show downstream compensations.  
3. Recommend whether to update specifications or processes.  
4. Approach carefully — this can be politically sensitive.

In many cases, adjusting specifications is the most practical solution if product functionality is unaffected.

---

## Correlating Across Hardware Changes (Touch → Scan → Laser)

Switching from touch probing to analog scanning or laser scanning introduces natural, unavoidable differences:

- A touch point is a single, discrete measurement.  
- A laser scan produces thousands of points.  

To compare systems:
- Align scan settings  
- Define how “representative points” are extracted  
- Match filters and smoothing  
- Match algorithms as closely as possible  

You are no longer comparing apples to apples.  
You must control the math and filtering to make correlation meaningful.

---

## The Real Lesson: Correlation Is Not a Pass/Fail Event — It’s a Statistical Validation

A correlation that “matches on the first try” is not success — it’s luck.

A robust correlation:
- Is statistical  
- Uses repeatability data  
- Validates both systems independently  
- Compares averages, not one-off runs  
- Controls math and algorithms  
- Accounts for hardware differences  

Only after all these steps is it appropriate to decide whether two systems truly correlate.

---

## Final Thoughts

Correlation is far more than matching two sets of numbers.  
It is the process of understanding:

- The stability of your measurement system  
- The mathematical differences between platforms  
- The statistical behavior of your program  
- The risks of hidden bias  
- The realities of legacy system drift  
- The strengths of modern CMM technology  

Done correctly, correlation builds trust in the new system and confidence across your entire quality organization.

Done poorly, it becomes a cycle of chasing ghosts.

This structured approach ensures you avoid the traps, diagnose real issues, and deliver a clean, defensible transition to modern metrology tools.
