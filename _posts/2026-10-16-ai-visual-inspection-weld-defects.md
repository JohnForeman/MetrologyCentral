---
layout: post
title: "AI Visual Inspection for Weld Defects: Real Deployments in Automotive"
permalink: /guides/ai-visual-inspection-weld-defects/
description: "What AI weld inspection actually looks like in production: Audi spot welds and weld spatter, MIG/laser seams on body-in-white, and EV battery tab welds, with sourced results."
categories: [guides]
tags: [AI inspection, weld inspection, machine vision, automotive, body-in-white]
---

Weld inspection is one of the most common targets for AI visual inspection. Welds vary naturally in appearance, so rule-based vision either misses defects or floods the line with false rejects. This guide covers **only published deployments** from the [AI Inspection Atlas](/atlas/). Each result below is quoted from its source, and the original is linked.

## 1. Spot welds at scale: Audi Neckarsulm

Audi rolled out an AI system for resistance spot weld quality in body construction, developed at Neckarsulm and then extended to other Volkswagen Group plants. Audi says it "analyzes around 1.5 million spot welds on 300 vehicles each shift." Before this, staff used ultrasound to check samples manually. Audi also built the process to be audit- and certification-proof, working with DGQ and Fraunhofer IAO/IPA.

Note: this system analyzes **welding process data**, not camera images. That's a useful reminder that "AI weld inspection" doesn't always mean vision. [Case and source](/atlas/audi-neckarsulm-spot-welds/)

## 2. Weld spatter on the underbody: Audi + Siemens

Audi trained its own model on images from **eight cameras** that capture the car body underside after welding, and runs it on Siemens Industrial Edge. Blue lights mark the spatter so operators can remove it. Siemens: "The AI reliably detects weld splatter and helps workers remove it." [Case and source](/atlas/audi-siemens-weld-spatter/)

## 3. MIG and laser seams on body-in-white: MVTec HALCON (DGH Group)

For a large French automotive group, integrator DGH Group inspects MIG and laser welds with 2D cameras and MVTec HALCON. **Instance segmentation** finds the seam, then **anomaly detection** flags cracks, incomplete seams and irregular patterns. On training data, DGH says "mainly 'good images' of the welded joints ... were required." That matters, because real defect images are scarce. [Case and source](/atlas/mvtec-dgh-biw-welds/)

## 4. EV battery tab welds: Panasonic Energy, Kansas

Panasonic Energy combined rule-based inspection with HALCON deep learning for laser weld marks on electrode tabs. It separates harmless scratches from real defects like weld spattering. A verification test "resulted in a 57.3% reduction in the number of over-detected discharges," and the system was then rolled out at the Kansas plant. [Case and source](/atlas/mvtec-panasonic-battery/)

## 5. Welded sleeves and connectors: UnitX

UnitX reports inline AI inspection of automotive sleeves with weld slag, porosity and broken welds ("0% False Acceptance Rate (Critical Defects)", "≤ 4.5s Cycle Time"). It also reports connectors with weld misalignment ("0% False Acceptance Rate", "≤ 10% False Rejection Rate"). These are vendor-published results. [Sleeves](/atlas/unitx-sleeve/) · [Connectors](/atlas/unitx-connectors/)

## What these deployments have in common

- **Anomaly detection trained on mostly good images** (DGH) gets around the shortage of defect samples.
- **Hybrid systems** (Panasonic) keep rule-based tools and use deep learning to make the final call, which mainly cuts false rejects.
- **Results are reported as false accept and false reject rates plus cycle time**, not just "accuracy." Ask vendors for the same.
- **Not all weld AI is vision.** Process-data models (Audi spot welds) can cover welds that cameras can't see.

**Next:** [How to scope an AI inspection pilot](/guides/how-to-scope-an-ai-inspection-pilot/) · Filter the Atlas for [weld cases](/atlas/fit/?defect=Weld%20%26%20spatter) · Find an [integrator](/integrators/)
